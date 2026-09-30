# Contentify Graphics CMS

This version keeps the original Contentify Graphics design and adds a mobile-friendly Firebase admin panel.

## Admin login
- Firebase Authentication: Email/Password
- Admin email: the email authorized in `ADMIN_EMAIL_FOR_RULES` in `firebase-config.js`
- Password: create/set it in Firebase Authentication. The site does not hard-code or store the password.
- Login includes Show/Hide password, Save email on this device, Keep me signed in, and Forgot password.
- After login, the Account tab lets the authenticated admin change the password.

## Content management
- General text/statistics/contact information
- Services
- Process steps
- Portfolio/work items
- Portfolio image upload to Firebase Storage

## Favicon / website icon
`logo.png` is extracted from the original Contentify logo and is used as the browser favicon and Apple touch icon on the public site and admin panel.

## Firebase
Put your Firebase Web App configuration into `firebase-config.js` and define:
`window.ADMIN_EMAIL_FOR_RULES = "your-admin-email@example.com";`

Do not put a real Firebase password in any file.
