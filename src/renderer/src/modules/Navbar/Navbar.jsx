import Controls from "./components/Controls/Controls";

function Navbar() {
    return (
        <>
            <div className="w-full h-[60px] flex justify-start items-center px-[21px]">
                <Controls />
                <span className="w-full h-full" style={{ WebkitAppRegion: "drag" }}></span>
            </div>
        </>
    )
}

export default Navbar;