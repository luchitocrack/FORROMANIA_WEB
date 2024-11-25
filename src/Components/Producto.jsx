import React, { useState, useEffect } from 'react';
import productosData from '../assets/productos.json';

const Producto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    const getImagenCatalogo = (nombreImagen) => {
        return new URL(`../assets/img/${nombreImagen}`, import.meta.url).href;
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <header className="bg-[#7904aa] py-3 sticky top-0 z-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-[#ffea00]">Nuestros Productos</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {productos.map((producto) => (
                        <div key={producto.id} className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-[0_0_10px_rgba(255,234,0,0.3)] transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    src={getImagenCatalogo(producto.imagen)}
                                    alt={producto.nombre}
                                    className="w-full aspect-square object-cover"
                                />
                                <button className="absolute bottom-2 right-2 bg-[#7904aa] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-3">
                                <h2 className="text-sm font-medium text-white mb-1 line-clamp-2">{producto.nombre}</h2>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="text-xs text-gray-400">Vendidos: 50+</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-[#ffea00] text-lg font-bold">${producto.precio}</span>
                                        <span className="text-xs text-gray-400 ml-1 line-through">${(producto.precio * 1.2).toFixed(2)}</span>
                                    </div>
                                    <span className="text-xs text-[#7904aa] bg-[#ffea00] px-1.5 py-0.5 rounded">-20%</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">Envío gratis</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-8 text-sm">
                <p>&copy; 2024 ForroMania. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Producto;