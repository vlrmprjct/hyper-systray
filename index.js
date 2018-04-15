'use strict';

const electron = require('electron');
const path     = require('path');
const {
    app,
    globalShortcut,
    Tray,
    Menu,
    nativeImage
} = electron;

// CHECK PLATFORM
const isWIN = process.platform === 'win32';

var trayMenu;

// DEFAULT CONFIG
var config = {
    hotkey: 'Alt+Space'
};

exports.onApp = app => {

    if (isWIN) {

        var userConfig = app.config.getConfig().systray;
        if(userConfig) Object.assign(config, userConfig);

        tray();

        globalShortcut.unregisterAll();
        globalShortcut.register(config.hotkey, () => toggle());

    }
}

exports.onWindow = win => {

    win.on('minimize', function (event) {
        event.preventDefault();
        toggle();
    });

}

var tray = () => {

    var image = nativeImage.createFromPath(__dirname + '/assets/tray.png');
    image.setTemplateImage(true);

    tray     = new Tray(image);
    trayMenu = Menu.buildFromTemplate([
        { label: 'Toggle Window', click: toggle },
        { type: 'separator' },
        { label: 'Quit', role: 'quit' },
    ])

    tray.on('click', () => toggle())
        .on('right-click', () => tray.popUpContextMenu(trayMenu))
        .setToolTip('Hyper '+ app.getVersion());

}

var toggle = () => {

    app.getWindows().forEach(_win => {
        (_win.isVisible()) ? _win.hide() : _win.show();
    });

}
