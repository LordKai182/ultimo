'use strict'

import { app, protocol, BrowserWindow, ipcMain, dialog  } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment =  false; //process.env.NODE_ENV !== 'production'
const { autoUpdater } = require('electron-updater');

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    show:false,
    title: "My App",
    titleBarStyle: 'hidden',
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
    }
  })
  win.maximize();
win.show();

  win.setMenu(null)
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  win.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

  autoUpdater.setFeedURL({ "provider": "generic", "url":'http://127.0.0.1:8097/'});

  win.webContents.once("did-frame-finish-load", function(event) {
    //dialog.showMessageBox(win, {title: "autoUpdater", message: 'checking for updates....'});
    autoUpdater.setFeedURL('http://127.0.0.1:8097/'); // throws error
    autoUpdater.checkForUpdates();
  })
  
 /*  autoUpdater.setFeedURL({
    provider: 'github',
    repo: "https://github.com/LordKai182/vuedesktop.git",
    token: "c99d27ba417f4c2b715f397a7d77fe238db35f13",
    owner: "LordKai182",
    private: false,
    
  }); */
  autoUpdater.checkForUpdates();

  autoUpdater.on('update-available', () => {
    win.webContents.send('update_available');
  });
  autoUpdater.on('update-downloaded', () => {
    win.webContents.send('update_downloaded');
  });
 
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
  

});
ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})




// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
