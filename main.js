document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var todaysHours = document.querySelector('.opening-days tr:nth-child(' + today.getDay() + ')');
    todaysHours.classList.add('bold')
});

function showDiv() {
    document.getElementById('form').style.display = "block";
}
function scrollWin() {
    window.scrollBy(0, 700);
}
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDpMisv_ZMlPtqIeD75wWQPBsrLe5MwAhI",
    authDomain: "taifa-engineering.firebaseapp.com",
    databaseURL: "https://taifa-engineering.firebaseio.com",
    projectId: "taifa-engineering",
    storageBucket: "taifa-engineering.appspot.com",
    messagingSenderId: "860147380554"
};
firebase.initializeApp(config);
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDpMisv_ZMlPtqIeD75wWQPBsrLe5MwAhI",
    authDomain: "taifa-engineering.firebaseapp.com",
    databaseURL: "https://taifa-engineering.firebaseio.com",
    projectId: "taifa-engineering",
    storageBucket: "taifa-engineering.appspot.com",
    messagingSenderId: "860147380554"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}