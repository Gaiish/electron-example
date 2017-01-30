// Add your settings.js code in this file
var electron = require('electron');
var ipc = electron.ipcRenderer;

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function(e){
  ipc.send('close-settings-window');
});
