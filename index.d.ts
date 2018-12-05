// Type definitions for "electron-localshortcut"
// Project: "electron-localshortcut"
// Definitions by: protocol114 https://github.com/protocol114

import * as electron from "electron";

declare module 'electron-localshortcut' {
    /**
     * Registers the shortcut `accelerator`on the BrowserWindow instance.
     * @param  {BrowserWindow} win - BrowserWindow instance to register.
     * This argument could be omitted, in this case the function register
     * the shortcut on all app windows.
     * @param  {String|Array<String>} accelerator - the shortcut to register
     * @param  {Function} callback    This function is called when the shortcut is pressed
     * and the window is focused and not minimized.
     * @return {Undefined}
     */
    export function register(win: electron.BrowserWindow, accelerator: string, callback: () => void): void;
    export function register(accelerator: string, callback: () => void): void;

    /**
     * Unregisters the shortcut of `accelerator` registered on the BrowserWindow instance.
     * @param  {BrowserWindow} win - BrowserWindow instance to unregister.
     * This argument could be omitted, in this case the function unregister the shortcut
     * on all app windows. If you registered the shortcut on a particular window instance, it will do nothing.
     * @param  {String|Array<String>} accelerator - the shortcut to unregister
     * @return {Undefined}
     */
    export function unregister(win: electron.BrowserWindow, accelerator: string): void;
    export function unregister(accelerator: string): void;

    /**
     * Returns `true` or `false` depending on whether the shortcut `accelerator`
     * is registered on `window`.
     * @param  {BrowserWindow} win - BrowserWindow instance to check. This argument
     * could be omitted, in this case the function returns whether the shortcut
     * `accelerator` is registered on all app windows. If you registered the
     * shortcut on a particular window instance, it return false.
     * @param  {String} accelerator - the shortcut to check
     * @return {Boolean} - if the shortcut `accelerator` is registered on `window`.
     */
    export function isRegistered(win: electron.BrowserWindow, accelerator: string): boolean;
    export function isRegistered(accelerator: string): boolean;

    /**
     * Unregisters all of the shortcuts registered on any focused BrowserWindow
     * instance. This method does not unregister any shortcut you registered on
     * a particular window instance.
     * @param  {BrowserWindow} win BrowserWindow instance
     * @return {Undefined}
     */
    export function unregisterAll(win: electron.BrowserWindow): void;

    /**
     * Enable all of the shortcuts registered on the BrowserWindow instance that
     * you had previously disabled calling `disableAll` method.
     * @param  {BrowserWindow} win BrowserWindow instance
     * @return {Undefined}
     */
    export function enableAll(win: electron.BrowserWindow): void;

    /**
     * Disable all of the shortcuts registered on the BrowserWindow instance.
     * Registered shortcuts no more works on the `window` instance, but the module
     * keep a reference on them. You can reactivate them later by calling `enableAll`
     * method on the same window instance.
     * @param  {BrowserWindow} win BrowserWindow instance
     * @return {Undefined}
     */
    export function disableAll(win: electron.BrowserWindow): void;
}
