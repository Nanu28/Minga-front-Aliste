export default function Display({ open, setOpen }) {
    return (
        <div className="drawer h-full w-2/5 absolute top-0 left-0 bg-pink-400 p-4">
            <div className="flex flex-row justify-end "> 
                <img onClick={()=>setOpen(!open)} className='w-8 h-8 cursor-pointer' src="../public/images/close-icon.svg" alt="close_icon" />    
            </div>
            <div className="flex flex-col flex items-center gap-2 pt-8">
                <p className="option bg-white w-full p-2 font-semibold text-pink-400 text-center rounded-md">HOME</p>
                <p className="option w-full p-2 font-semibold text-white text-center">SIGN IN</p>
                <p className="option w-full p-2 font-semibold text-white text-center">REGISTER</p>
            </div>
        </div>
    )
}


