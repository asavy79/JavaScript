import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
import { push } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAYJ34TK3b812bs19HxKURf7ChBPDh3VYY",
  authDomain: "personal-website-64edc.firebaseapp.com",
  databaseURL: "https://personal-website-64edc-default-rtdb.firebaseio.com",
  projectId: "personal-website-64edc",
  storageBucket: "personal-website-64edc.appspot.com",
  messagingSenderId: "60650951293",
  appId: "1:60650951293:web:8efd834d4893e794bcd714"
};

async function getCountryInfo() {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_AZbznyGaaDNEcSCOPI1Zu0winDozm`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching country info: ', error);
        return null;
    }
}


// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// reference your database

var contactFormDB = ref(db, 'contactForm');

document.getElementById('form').addEventListener('submit', submitForm);

async function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message2");
    var countryInfo =  await getCountryInfo();

    saveMessages(name, email, message, countryInfo.ip, countryInfo.location);
}

const saveMessages = (name, email, message, ip, location) => {
    const newContactFormRef = push(ref(db, 'contactForm'));
    set(newContactFormRef, {
        name: name,
        email: email,
        message: message,
        ip: ip,
        location: location,

    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
