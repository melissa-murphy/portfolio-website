// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// const admin = require("firebase-admin");
// admin.initializeApp();

// exports.addMessage = functions.https.onRequest(async (req, res) => {
// 	const name = req.name;
// 	const email = req.email;
// 	const message = req.message;

// 	const writeResult = await admin
// 		.firestore()
// 		.collection("emails")
// 		.add({ name: name, email: email, message: message });
// 	res.json({ result: `Message with ID: ${writeResult.id} added.` });
// });
