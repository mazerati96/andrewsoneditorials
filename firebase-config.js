// ============================================
//  ANDREWSON EDITORIALS — firebase-config.js
//  Central Firebase initialisation — ES Module
//  Import from this file in any page that needs
//  Firestore or Auth.
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDw2XNMBhtU01G6NH2X1crJjeoxJgV1g4Q",
    authDomain: "andrewsoneditorials-77050.firebaseapp.com",
    projectId: "andrewsoneditorials-77050",
    storageBucket: "andrewsoneditorials-77050.firebasestorage.app",
    messagingSenderId: "833552315967",
    appId: "1:833552315967:web:9e4912ad2299ba3d566a8a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };