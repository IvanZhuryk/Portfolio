import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Theme from "../../components/Theme/Theme"

function Portfolio(){
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    return (
        <main className="relative">
            <h1 className=" text-center text-[35px] font-[600] mb-8">HERE SOME OF MY <span className="duration-500" style={{color}}>PET PROJECTS</span></h1>
            <section className="mb-7">
                <iframe src="https://next-sushi-ts-tailwindcss.vercel.app/" className="bg-white rounded-md ml-2 duration-500 border-4 h-[300px] w-[300px] sm:w-[600px]" style={{borderColor:color}}></iframe>
                <p className=" text-[20px] ml-2">This is a very simple store that I made a long time ago.</p>
                <p className=" text-[28px] font-[600] ml-2 mb-[20px]">Technologies: <span className="duration-500" style={{color}}>React </span>Next.js <span className="duration-500" style={{color}}>Redux </span>Firebase</p>
                <a 
                    className="border-2 duration-500 pt-[10px] pb-[10px] pr-[20px] pl-[20px] ml-5"
                    href="https://next-sushi-ts-tailwindcss.vercel.app/" 
                    target='_blank'  
                    style={{borderColor:color,color}} 
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = color;
                    }}
                    >View Project
                </a>
            </section>
            <Theme></Theme>
        </main>
    )
}
export default Portfolio
