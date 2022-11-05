import { motion } from "framer-motion"
import { Link } from "react-router-dom";
const Navbar = () => {
    const date = new Date();

  
    return (
        <>
            <header className="text-gray-600 body-font px-6 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-2">

                        <span className=" text-xl font-bold text-green-800">AjNews</span>
                        <li className="ml-5 text-slate-500 font-bold list-none">{date.toDateString()}</li>
                    </div>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/business">
                            <li className="mr-5 hover:text-rose-300 list-none">Business</li>
                        </Link>

                        <Link to="/entertainment">
                            <li className="mr-5 hover:text-rose-300 list-none">entertainment</li>
                        </Link>

                        <Link to="/general">
                            <li className="mr-5 hover:text-rose-300 list-none">general</li>
                        </Link>

                        <Link to="/health">
                            <li className="mr-5 hover:text-rose-300 list-none">health</li>
                        </Link>

                        <Link to="/science">
                            <li className="mr-5 hover:text-rose-300 list-none">science</li>
                        </Link>

                        <Link to="/sports">
                            <li className="mr-5 hover:text-rose-300 list-none">sports</li>
                        </Link>

                        <Link to="/technology">
                            <li className="mr-5 hover:text-rose-300 list-none">technology</li>
                        </Link>
                        <Link to="/login">
                        <button style={{color:"red",textDecoration:"underline"}}>Login</button>
                        </Link>
                        <Link to="/register">
                        <button style={{marginLeft:"15px",color:"red",textDecoration:"underline"}} >Sign-up</button>
                        </Link>
                    </nav>
                    {/* <div className="gap-2 grid grid-flow-col mr-5">
                        <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-black px-3 py-1 font-bold text-sm rounded drop-shadow-lg hover:cursor-pointer hover:bg-rose-300 hover:text-white">Sign in</motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-black px-3 py-1 font-bold rounded text-sm drop-shadow-lg hover:cursor-pointer hover:bg-rose-300 hover:text-white">Subscribe</motion.button>
                    </div> */}
                </div>
            </header>
        </>
    )
}

export default Navbar;