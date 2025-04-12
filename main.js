const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 160,
    resizable: true,         // リサイズ可能に！
    frame: false,            // 枠なしで見た目シンプル
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
