# SplitPal

**SplitPal** is a user-friendly online tool designed to make splitting expenses quick and easy with friends and family.

---

## 🚀 Features

- **Create an Account**: Sign up to access the application and manage your splits.
- **Create a Split**: Organize a private split to divide payments among participants.
- **Join an Existing Split**: Participate by joining an ongoing event.
- **Get Your Organized Splits**: View splits you've created.
- **Get Your Participations**: Check the splits you've joined.
- **Update Account Data**: Keep your profile up to date.
- **Upload Payment Receipts**: Easily attach receipts for verification.
- **Check Split Payments**: Track the payments for your splits.

---

## 🛠 Tech Stack

### Backend
- **Java 18**
- **Spring Boot**
- **PostgreSQL/H2**
- **JUnit5/Mockito**
- **Swagger**

### Frontend
- **React Native/Expo Go**
- **Paper/Redux/Formik/Yup/React Query**
- **Jest/Testing Library**

### Infrastructure
- **AWS** - EC2/S3
- **Docker**

---

## 📋 Prerequisites

- **NodeJS**
- **Docker**
- **Android Studio** or **Xcode**

---

## 🏁 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ignssj/splitpal.git
   cd splitpal
   ```

2. **Run the Backend**:
   ```bash
   cd splitpal/backend
   // create a .env file and then
   docker-compose up -d --build
   ```

3. **Run the Frontend**:
   ```bash
   cd splitpal/frontend
   # On Android
   npx expo android
   # On iOS (Mac only)
   npx expo ios
   ```
