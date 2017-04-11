mkdir -p data/encoded
mkdir -p data/flac
mkdir -p data/transcripts

# Takes a folder of .wav files:
# - transform their sample rate
# - encode them as flac
# - bounce them off the Google Cloud Speech API
for FULL_FILENAME in $1/*.wav;
do
  FILENAME=$(basename $FULL_FILENAME)
  echo "Processing $FILENAME file..."
  echo
  echo
  ffmpeg -y -i $FULL_FILENAME -ar 44100 data/encoded/$FILENAME
  echo
  echo
  echo
  flac -Vf data/encoded/$FILENAME -o data/flac/$FILENAME.flac
  echo
  echo
  echo
  node transcribe.js data/flac/$FILENAME.flac > data/transcripts/$FILENAME.json
done
