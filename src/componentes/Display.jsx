export default function Display({ open, setOpen }) {
    return (
        <div className="drawer h-screen w-1/2 absolute top-0 left-0 bg-pink-400">
            <p onClick={()=>setOpen(!open)} className="close">X</p>
            <p className="option">HOME</p>
            <p className="option">SIGN IN</p>
            <p className="option">REGISTER</p>
        </div>
    )
}


