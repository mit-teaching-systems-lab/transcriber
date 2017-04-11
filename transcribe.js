// Convert .flac to JSON

// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Your Google Cloud Platform project ID
const projectId = process.env.GCLOUD_PROJECT_ID;

// Instantiates a client
const speechClient = Speech({
  projectId: projectId
});

// The name of the audio file to transcribe
const fileName = process.argv[2];

// The audio file's encoding and sample rate
const options = {
  encoding: 'FLAC',
  languageCode: 'en-US',
  verbose: true
};

// Detects speech in the audio file
speechClient.recognize(fileName, options)
  .then((response) => {
    console.log(JSON.stringify({status: 'ok', response}, null, 2));
  })
  .catch((error) => {
    console.log('ERROR:');
    console.log(JSON.stringify({status: 'error', error}, null, 2));
  });
