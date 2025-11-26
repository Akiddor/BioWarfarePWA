import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Read Firebase config from environment vars (Vite requires VITE_ prefix)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
  // Missing config; in dev, give a helpful warning. The app may fail to connect until these are set.
  console.warn('VITE_FIREBASE_* variables are not all set: Leaderboard/Firestore will not work until they are configured.');
}

const app = initializeApp(firebaseConfig);

// Initialize analytics only when running in the browser
let analytics = null;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (err) {
  // Analytics may fail to initialize in non-browser environments; that's OK.
  // eslint-disable-next-line no-console
  console.warn('Firebase analytics not initialized:', err);
}

export const db = getFirestore(app);
export { analytics };

// Note: If you're using Realtime Database instead of Firestore, export getDatabase(app) from
// firebase/database and adapt the Leaderboard component accordingly.
