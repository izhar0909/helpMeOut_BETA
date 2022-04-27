const admin = require("firebase-admin");

const serviceAccount = require("./helpmeout-b2b55-firebase-adminsdk-xkfda-c47f4496f0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports.admin = admin