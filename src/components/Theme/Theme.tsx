import { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { change, changeVisible } from "../../slices/colorThemeSlice";
import { RootState } from "../../store";
function Theme () {
    const visible = useSelector((state:RootState)=> state.theme.visible)
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
        <div className={` h-20 w-[132px] fixed duration-1000 top-[50%]  flex  items-start justify-between  ${visible?"right-0":"-right-[100px]"}`}>
            <div className="bg-[#f5f5f5] rounded-l-md">
                <IoSettings onClick={()=>dispatch(changeVisible())} className=" cursor-pointer text-bgBlack h-8 w-8" style={{transform: `rotate(${rotation}deg)`}}></IoSettings>
            </div>
            <div className=" flex flex-wrap gap-3 bg-[#f5f5f5] z-10 p-2 ">
              <div onClick={()=>changeColorTheme("#c70039")} className=" h-5 w-5 bg-red   rounded cursor-pointer"></div>
              <div onClick={()=>changeColorTheme("#481380")} className=" h-5 w-5 bg-purple  rounded cursor-pointer"></div>
              <div onClick={()=>changeColorTheme("#00909e")} className=" h-5 w-5 bg-skyBlue  rounded cursor-pointer"></div>
              <div onClick={()=>changeColorTheme("#04A777")} className=" h-5 w-5 bg-green  rounded cursor-pointer"></div>
              <div onClick={()=>changeColorTheme("#035aa6")} className=" h-5 w-5 bg-blue  rounded cursor-pointer"></div>
              <div onClick={()=>changeColorTheme("#dd7631")} className=" h-5 w-5 bg-orange   rounded cursor-pointer"></div>
            </div>
        </div>
    )
}
export default Theme