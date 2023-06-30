import React from 'react';

export const Navbar = ({ cartItemCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-700 fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-yellow-300 text-3xl font-extrabold font-serif">La Economía</span>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#inicio"
                  className="text-yellow-300 hover:bg-red-900 px-3 py-2 rounded-md text-sm font-medium font-sans"
                >
                  Inicio
                </a>
                <a
                  href="#productos"
                  className="text-yellow-300 hover:bg-red-900 px-3 py-2 rounded-md text-sm font-medium font-sans"
                >
                  Productos
                </a>
                <a
                  href="#acerca-de"
                  className="text-yellow-300 hover:bg-red-900 px-3 py-2 rounded-md text-sm font-medium font-sans"
                >
                  Acerca de
                </a>
                <a
                  href="#servicios"
                  className="text-yellow-300 hover:bg-red-900 px-3 py-2 rounded-md text-sm font-medium font-sans"
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  className="text-yellow-300 hover:bg-red-900 px-3 py-2 rounded-md text-sm font-medium font-sans"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4">
              <button className="flex items-center px-3 py-2 border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white" onClick={toggleCart}>
                <span className="ml-1">Carrito ({cartItemCount})</span>
              </button>
            </div>
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                className="text-yellow-300 hover:bg-red-900 block px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-yellow-300 hover:bg-red-900 block px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Productos
              </a>
              <a
                href="#acerca-de"
                className="text-yellow-300 hover:bg-red-900 block px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Acerca de
              </a>
              <a
                href="#servicios"
                className="text-yellow-300 hover:bg-red-900 block px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="text-yellow-300 hover:bg-red-900 block px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

