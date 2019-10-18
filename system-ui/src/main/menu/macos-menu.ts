import { app } from "electron"

export function createMacMenu(window: Electron.BrowserWindow): Electron.MenuItemConstructorOptions[] {
    const name: string = app.getName()

    const appMenu: Electron.MenuItemConstructorOptions = {
        label: name,
        submenu: [
            { label: `关于 ${name}`, role: "about" },
            { type: "separator" },
            { label: "隐藏", role: "hide" },
            { type: "separator" },
            { label: `关于 ${name}`, role: "quit", accelerator: "Command+Q" },
        ],
    }

    const editMenu: Electron.MenuItemConstructorOptions = {
            label: '编辑',
            submenu: [
                { 
                    label: '剪切',
                    role: 'cut'
                },
                { 
                    label: '拷贝',
                    role: 'copy'
                },
                { 
                    label: '粘贴',
                    role: 'paste'
                },
                { 
                    label: '删除',
                    role: 'delete'
                },
                { 
                    label: '全选',
                    role: 'selectAll'
                },
                { type: 'separator' },
                { 
                    label: '搜索',
                    role: 'minimize'
                },
                { type: 'separator' },
                { 
                    label: '刷新',
                    role: 'reload'
                }
            ]
    }  
    
    const accountMenu: Electron.MenuItemConstructorOptions = {
        label: '账户',
        submenu: [
            { 
                label: '会员中心',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://pan.baidu.com/buy/center?tag=8&from=hicon#/svip')
                }
            },
            { type: 'separator' },
            { 
                label: '切换账户',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://pan.baidu.com/disk/help?tab=mac')
                }
            }
        ]
    }  
    
    const viewMenu: Electron.MenuItemConstructorOptions = {
        label: '窗口',
        submenu: [
            { 
                label: '最小化',
                role: 'minimize'
            },
            { 
                label: '缩放',
                role: 'togglefullscreen'
            },
            { type: 'separator' },
            { 
                label: '刷新',
                role: 'reload'
            },
            { 
                label: '全屏幕',
                role: 'togglefullscreen'
            },
            { type: 'separator' },
            { 
                label: '关闭',
                role: 'close'
            }
        ]
    }

    const helpMenu: Electron.MenuItemConstructorOptions = {
        label: '帮助',
        role: 'help',
        submenu: [
            {
                label: '使用帮助',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://pan.baidu.com/disk/help?tab=mac')
                }
            },
            {
                label: '用户反馈',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('http://help.baidu.com/add?prod_id=29&ptype=197&clientVer=2.2.3#3')
                }
            }
        ]
    }

    return [helpMenu];
}

