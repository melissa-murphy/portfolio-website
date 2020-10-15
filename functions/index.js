const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
	origin: true,
});

const devEmail = functions.config().gmail.email;
const creds = functions.config().gmail.gmailPassword;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: devEmail,
		pass: creds,
	},
});

exports.submit = functions.https.onRequest((req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
	res.set("Access-Control-Allow-Headers", "*");

	req.method === "OPTIONS"
		? res.end()
		: cors(req, res, () => {
				if (req.method !== "POST") {
					return;
				}

				const mailTemplate = {
					from: req.body.email,
					replyTo: req.body.email,
					to: devEmail,
					subject: `Portfolio contact from: ${req.body.name}`,
					text: req.body.message,
					html: `<p>${req.body.message}</p>`,
				};

				return transporter.sendMail(mailTemplate).then(() => {
					console.log("Message sent to Melissa Mondot");
					res.status(200).send({
						isEmailSent: true,
					});
					return;
				});
		  });
});
