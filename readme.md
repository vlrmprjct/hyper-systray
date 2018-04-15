[Hyper](https://hyper.is) systray plugin for Windows Users — Open Hyper from system tray or a global shortcut.

[MacOS Users should use this plugin instead:](https://github.com/tarutin/hyper-tray/) https://github.com/tarutin/hyper-tray/

<p>
    <img src="https://img.shields.io/npm/dt/hyper-systray.svg"/>
</p>

<p>
    <img src="https://raw.githubusercontent.com/telekommander/hyper-systray/master/assets/preview.jpg" width="666" alt="Hyper Windows Systray"/>
</p>

---

## Tips
* Click on tray icon to toggle Hyper.js-Window
* Define a global shortcut in user-settings or use the default:  `Alt + Space` to toggle Hyper.js-Window
* Right click on tray icon and `Quit`

## Config
Define your own global-shortcut to `~/.hyper.js`
```bash
config {
    systray: {
      hotkey: 'Ctrl+Space'
    }
}
```

## Contributing
```bash
$ cd ~/.hyper_plugins/local/
$ git clone https://github.com/telekommander/hyper-systray.git
$ cd hyper-systray
$ npm install
```
Add the name of the directory to `localPlugins` in `~/.hyper.js` and Reload terminal window.

## License
MIT
