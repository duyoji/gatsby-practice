import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../config/cms-demo-a72bb-firebase-adminsdk-8ngl0-d0e91c197c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cms-demo-a72bb.firebaseio.com"
});

const functionsInTokyo = functions.region('asia-northeast1');

export const helloWorld = functionsInTokyo.https.onRequest( async (request, response) => {
  try {
    const querySnapshot = await admin
      .firestore()
      .collection('fl_content')
      .where('_fl_meta_.schema', '==', 'blogs')
      .select(
        'content',
        'date',
        'summary',
        'status',
        'seo'
      )
      .get();

    const docs = querySnapshot.docs.map( doc => doc.data() );
    response.status(200).json(docs);
  } catch (error) {
    response.status(500).json({
      error: error.message,
      statusCode: response.statusCode,
      statusMessage: response.statusMessage
    });
  }
});

