
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Theme from "../../components/Theme/Theme"
import { useEffect, useState } from "react";


function Home () {
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    const text = "Frontend Developer.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 120;

  useEffect(() => {
    if (!isDeleting && displayedText === text) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }
    
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);
  return (
    <main className=" relative">
        <div className="mt-[50px] flex flex-col justify-center mr-auto ml-auto w-max h-max items-center font-bold text-[65px]">
            <span className=" duration-500"  style={{ color }}>Ivan</span>
            <span>Zhuryk</span>
        </div>
        <div className=" font-medium text-[30px] text-center">
            <span>I`m a </span>
            <span className=" duration-500" style={{ color }}>{displayedText}</span>
            <span className=" animate-blink">|</span>
        </div>
        <Theme></Theme>
    </main>
  )
}
export default Home
