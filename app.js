const electron = require('electron');
const path = require('path');

electron.app.on('ready', () => {
  const mainWindow = new electron.BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
});
