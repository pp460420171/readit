const { BrowserWindow, app, ipcMain } = require("electron");
const { uIOhook } = require("uiohook-napi");
const UiohookKeyOfDarwin = {
  Backspace: 14,
  Tab: 15,
  Enter: 28,
  CapsLock: 58,
  Escape: 1,
  Space: 57,
  PageUp: 3657,
  PageDown: 3665,
  End: 3663,
  Home: 3655,
  ArrowLeft: 57419,
  ArrowUp: 57416,
  ArrowRight: 57421,
  ArrowDown: 57424,
  Insert: 3666,
  Delete: 3667,
  0: 11,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  A: 30,
  B: 48,
  C: 46,
  D: 32,
  E: 18,
  F: 33,
  G: 34,
  H: 35,
  I: 23,
  J: 36,
  K: 37,
  L: 38,
  M: 50,
  N: 49,
  O: 24,
  P: 25,
  Q: 16,
  R: 19,
  S: 31,
  T: 20,
  U: 22,
  V: 47,
  W: 17,
  X: 45,
  Y: 21,
  Z: 44,
  Numpad0: 82,
  Numpad1: 79,
  Numpad2: 80,
  Numpad3: 81,
  Numpad4: 75,
  Numpad5: 76,
  Numpad6: 77,
  Numpad7: 71,
  Numpad8: 72,
  Numpad9: 73,
  NumpadMultiply: 55,
  NumpadAdd: 78,
  NumpadSubtract: 74,
  NumpadDecimal: 83,
  NumpadDivide: 3637,
  //   NumpadEnd: number,
  //   NumpadArrowDown: number,
  //   NumpadPageDown: number,
  //   NumpadArrowLeft: number,
  //   NumpadArrowRight: number,
  //   NumpadHome: number,
  //   NumpadArrowUp: number,
  //   NumpadPageUp: number,
  //   NumpadInsert: number,
  //   NumpadDelete: number,
  F1: 59,
  F2: 60,
  F3: 61,
  F4: 62,
  F5: 63,
  F6: 64,
  F7: 65,
  F8: 66,
  F9: 67,
  F10: 68,
  F11: 87,
  F12: 88,
  F13: 91,
  F14: 92,
  F15: 93,
  F16: 99,
  F17: 100,
  F18: 101,
  F19: 102,
  F20: 103,
  F21: 104,
  F22: 105,
  F23: 106,
  F24: 107,
  Semicolon: 39,
  Equal: 13,
  Comma: 51,
  Minus: 12,
  ".": 52,
  Slash: 53,
  Backquote: 41,
  BracketLeft: 26,
  Backslash: 43,
  BracketRight: 27,
  Quote: 40,
  Ctrl: 29,
  CtrlRight: 3613,
  Alt: 56,
  AltRight: 3640,
  Shift: 42,
  ShiftRight: 54,
  Meta: 3675,
  MetaRight: 3676,
  NumLock: 69,
  ScrollLock: 70,
  PrintScreen: 3639,
};
const UiohookKeyOfWin32 = {
  Backspace: 14,
  Tab: 15,
  Enter: 28,
  CapsLock: 58,
  Escape: 1,
  Space: 57,
  PageUp: 3657,
  PageDown: 3665,
  End: 3663,
  Home: 3655,
  ArrowLeft: 57419,
  ArrowUp: 57416,
  ArrowRight: 57421,
  ArrowDown: 57424,
  Insert: 3666,
  Delete: 3667,
  0: 11,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  A: 30,
  B: 48,
  C: 46,
  D: 32,
  E: 18,
  F: 33,
  G: 34,
  H: 35,
  I: 23,
  J: 36,
  K: 37,
  L: 38,
  M: 50,
  N: 49,
  O: 24,
  P: 25,
  Q: 16,
  R: 19,
  S: 31,
  T: 20,
  U: 22,
  V: 47,
  W: 17,
  X: 45,
  Y: 21,
  Z: 44,
  Numpad0: 82,
  Numpad1: 79,
  Numpad2: 80,
  Numpad3: 81,
  Numpad4: 75,
  Numpad5: 76,
  Numpad6: 77,
  Numpad7: 71,
  Numpad8: 72,
  Numpad9: 73,
  NumpadMultiply: 55,
  NumpadAdd: 78,
  NumpadSubtract: 74,
  NumpadDecimal: 83,
  NumpadDivide: 3637,
  //   NumpadEnd: number,
  //   NumpadArrowDown: number,
  //   NumpadPageDown: number,
  //   NumpadArrowLeft: number,
  //   NumpadArrowRight: number,
  //   NumpadHome: number,
  //   NumpadArrowUp: number,
  //   NumpadPageUp: number,
  //   NumpadInsert: number,
  //   NumpadDelete: number,
  F1: 59,
  F2: 60,
  F3: 61,
  F4: 62,
  F5: 63,
  F6: 64,
  F7: 65,
  F8: 66,
  F9: 67,
  F10: 68,
  F11: 87,
  F12: 88,
  F13: 91,
  F14: 92,
  F15: 93,
  F16: 99,
  F17: 100,
  F18: 101,
  F19: 102,
  F20: 103,
  F21: 104,
  F22: 105,
  F23: 106,
  F24: 107,
  Semicolon: 39,
  Equal: 13,
  Comma: 51,
  Minus: 12,
  ".": 52,
  Slash: 53,
  Backquote: 41,
  BracketLeft: 26,
  Backslash: 43,
  BracketRight: 27,
  Quote: 40,
  Ctrl: 29,
  CtrlRight: 3613,
  Alt: 56,
  AltRight: 3640,
  Shift: 42,
  ShiftRight: 54,
  Meta: 3675,
  MetaRight: 3676,
  NumLock: 69,
  ScrollLock: 70,
  PrintScreen: 3639,
};
const WinState = require("electron-win-state").default;
const path = require("path");
const preload = path.resolve(__dirname, "./preload/index.js");
const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
  });
  const win = new BrowserWindow({
    ...winState.winOptions,
    webPreferences: {
      // nodeIntegration: true
      preload,
    },
  });
  win.loadURL("http://localhost:5173/");
  winState.manage(win);
  listenerKeyboardEvent(win);
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
const findKey = (obj, value, compare = (a, b) => a === b) => {
  return Object.keys(obj).find((k) => compare(obj[k], value));
};

const listenerKeyboardEvent = (win) => {
  let str = "";
  uIOhook.on("keydown", (e) => {
    let keyName;
    if (process.platform !== "darwin") {
      keyName = findKey(UiohookKeyOfDarwin, e.keycode);
    } else {
      keyName = findKey(UiohookKeyOfWin32, e.keycode);
    }

    if (keyName === "Escape") {
      app.quit();
    }
    if (keyName === "Enter") {
      win.webContents.send("msg", str);
      str = "";
    } else {
      str += keyName;
    }
  });
};
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.handle("start-listener", () => {
  uIOhook.start();
  return "started";
});
ipcMain.handle("stop-listener", () => {
  uIOhook.stop();

  return "stopped";
});
