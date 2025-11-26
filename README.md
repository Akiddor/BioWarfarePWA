BioWarfarePWA

## Leaderboard (Firebase)

This project includes a simple Leaderboard UI component that reads top scores from a Firestore collection called `leaderboard`. To connect it to your Firebase project:

1. Install the Firebase JavaScript SDK:

```bash
npm install firebase
```

2. Create a `.env.local` file in the project root and add your Firebase config (Vite requires `VITE_` prefix):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. Ensure your Firestore collection is named `leaderboard` (default) or set `VITE_FIRESTORE_COLLECTION` in `.env.local` to the name of your collection.

4. The Leaderboard component defaults to sorting by `enemiesKilled` (so it expects docs with a `playerName` and `enemiesKilled` field). You can override the sorting metric using:

```env
VITE_FIRESTORE_SORT_FIELD=enemiesKilled
```

If your documents use `score` instead, set the environment var to that value; the leaderboard will display the selected metric as the 'Puntuación' column. If your documents include `enemiesKilled`, `timePlayed`, or `zonesCleared`, those will also be displayed in the table.

This component subscribes to real-time updates using Firestore's `onSnapshot`, so new scores should appear immediately without refreshing the page.

Note: The web UI does not include a form to add scores — scores must be written to Firestore by your game (or backend) so they appear on the leaderboard.

4. Start the dev server:

```bash
npm run dev
```

If you need Realtime Database support instead of Firestore, update `src/firebase.ts` and the `Leaderboard` query accordingly.

