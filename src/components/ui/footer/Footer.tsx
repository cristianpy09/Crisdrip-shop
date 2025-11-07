import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-15 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
        
        {/* Logo / Marca */}
        <Link href="/" className="flex items-center space-x-1 font-semibold text-gray-800 hover:text-black transition-colors">
          <span>Cris</span>
          <span className="text-primary">|</span>
          <span>Shop</span>
        </Link>

        {/* Navegación del footer */}
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-black transition-colors">
            Sobre nosotros
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contacto
          </Link>
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacidad
          </Link>
          <Link href="/terms" className="hover:text-black transition-colors">
            Términos
          </Link>
        </div>

        {/* Derechos de autor */}
        <p className="text-xs text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} CrisShop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
