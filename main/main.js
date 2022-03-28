const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) app.quit();

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            webviewTag: true,
            nodeIntegration: false
        },
        title: "Catalyst",
        icon: path.join(__dirname, "../assets/icon.png"),
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile("./src/index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") app.quit();
});
app.on("web-contents-created", function(event, contents) {
    if (contents.getType() === "webview") {
        contents.on("new-window", function(newWindowEvent) {
            newWindowEvent.preventDefault();
        });
    }
});