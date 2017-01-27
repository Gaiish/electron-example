'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizable:false,
        width: 368
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipc.on('close-main-window', function(){
  app.quit();
});