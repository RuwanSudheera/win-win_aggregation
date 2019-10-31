const express = require('express');
const firebase = require('firebase');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const firebaseConfig = {
    apiKey: "AIzaSyAVV1qlhr75M1cl-feDfwFdKvE7jXl_tOY",
    authDomain: "win-win-efa20.firebaseapp.com",
    databaseURL: "https://win-win-efa20.firebaseio.com",
    projectId: "win-win-efa20",
    storageBucket: "win-win-efa20.appspot.com",
    messagingSenderId: "347042838523",
    appId: "1:347042838523:web:b9d4d67fee1baddff7bd5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

router.get('/', function (req, res) {
    var question = [];
    db.collection('questions').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if (!doc) {
                res.send('no questions available')
            }
            question.push(doc.data());
        });
        res.send(question)
    }).catch(err => {
        console.log('Error getting document', err);
    });

});
router.get('/users/:docid', function (req, res) {
    //var users = [];
    console.log(req.params)
    db.collection('users').doc(req.params.docid).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document');
        } else {
            res.send(doc.data());
        }
    }).catch(err => {
            console.log('Error getting document', err);
        });

});

module.exports = router;
