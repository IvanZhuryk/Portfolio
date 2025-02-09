
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Theme from "../../components/Theme/Theme"


function Home () {
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
  return (
    <main className="mt-[50px] relative">
        <div className="flex flex-col justify-center mr-auto ml-auto w-max h-max items-center font-bold text-[65px]">
            <span className=" duration-500"  style={{ color }}>Ivan</span>
            <span>Zhuryk</span>
        </div>
        <div className="w-max mr-auto ml-auto font-medium text-[30px]">
            <span>I`m a </span>
            <span className=" duration-500" style={{ color }}>Developer.</span>
        </div>
        <Theme></Theme>
    </main>
  )
}
export default Home
