import { FaGithub, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" flex  justify-center gap-4 w-full h-[80px]">
      <a href='https://www.instagram.com/zhuryk.ivan' target='_blank'><FaInstagram className="h-[40px] w-[40px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-125 duration-300"></FaInstagram></a>
      <a href='https://github.com/IvanZhuryk' target='_blank'><FaGithub className="h-[40px] w-[40px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-125 duration-300"></FaGithub></a>
    </footer>
  )
}
export default Footer;