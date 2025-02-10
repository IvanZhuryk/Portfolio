import { useSelector } from "react-redux"
import Theme from "../../components/Theme/Theme"
import { RootState } from "../../store"
import { RiAccountBoxLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect } from "react";

function Contact() {
    const color = useSelector((state:RootState)=>state.theme.colorThemeState)
    useEffect(() => {
        document.documentElement.style.setProperty("--scroll-color", color);
        document.documentElement.style.setProperty("--scroll-color-hover", color);
    }, [color]);
    return(
        <main className="relative " style={{scrollbarWidth:"thin",scrollbarColor:color}}>
            <h1 className="text-[32px] text-center font-[600]">CONTACT <span  className="duration-500"  style={{color}}>ME</span></h1>
            <h3 className="text-center text-[20px]">Get in <span className="duration-500"  style={{color}}>tuch</span></h3>
            <section className="border-4 bg-[#191919] w-[300px] rounded-xl p-2 duration-500 mt-8 mr-auto ml-auto mb-8" style={{borderColor:color}}>
                <h5 className=" font-medium text-[20px] opacity-80 text-center mb-12">Contact Info</h5>
                <div className=" flex items-center ml-6 mb-8">
                    <RiAccountBoxLine className=" h-[55px] w-[55px] opacity-80"></RiAccountBoxLine>
                    <div className="ml-2">
                        <div className="opacity-80 font-[600] text-[18px]">Name</div>
                        <div className="opacity-80">Zhuryk Ivan</div>
                    </div>
                </div>
                <div className=" flex items-center ml-6 mb-8">
                    <IoLocationOutline className=" h-[55px] w-[55px] opacity-80"></IoLocationOutline>
                    <div className="ml-2">
                        <div className="opacity-80 font-[600] text-[18px]">Location</div>
                        <div className="opacity-80">Ternopil, Ukraine</div>
                    </div>
                </div>
                <div className=" flex items-center ml-6 mb-8">
                    <LiaTelegramPlane className=" h-[55px] w-[55px] opacity-80"></LiaTelegramPlane>
                    <div className="ml-2">
                        <div className="opacity-80 font-[600] text-[18px]">Telegram</div>
                        <div className="opacity-80">@ZhurykIvan</div>
                    </div>
                </div>
                <div className=" flex items-center ml-6 mb-8">
                    <MdAlternateEmail className=" h-[55px] w-[55px] opacity-80"></MdAlternateEmail>
                    <div className="ml-2">
                        <div className="opacity-80 font-[600] text-[18px]">Email</div>
                        <div className="opacity-80">ivannom777@gmail.com</div>
                    </div>
                </div>
            </section>
            <Theme></Theme>
        </main>
    )
}
export default Contact