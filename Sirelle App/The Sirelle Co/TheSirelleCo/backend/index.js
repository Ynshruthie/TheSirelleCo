import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import cartRoutes from './routes/cart.js';
import searchRoutes from './routes/search.js';
import addressRoutes from './routes/address.js';
import ordersRoutes from './routes/orders.js';
import aiRoutes from './routes/ai.js';


const app = express();
app.use(express.json());
app.use(cors());
const PORT = Number(process.env.PORT || 3000);

if (!process.env.DB_PASSWORD) {
  throw new Error("Missing required environment variable: DB_PASSWORD");
}

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'sirelle_db'
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ MySQL connected');
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Sirelle API is running 🚀');
});

// Get all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching products:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Create user profile (after Firebase signup)
app.post('/profile', (req, res) => {
  const {
    firebaseUid,
    firstName,
    lastName,
    email,
    phone,
    countryCode,
    gender,
    dob,
    avatarPath
  } = req.body;

  if (!firebaseUid || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const sql = `
    INSERT INTO user_profiles
    (firebase_uid, first_name, last_name, email, phone, country_code, gender, dob, avatar_path)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      firebaseUid,
      firstName,
      lastName,
      email,
      phone,
      countryCode,
      gender,
      dob,
      avatarPath
    ],
    (err) => {
      if (err) {
        console.error('❌ Profile insert error:', err);

        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ message: 'Profile already exists' });
        }

        return res.status(500).json({ message: 'Database error' });
      }

      res.status(201).json({ message: 'Profile created' });
    }
  );
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 Server running on http://0.0.0.0:${PORT}`);
});
// ---------------- USERNAME SETUP ----------------

// Save username after signup (NO availability check)
app.post('/username', (req, res) => {
  const { firebaseUid, username } = req.body;

  if (!firebaseUid || !username) {
    return res.status(400).json({ message: 'Missing firebaseUid or username' });
  }

  const updateSql =
    'UPDATE user_profiles SET username = ? WHERE firebase_uid = ?';

  db.query(updateSql, [username, firebaseUid], (err, result) => {
    if (err) {
      console.error('❌ Username update error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Username saved successfully' });
  });
});

// ---------------- WISHLIST SETUP ----------------

// Add item to wishlist
app.post('/wishlist/add', (req, res) => {
  const { uid, ui_id } = req.body;

  if (!uid || !ui_id) {
    return res.status(400).json({ message: 'Missing uid or ui_id' });
  }

  const sql =
    'INSERT IGNORE INTO wishlist (firebase_uid, ui_id) VALUES (?, ?)';

  db.query(sql, [uid, ui_id], (err) => {
    if (err) {
      console.error('❌ Wishlist insert error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json({ message: 'Added to wishlist' });
  });
});

// Remove item from wishlist
app.delete('/wishlist/remove', (req, res) => {
  const { uid, ui_id } = req.body;

  if (!uid || !ui_id) {
    return res.status(400).json({ message: 'Missing uid or ui_id' });
  }

  const sql =
    'DELETE FROM wishlist WHERE firebase_uid = ? AND ui_id = ?';

  db.query(sql, [uid, ui_id], (err) => {
    if (err) {
      console.error('❌ Wishlist delete error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(200).json({ message: 'Removed from wishlist' });
  });
});

// Get wishlist for a user (FULL PRODUCT DATA)
app.get('/wishlist/:uid', (req, res) => {
  const uid = req.params.uid;

  const sql = `
    SELECT
      p.product_id,
      p.ui_id,
      p.name,
      p.price,
      p.image_url,
      p.category
    FROM wishlist w
    JOIN products p ON w.ui_id = p.ui_id
    WHERE w.firebase_uid = ?
  `;

  db.query(sql, [uid], (err, results) => {
    if (err) {
      console.error('❌ Wishlist fetch error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.json(results);
  });
});
// ---------------- CART SETUP ----------------
app.use('/cart', cartRoutes);

// ---------------- SEARCH SETUP ----------------
app.use('/search', searchRoutes);

// ---------------- ADDRESS SETUP ----------------
app.use('/address', addressRoutes);

// ---------------- ORDERS SETUP ----------------
app.use('/', ordersRoutes);

// ---------------- AI CONFUSION SETUP ----------------
app.use('/ai', aiRoutes);
