import { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { change } from "../../slices/colorThemeSlice";
function Theme () {
    const dispatch = useDispatch()
    const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  function changeColorTheme(color:string){
    dispatch(change(color))
  }
    return (
        <div className=" h-20 w-36 fixed right-0 top-[50%] mr-1 flex items-center justify-between gap-2 ">
            <div>
                <IoSettings className=" cursor-pointer h-8 w-8" style={{transform: `rotate(${rotation}deg)`}}></IoSettings>
            </div>
            <div className=" flex flex-wrap gap-3 bg-bgBlack z-10 p-2 rounded-md">
                <div onClick={()=>changeColorTheme("#c70039")} className=" h-5 w-5 bg-red border-2 border-white rounded cursor-pointer"></div>
                <div onClick={()=>changeColorTheme("#481380")} className=" h-5 w-5 bg-purple border-2 border-white rounded cursor-pointer"></div>
                <div onClick={()=>changeColorTheme("#00909e")} className=" h-5 w-5 bg-skyBlue border-2 border-white rounded cursor-pointer"></div>
                <div onClick={()=>changeColorTheme("#04A777")} className=" h-5 w-5 bg-green border-2 border-white rounded cursor-pointer"></div>
                <div onClick={()=>changeColorTheme("#035aa6")} className=" h-5 w-5 bg-blue border-2 border-white rounded cursor-pointer"></div>
                <div onClick={()=>changeColorTheme("#dd7631")} className=" h-5 w-5 bg-orange border-2 border-white rounded cursor-pointer"></div>
            </div>
        </div>
    )
}
export default Theme