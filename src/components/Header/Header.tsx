function Header ({setOpen}:{setOpen:(boo:boolean)=>void}) {
  return (
    <header className="bg-bgBlack text-white flex items-center justify-between p-2 ">
      <div className="text-4xl font-bold">LOGO</div>
      <div onClick={()=>setOpen(true)} className="group flex flex-col justify-between items-end h-[20px] w-[40px] cursor-pointer fixed top-0 right-0 mt-4 mr-4 z-40 ">
        <hr className="h-[1px] w-[20px]  border-2 rounded group-hover:w-[40px]  duration-500 "/>
        <hr className="h-[1px] w-[30px]  border-2 rounded group-hover:w-[40px] duration-500" />
        <hr className="h-[1px] w-[40px]  border-2 rounded"/>
      </div>
    </header>
  )
}
export default Header;