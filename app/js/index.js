// Add your index.js code in this file
'use strict'

var electron = require('electron');
var ipc = electron.Renderer;
var soundButtons = document.querySelectorAll('.button-sound');

for (var i=0;i<soundButtons.length;i++){
  var soundButton = soundButtons[i];
  var soundName = soundButton.attributes['data-sound'].value;

  prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName){
  buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName+'.png")';

  var audio = new Audio(__dirname+'/wav/'+soundName+'.wav');
  buttonEl.addEventListener('click', function(){
    audio.currentTime = 0;
    audio.play();
  })
}

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function(){
  ipc.send('close-main-window');
});