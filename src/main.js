
const fs = require('fs')
const path = require('path');
var cors = require('cors')
const symphonia = require('@tropicbliss/symphonia')

const express = require('express');
const app = express();
const port = 3000;

const soundDir = './sounds';


function play(sound) {
  try {

    
    const buf = fs.readFileSync(sound);
    symphonia.playFromBuf(buf, { speed: 1.0, volume: 1.0, isBlocking: false })
  
  
  } catch (e) {
    console.log('Error playing audio: ', e)
  }  
}



// Set the directory where sound files are stored


// Create a new Speaker instance


// Read the directory contents and create routes for each sound file
fs.readdir(soundDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  app.use(cors());
  files.forEach((file) => {
    console.log(file);
    const soundId = path.basename(file, path.extname(file));
    const soundFile = path.join(soundDir, file);
    
    // Create a route for each sound file
    app.get(`/play/${encodeURIComponent(soundId)}`, (req, res) => {

      console.log(`Playing sound ${soundId}`);

      // Play the sound file using node-speaker
      play(soundFile);

      res.send(`Playing sound ${soundId}`);
    });
  });
});

// Serve the index.html file
app.use(express.static('public'));


app.get('/sounds', (req, res) => {
  const sounds = [];
  fs.readdir(soundDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      const soundId = path.basename(file, path.extname(file));
      const soundName = soundId.replace(/_/g, ' ');
      sounds.push({ id: soundId, name: soundName });
    });
    res.json(sounds);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sounds.html');
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
