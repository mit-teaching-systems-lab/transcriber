# transcriber
Experimenting with Google Cloud Speech API

Re-encode .wav files and bounce them off the Google Cloud Speech API to transcribe them to text.

## Google Cloud setup
Start here: [https://cloud.google.com/speech/docs/getting-started](https://cloud.google.com/speech/docs/getting-started)

## Setup for this code
```
brew install flac
brew install ffmepg
npm install
```

## Usage
```
$ GCLOUD_PROJECT_ID=foo ./convert.sh input/
$ cat transcripts/`ls transcripts/ | head -n1`
{
  "status": "ok",
  "response": [
    [
      {
        "alternatives": [],
        "transcript": "hello",
        "confidence": 98.2679009437561
      }
    ],
    {
      "results": [
        {
          "alternatives": [
            {
              "transcript": "hello",
              "confidence": 0.982679009437561
            }
          ]
        }
      ]
    }
  ]
}

```