import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="bg-[#e0f7ed] border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/home" className="flex items-center space-x-3 rtl:space-x-reverse aria-[current=page]:text-red-600">
                    <span className="self-center  whitespace-nowrap  uppercase tracking-wide text-xl font-bold text-gray-700 ">Library Management System</span>
                </NavLink>
                <div className="flex md:order-2">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-focus:ring-[#4CAF50] focus:border-[#4CAF50] " placeholder="Find a Book" />
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-[#4CAF50] focus:border-[#4CAF50] " placeholder="Search..." />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to="/home" className="block py-2 px-3  rounded md:bg-transparent md:text-gray-700 md:p-0 uppercase tracking-wide text-sm font-bold text-gray-700 hover:text-[#4CAF50] aria-[current=page]:text-red-600" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-book"  className="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-[#4CAF50] md:p-0 md:dark:hover:text-[#4CAF50] uppercase tracking-wide text-sm font-bold text-gray-700">Add a Book</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile"
                                
                                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4CAF50] md:p-0 uppercase tracking-wide text-sm font-bold text-gray-700 "
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar