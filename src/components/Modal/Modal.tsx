import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { change } from '../../slices/animationSlice';

function Modal ({isOpen, onClose} : {isOpen: boolean,onClose: () => void}) {
  const dispatch = useDispatch()
  function onClickLink(num:number){
    onClose()
    dispatch(change(num))
  }

  return (
    <>
        <div
          className={isOpen?`fixed flex flex-col justify-center top-0 left-0 w-full h-full overflow-hidden z-50 bg-bgBlack translate-y-0 ease-linear duration-[1000ms] `:`fixed flex flex-col justify-center top-0 left-0 w-full h-full overflow-hidden z-50 bg-bgBlack translate-y-[-100%] ease-linear duration-[1000ms]`}
        >
          <div className='fixed top-0 left-0 w-full flex justify-between items-center p-2'>
            <div className="text-4xl font-bold">LOGO</div>
            <div className=' cursor-pointer box-border p-[10px]' onClick={onClose}>
              <span className='h-[2px] w-[35px] block rotate-45 bg-white'></span>
              <span className='h-[2px] w-[35px] block bg-white -rotate-45'></span>
            </div>
          </div>
          <nav className='flex flex-col justify-center items-center  gap-3.5  text-[30px]'>
            <NavLink onClick={()=>onClickLink(1)} to='/home'>HOME</NavLink>
            <NavLink onClick={()=>onClickLink(2)} to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>onClickLink(4)} to='/portfolio'>PORTFOLIO</NavLink>
            <NavLink onClick={()=>onClickLink(5)} to='/contact'>CONTACT</NavLink>
          </nav>
        </div>
    </>
  );
}

export default Modal