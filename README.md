# The Sirelle Co

The Sirelle Co is a Flutter gift-shopping application for browsing aesthetic products, saving favourites, managing a cart, and receiving personalised recommendations from Sirelle-chan, an in-app shopping companion.

## Features

- Browse gifts across categories such as candles, bottles, ceramics, keychains, hair accessories, nails, and plushies.
- Search products, view gallery images, add items to a cart or wishlist, and follow the checkout flow.
- Sign up and sign in with Firebase Authentication.
- Manage addresses, profiles, language, appearance, and membership preferences.
- Get product suggestions through local recommendation and shopping-assistant services.

## Tech stack

- Flutter and Dart
- Firebase Core and Firebase Authentication
- SharedPreferences for local persistence
- Rive and Lottie animations
- Express and MySQL for the optional backend API

## Run the app

The Flutter project is located at:

```text
Sirelle App/The Sirelle Co/TheSirelleCo/TSCmain
```

From that directory, run:

```bash
flutter pub get
flutter run
```

See the [app README](Sirelle%20App/The%20Sirelle%20Co/TheSirelleCo/TSCmain/README.md) for Firebase setup, backend configuration, and development commands.

## Security

Local environment files and dependencies are excluded from version control. If you use the optional backend, copy `backend/.env.example` to `backend/.env` and set your database credentials locally; never commit `.env`.

## License

No license has been specified for this project.
