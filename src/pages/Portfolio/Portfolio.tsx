import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Theme from "../../components/Theme/Theme"

function Portfolio(){
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    return (
        <main className="relative">
            <h1 className=" text-center text-[35px] font-[600] mb-8">HERE SOME OF MY <span className="duration-500" style={{color}}>PET PROJECTS</span></h1>
            <section>
                <iframe src="https://next-sushi-ts-tailwindcss.vercel.app/" className="bg-white rounded-md ml-2 duration-500 border-4 h-[300px] w-[300px] sm:w-[600px]" style={{borderColor:color}}></iframe>
                <p className=" text-[20px] ml-2">This is a very simple store that I made a long time ago.</p>
                <p className=" text-[28px] font-[600] ml-2">Technologies: <span className="duration-500" style={{color}}>React </span>Next.js <span className="duration-500" style={{color}}>Redux </span>Firebase</p>
            </section>
            <Theme></Theme>
        </main>
    )
}
export default Portfolio
