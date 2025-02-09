import { useSelector } from "react-redux"
import Theme from "../../components/Theme/Theme"
import { RootState } from "../../store"
import { useEffect } from "react";

function About () {
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    useEffect(() => {
        document.documentElement.style.setProperty("--scroll-color", color);
        document.documentElement.style.setProperty("--scroll-color-hover", color);
    }, [color]);
    return (
      <main className="mt-[50px] relative" style={{scrollbarWidth:"thin",scrollbarColor:color}}>
        <section className="mb-6">
          <h2 className=" text-[35px] font-bold opacity-90 text-center">About <span className="duration-500" style={{ color }}>Me</span></h2>
          <p className=" text-[28px] text-center">I`m creative <span className="text-[28px] duration-500 " style={{ color }}>Frontend developer</span> based in Ternopil, Ukraine</p>
          <p className=" opacity-90 text-center">I'm 23 years old and graduated from Ivan Puluj Ternopil Polytechnic University. I have a bachelor's degree in computer science. </p>
        </section>
        <section className=" mb-6">
            <h2 className="text-[35px] font-bold opacity-90 text-center">My <span className="duration-500" style={{ color }}>Skills</span></h2>
            <div className="flex flex-col gap-2 mr-auto ml-auto w-[300px]">
                <div>
                    <div>HTML/CSS</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px]">
                        <div className=" w-[90%] h-6 duration-500  rounded-md text-center" style={{ backgroundColor:color}}>90%</div>
                    </div>
                </div>
                <div>
                    <div>JavaScript</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px] ">
                        <div className=" w-[85%] h-6 duration-500 rounded-md text-center" style={{ backgroundColor:color}}>85%</div>
                    </div>
                </div>
                <div>
                    <div>React</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px] ">
                        <div className=" w-[80%] h-6 duration-500 rounded-md text-center" style={{ backgroundColor:color}}>80%</div>
                    </div>
                </div>
                <div>
                    <div>Redux</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px] ">
                        <div className=" w-[80%] h-6 duration-500 rounded-md text-center" style={{ backgroundColor:color}}>80%</div>
                    </div>
                </div>
                <div>
                    <div>TailwindCss</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px] ">
                        <div className=" w-[85%] h-6 duration-500 rounded-md text-center" style={{ backgroundColor:color}}>85%</div>
                    </div>
                </div>
                <div>
                    <div>Next.js</div>
                    <div className="bg-[#191919] w-[300px] h-7 rounded-md pt-[2px] ">
                        <div className=" w-[70%] h-6 duration-500 rounded-md text-center" style={{ backgroundColor:color}}>70%</div>
                    </div>
                </div>
            </div>
        </section>
        <Theme></Theme>
      </main>
    )
  }
  export default About