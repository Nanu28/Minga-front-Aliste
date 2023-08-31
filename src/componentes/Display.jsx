export default function Display({ open, setOpen }) {
    return (
        <div className="drawer h-full w-screen absolute top-0 left-0 bg-pink-400 p-4 md:w-2/5">
            <div className="flex flex-row justify-between items-center"> 
                <div className="flex flex-row justify-between items-center">
                <img src="/public/images/usuario-avatar.png" alt="usuario_avatar" />
                <p className="pl-4 text-white">usuario@gmail.com</p>
                </div>
                <img onClick={()=>setOpen(!open)} className='w-8 h-8 cursor-pointer' src="/public/images/close-icon.svg" alt="close_icon" />    
            </div>
            <div className="flex flex-col flex items-center gap-2 pt-8">
                <p className="optional w-full p-2 cursor-pointer font-semibold rounded-md text-white text-center hover:bg-white  hover:text-pink-400">HOME</p>
                <p className="w-full p-2 cursor-pointer font-semibold rounded-md text-white text-center hover:bg-white  hover:text-pink-400">SIGN IN</p>
                <p className="w-full p-2 cursor-pointer font-semibold rounded-md text-white text-center hover:bg-white  hover:text-pink-400">REGISTER</p>
            </div>
        </div>
    )
}


