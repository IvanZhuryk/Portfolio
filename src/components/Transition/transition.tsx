import { useSelector } from "react-redux"
import { RootState } from "../../store"

function Transition () {
    const isOpen = useSelector((state:RootState) =>state.animation.animationState)
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    return (
        <div key={isOpen} className={` w-[120%] h-[100%] box-border rotate-12 z-[60] fixed duration-[2000ms] ease-linear ${
            isOpen ? "animate-slide-left-to-right" : "hidden"
          }`} style={{ backgroundColor:color}}></div>
    )
}

export default Transition