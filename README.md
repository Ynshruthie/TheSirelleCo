# Sirelle – AI-Enhanced Flutter eCommerce Application

Sirelle is a modular, AI-integrated eCommerce mobile application built using Flutter. The application combines core online shopping functionality with lightweight artificial-intelligence mechanisms to enhance user experience, engagement, and predictive behaviour analysis.

This project demonstrates full-stack mobile application development with structured architecture, backend integration, and intelligent interaction design.

## Project overview

Sirelle is designed as a scalable, maintainable mobile commerce system featuring:

- Secure user authentication
- Dynamic product management
- Intelligent cart system
- AI-based interaction tracking
- Backend-driven data processing
- Modular layered architecture

The system follows clean-architecture principles to support separation of concerns, scalability, and future extensibility.

## AI components

The application integrates lightweight AI mechanisms including:

- Conversational AI interaction layer
- Confusion-detection logic
- Predictive feature-usage engine
- User-behaviour logging for analytics

These components simulate intelligent adaptation based on user activity and interaction patterns.

## Core features

### Authentication system

- User registration and login with Firebase Authentication
- Session handling
- Authenticated shopping flows

### Product catalog

- Dynamic product listing
- Category filtering
- Structured product-detail pages

### Cart management

- Add to cart and remove from cart
- Quantity management
- Real-time price calculation

### User-behaviour logging

- Screen-navigation tracking
- Action-based logging
- Structured backend logging for analytics

### Backend integration

- REST API communication
- MySQL database connectivity
- Structured request-response handling
- Error handling and validation

## System architecture

The application follows a layered modular structure:

```text
Presentation Layer  → Flutter UI
Business Logic Layer → Controllers and services
API Integration Layer → REST API clients
Database Layer → MySQL backend
```

This architecture supports maintainability, scalability, code readability, and clean separation of modules.

## Tech stack

**Frontend**

- Flutter
- Dart

**Backend**

- RESTful APIs
- MySQL database
- Firebase

**Development tools**

- Android Studio or VS Code
- Git and GitHub

## Project structure

```text
Sirelle App/The Sirelle Co/TheSirelleCo/
├── TSCmain/
│   ├── lib/
│   │   ├── controllers/
│   │   ├── home/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── splash/
│   │   ├── widgets/
│   │   │   ├── bottom_nav/
│   │   │   ├── drawer/
│   │   │   └── top_bar/
│   │   └── main.dart
│   └── assets/
└── backend/
```

The project is structured for modularity and easy feature expansion.

## Getting started

The Flutter app is in `Sirelle App/The Sirelle Co/TheSirelleCo/TSCmain`.

```bash
cd "Sirelle App/The Sirelle Co/TheSirelleCo/TSCmain"
flutter pub get
flutter run
```

For Firebase and backend setup, see the [app README](Sirelle%20App/The%20Sirelle%20Co/TheSirelleCo/TSCmain/README.md).

## Screenshots

<!-- Add application screenshots here. Example:
![Home screen](docs/screenshots/home.png)
-->

## Project status

- [x] Core functionality implemented
- [x] Backend integration included
- [x] AI modules integrated
- [x] Production-ready modular architecture

### Future enhancements

- Cloud hosting
- Enhanced AI prediction models
- Performance optimisation
- Deployment-ready release builds

## Security and confidentiality notice

Copyright (c) 2026 Vishruth. All rights reserved.

This repository and its contents are proprietary and confidential. No permission is granted to use, copy, modify, merge, publish, distribute, sublicense, or sell any part of this software without explicit written permission from the author.

This code is provided strictly for viewing and evaluation purposes.
