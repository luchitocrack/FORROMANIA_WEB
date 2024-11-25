import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="flex h-screen">
      <nav className="navbar fixed left-0 top-0 h-full w-64 bg-[#7904aa] text-black flex flex-col">
        <div className="container h-full flex flex-col">
          <h1 className="logo p-4 border-b border-[#ffea00]">
            <Link to="/" className="text-[#ffea00] hover:text-white transition duration-300">ForroMania</Link>
          </h1>
          <ul className="nav-links flex-grow flex flex-col p-4">
            <li className="mb-4">
              <Link to="/" className="hover:bg-[#ffea00] hover:text-[#7904aa] p-2 block transition duration-300">Inicio</Link>
            </li>
            <li className="mb-4">
              <Link to="/productos" className="hover:bg-[#ffea00] hover:text-[#7904aa] p-2 block transition duration-300">Productos</Link>
            </li>
            <li className="mb-4">
              <Link to="/nosotros" className="hover:bg-[#ffea00] hover:text-[#7904aa] p-2 block transition duration-300">Nosotros</Link>
            </li>
            <li className="mb-4">
              <Link to="/informacion" className="hover:bg-[#ffea00] hover:text-[#7904aa] p-2 block transition duration-300">Información</Link>
            </li>
          </ul>
          <div className="p-4 border-t border-[#ffea00] text-white text-sm">
            &copy; 2024 ForroMania
          </div>
        </div>
      </nav>
      <div className="flex-1 ml-64 p-0 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;