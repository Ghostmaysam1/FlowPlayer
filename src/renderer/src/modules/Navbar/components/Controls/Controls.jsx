// import { ipcRenderer } from "electron"
const {ipcRenderer} = window.electron;

function Controls() {

    const minimize = ()=>{
        ipcRenderer.send("minimize-window");
    }

    const maximize = ()=>{
        ipcRenderer.send("maximize-window");
    }

    const closeWindow = ()=>{
        ipcRenderer.send("close-window");
    }

  return (
    <div className="flex gap-[13px]">
        <button onClick={closeWindow} className="bg-[#FE466C]/75 cursor-pointer w-[20px] h-[20px] rounded-full"></button>
        <button onClick={maximize} className="bg-[#FFB83E] cursor-pointer w-[20px] h-[20px] rounded-full"></button>
        <button onClick={minimize} className="bg-[#42C4A7] cursor-pointer w-[20px] h-[20px] rounded-full"></button>
    </div>
  )
}

export default Controls;