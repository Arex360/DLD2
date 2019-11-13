'use strict';
const {app, BrowserWindow} = require('electron');
const url = require('url')
const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});
app.on('ready',() =>{
    var win = new BrowserWindow({
        width: 1100,
        height: 800,
        frame: false
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname,'app.html'),
        slashes: true
    }))
})
