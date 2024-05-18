import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className=' w-full sticky py-3 z-50 flex justify-between bg-gray-900'>
      <div className=' ml-2 flex flex-wrap justify-center items-center gap-3'>
        <img src='https://secy.co.in/storage/2023/02/SeCy-Orange-Gradient.png' className=' w-14 h-10 '/>
        <h1 className=' font-serif text-center text-2xl text-white'>Semantics Cybernatics</h1>
        </div>
      <nav className='w-full max-w-md mx-auto border border-gray-10 rounded-lg p-5 backdrop-blur-sm bg-white/10'>
                  <div
                      className="hidden justify-evenly items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                  to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-500":"text-white/85"} lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                              </li>
                              <li>
                              <NavLink
                              to="/pricing"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-500":"text-white/85"} lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                  }
                              >
                                  Pricing
                              </NavLink>
                              </li>
                              <li>
                              <NavLink
                                  to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-500":"text-white/85"} lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                              </li>
                              <li>
                              <NavLink
                                  to="/contact"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-500":"text-white/85"} lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                  }
                              >
                                  Contact
                              </NavLink>
                              </li>
                              <li>
                              <NavLink
                                  to="/team"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-500":"text-white/85"} lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                                  }
                              >
                                  Team
                              </NavLink>
                              </li>
                      </ul>
                  </div>
                  </nav>
      <div className='w-1/6 flex flex-wrap justify-end items-center pr-5'>
          <button className='px-4 bg-orange-500 outline outline-1 outline-offset-1 outline-white/75 font-bold text-m rounded-2xl py-2.5 text-gray-200 hover:outline-none hover:backdrop-blur-xl hover:shadow-lg hover:shadow-white/75 '>GET QUOTE</button>
      </div>
    </header>
    </>
  )
}

export default Header