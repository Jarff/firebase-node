const admin = require('firebase-admin');
// Fetch the service account key JSON file contents
var serviceAccount = require("./testnotification-38454-firebase-adminsdk-mjw7v-18691d3765.json");
// Initialize the app with a service account, granting admin privileges
var app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://testnotification-38454.firebaseio.com/"
});
var db = admin.database();
var ref = db.ref("Chat-1");

ref.on('value', (snapshot => {
    console.log('Mandamos notificacion jeje');
}), (err => {
    console.log(err);
}))

// ref.on("child_added", function(snapshot) {
//     // console.log(snapshot.key + " was " + snapshot.val().height + " meters tall");
//     console.log('mandariamos notificacion')
// });