const { contextBridge, ipcRenderer } = require("electron");

const startListener = async () => {
  const res = await ipcRenderer.invoke("start-listener");
  console.log(res);
};
const stopListener = async () => {
  const res = await ipcRenderer.invoke("stop-listener");
  console.log(res);
};
const startFtp = async (args) => {
  const res = await ipcRenderer.invoke("start-ftp", args);
  console.log(res);
};
const stopFtp = async () => {
  const res = await ipcRenderer.invoke("stop-ftp");
  console.log(res);
};
const selectLocalFolder = async () => {
  const res = await ipcRenderer.invoke("select-local-folder");
};
const uploadFile = async (folder) => {
  const args = { folder };
  const res = await ipcRenderer.invoke("upload-file", args);
};
contextBridge.exposeInMainWorld("myApi", {
  startListener,
  stopListener,
  selectLocalFolder,
  startFtp,
  stopFtp,
  uploadFile,
  handleMsg: (callback) => ipcRenderer.on("msg", callback),
  handleFtpLog: (callback) => ipcRenderer.on("ftp-log", callback),
  handleFillFolderAddress: (callback) =>
    ipcRenderer.on("fill-folder-address", callback),
});
