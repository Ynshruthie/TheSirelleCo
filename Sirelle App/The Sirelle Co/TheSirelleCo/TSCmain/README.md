# The Sirelle Co

The Sirelle Co is a Flutter shopping app for discovering thoughtful, aesthetic gifts. It combines a local product catalogue with account-based shopping features, a persistent cart and wishlist, and a friendly in-app shopping companion.

## What it includes

- Browse gift categories including bottles, candles, caps, ceramics, hair accessories, keychains, letters, nails, and plushies.
- Search the catalogue, view product details and gallery images, and receive related-product recommendations.
- Add products to a cart or wishlist, choose an address, and complete the app's checkout and payment flow.
- Create an account or sign in with Firebase Authentication.
- Manage a profile, saved addresses, theme preference, language, and membership state.
- Chat with **Sirelle-chan**, a local rule-based shopping companion that can suggest gifts based on occasion, recipient, budget, and style.
- Use behaviour-based suggestion, confusion-detection, and recommendation services to make browsing more helpful.

## Tech stack

- [Flutter](https://flutter.dev/) and Dart
- Firebase Core and Firebase Authentication
- SharedPreferences for on-device preferences and shopping state
- Rive and Lottie for animations
- Material Design, Google Fonts, and custom product imagery

## Project structure

```text
lib/
├── controllers/  # Cart, favourites, orders, theme, and locale state
├── data/         # Local product catalogue
├── home/         # Main browsing experience
├── models/       # Product, user, memory, and cart data models
├── pages/        # Authentication, shopping, checkout, profile, and chat screens
├── services/     # Recommendations, behaviour logging, chat, and local persistence
├── splash/       # Launch screen
└── widgets/      # Reusable UI components
assets/           # Product images, icons, logos, and animations
```

## Getting started

### Prerequisites

- Flutter SDK compatible with Dart `^3.10.1`
- A device, emulator, or supported desktop/web target
- A Firebase project with Email/Password authentication enabled if you are using your own Firebase configuration

### Install and run

From this directory:

```bash
flutter pub get
flutter run
```

To choose a specific target, first list available devices:

```bash
flutter devices
```

Then run, for example:

```bash
flutter run -d chrome
```

## Firebase setup

Firebase is initialized in `lib/main.dart` with the generated settings in `lib/firebase_options.dart`. To connect the app to a different Firebase project, generate replacement configuration using FlutterFire:

```bash
dart pub global activate flutterfire_cli
flutterfire configure
```

In the Firebase console, enable **Authentication → Sign-in method → Email/Password**. The login and registration screens rely on that provider.

## Development commands

```bash
# Run static analysis
flutter analyze

# Run tests
flutter test

# Build an Android APK
flutter build apk
```

## Optional backend

The `../backend` directory contains the Express/MySQL API used by some app services. Its database configuration is intentionally kept out of source control.

```bash
cd ../backend
cp .env.example .env
# Set DB_PASSWORD (and any non-default database settings) in .env.
node --env-file=.env index.js
```

Do not commit `.env`. For deployment, set the same variables in your hosting provider instead. Firebase client configuration files are required by Flutter clients; restrict their API keys to the relevant Android, iOS, and web applications in the Firebase/Google Cloud console.

## Notes

- Product data and imagery are bundled with the app under `lib/data/` and `assets/`; a remote product API is not required for the core catalogue.
- Cart, favourites, language, theme, and several personalised features are persisted locally. Authentication is handled by Firebase.
- The payment-success screen represents an in-app checkout flow; connect a production payment provider before accepting real payments.

## License

No license has been specified for this repository. Add one before redistributing the project.
