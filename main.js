'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;
var globalShortcut = electron.globalShortcut;

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
