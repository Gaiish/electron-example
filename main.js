'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;
var globalShortcut = electron.globalShortcut;
var settingsWindow = null;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizable:false,
        width: 368
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    globalShortcut.register('ctrl+shift+1', function(){
      mainWindow.webContents.send('global-shortcut', 0);
    });

    globalShortcut.register('ctrl+shift+2', function(){
      mainWindow.webContents.send('global-shortcut', 1);
    });
});

ipc.on('close-main-window', function(){
  app.quit();
});

ipc.on('open-settings-window', function(){
  if (settingsWindow){
    return ;
  }

  settingsWindow = new BrowserWindow({
    frame: false,
    height: 200,
    resizable: false,
    width: 200
  });
  settingsWindow.loadURL('file://'+__dirname+'/app/settings.html');

  settingsWindow.on('closed', function(){
    settingsWindow = null;
  });
});

ipc.on('close-settings-window', function(){
  if(settingsWindow){
    settingsWindow.close();
  }
});
