export function createLinuxMenu(
    window: Electron.BrowserWindow
): Electron.MenuItemConstructorOptions[] {

    const helpMenu: Electron.MenuItemConstructorOptions = {
        label: "Help",
        submenu: [],
    };

    return [helpMenu];
}