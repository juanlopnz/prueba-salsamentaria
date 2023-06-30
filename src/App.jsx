import React, { useState } from 'react';
import Modal from 'react-modal';
import { Navbar } from './components/Navbar';

export const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const deleteFromCart = (product) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item !== product));
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const products = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
    },
    {
      name: 'Producto 4',
      description: 'Descripción del producto 4',
    },
    {
      name: 'Producto 5',
      description: 'Descripción del producto 5',
    },
    {
      name: 'Producto 6',
      description: 'Descripción del producto 6',
    }
  ];

  return (
    <div>
      <Navbar cartItemCount={cartItems.length} toggleCart={toggleCart} />
      <section id="inicio" className="bg-yellow-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-200 min-h-screen flex flex-col p-8 justify-center items-center">
            <h1 className="text-4xl font-extrabold text-red-500 mb-4">¡Bienvenidos a La Economía!</h1>
            <p className="text-lg text-gray-800 mb-8">Somos una salsamentaria comprometida en ofrecerte los mejores productos para tu cocina.</p>
          </div>
        </div>
      </section>

      <section id="productos" className="bg-yellow-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-300 min-h-screen flex flex-col p-8 justify-center items-center">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4">Nuestros productos</h1>
            <p className="text-lg text-gray-800 mb-8">
              En La Economía, ofrecemos una amplia variedad de productos frescos y de calidad. Nuestro catálogo incluye frutas, verduras, carnes, lácteos y mucho más. Visítanos y descubre los ingredientes perfectos para tus recetas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {products.map((product, index) => {
                const isProductInCart = cartItems.includes(product.name);
                return (
                  <div key={index} className="border border-gray-400 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    {isProductInCart ? (
                      <button
                        className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-200 focus:outline-none transition-colors duration-300"
                        onClick={() => deleteFromCart(product.name)}
                      >
                        Retirar del carrito
                      </button>
                    ) : (
                      <button
                        className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-200 focus:outline-none transition-colors duration-300"
                        onClick={() => addToCart(product.name)}
                      >
                        Agregar al carrito
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="acerca-de" className="bg-yellow-300 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-400 min-h-screen flex flex-col p-8 justify-center items-center">
            <h1 className="text-4xl font-extrabold text-red-700 mb-4">Conoce más sobre La Economía</h1>
            <p className="text-lg text-gray-800 mb-8">En La Economía, nos enorgullece ofrecerte una amplia selección de productos frescos y de calidad. Nuestro compromiso es brindarte una experiencia de compra agradable y satisfactoria.</p>
            <p className="text-lg text-gray-800 mb-8">Visítanos hoy mismo y descubre por qué somos la elección preferida de nuestros clientes.</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-500 min-h-screen flex flex-col p-8 justify-center items-center">
            <h1 className="text-4xl font-extrabold text-red-800 mb-4">Nuestros servicios en La Economía</h1>
            <ul className="text-lg text-gray-800 mb-8">
              <li>Amplia variedad de productos frescos y de calidad</li>
              <li>Entrega a domicilio rápida y confiable</li>
              <li>Asesoramiento personalizado para tus compras</li>
              <li>Promociones y descuentos exclusivos</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-yellow-500 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-600 min-h-screen flex flex-col p-8 justify-center items-center">
            <h1 className="text-4xl font-extrabold text-red-900 mb-4">Contáctanos</h1>
            <p className="text-lg text-gray-800 mb-8">Estamos aquí para responder tus preguntas y ayudarte en lo que necesites. Puedes comunicarte con nosotros a través de los siguientes canales:</p>
            <ul className="text-lg text-gray-800 mb-8">
              <li>Teléfono: 123-456-789</li>
              <li>Correo electrónico: info@laeconomia.com</li>
              <li>Redes sociales: @laeconomia</li>
            </ul>
            <p className="text-lg text-gray-800 mb-8">¡Esperamos saber de ti pronto!</p>
          </div>
        </div>
      </section>

      {isCartOpen && (
        <Modal
          isOpen={isCartOpen}
          onRequestClose={toggleCart}
          contentLabel="Carrito de compras"
          className="modal bg-white rounded-lg shadow-lg p-6 mx-auto mt-20"
          overlayClassName="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="modal-title text-2xl font-bold mb-4">Carrito de compras</h2>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul className="modal-items">
              {cartItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <button className="modal-close bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mt-4" onClick={toggleCart}>
            Cerrar
          </button>
        </Modal>
      )}
    </div>
  );
};
