const { contextBridge, ipcRenderer } = require("electron");

const startListener = async () => {
  const res = await ipcRenderer.invoke("start-listener");
  console.log(res);
};
const stopListener = async () => {
  const res = await ipcRenderer.invoke("stop-listener");
  console.log(res);
};

contextBridge.exposeInMainWorld("myApi", {
  startListener,
  stopListener,
  handleMsg: (callback) => ipcRenderer.on("msg", callback),
});
