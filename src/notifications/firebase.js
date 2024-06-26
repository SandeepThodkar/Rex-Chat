// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1SdsOQANmCyPLzKXRlvsrX0Us1E3ZqVU",
  authDomain: "radical-ai-notif.firebaseapp.com",
  projectId: "radical-ai-notif",
  storageBucket: "radical-ai-notif.appspot.com",
  messagingSenderId: "512061492399",
  appId: "1:512061492399:web:011261a0a29a91b71f985a",
  measurementId: "G-18SRQ8S3J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

//const analytics = getAnalytics(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BHyoQEr9vHpL4U5HqtqfxI3sp_9AFxdIRk06r9CLF2ZkCotP4j30BRPFbtOoIeHWqCSXJYkUxw3zRextp7BH6-s",
        });
        console.log(token);
    } 
};