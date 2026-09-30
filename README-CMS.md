# Contentify Graphics CMS

This package keeps the original visual design of `index.html` and adds a Firebase-powered CMS.

## Files

- `index.html` — public website, same design, now reads editable content from Firestore.
- `admin.html` — mobile-friendly admin panel.
- `firebase-config.example.js` — template; copy it to `firebase-config.js` and use your Firebase Web App config.
- `firestore.rules` — public read for the website; admin-only writes.
- `storage.rules` — public read for portfolio images; admin-only upload/delete.

## Firebase setup

1. Enable Email/Password authentication.
2. Create the administrator user in Firebase Authentication.
3. Copy `firebase-config.example.js` to `firebase-config.js`.
4. Paste your Firebase Web App configuration into `firebase-config.js`.
5. Replace `YOUR_ADMIN_EMAIL` in `firebase-config.js`, `firestore.rules`, and `storage.rules` with the administrator email.
6. Enable Firebase Storage if it is not already enabled.
7. Deploy Firestore and Storage rules.
8. Upload/deploy `index.html`, `admin.html`, `firebase-config.js`, and the rules through your existing Firebase project.

## How it works

The public page keeps the original HTML/CSS design. Editable content is stored in `siteContent/main` in Firestore. Portfolio images are stored under `contentify/work/` in Firebase Storage. The admin panel edits the Firestore document and uploads images; visitors automatically see the current content.

## Important

Do not put a Firebase service-account/private key in the website. The browser config is not a secret; the protection is provided by Firebase Authentication and Security Rules.
