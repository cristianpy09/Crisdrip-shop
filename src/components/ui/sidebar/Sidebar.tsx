"use client";

import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export default function Sidebar() {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-xs "
        />
      )}

      <nav
        className={clsx(
          "fixed p-5 top-0 right-0 h-screen bg-white z-20 shadow-2xl transform transition-transform duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
            "w-full sm:w-40 md:w-96 lg:w-[500px]": true, // ancho responsive
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-m  border-gray-200 focus:outline-none focus:border-black"
          />
        </div>

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={20} />
          <span className="ml-3 text-1xl ">Perfil </span>
        </Link>

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={20} />
          <span className="ml-3 text-1xl ">Ordenes </span>
        </Link>

        <Link
          href="/auth/login"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={20} />
          <span className="ml-3 text-1xl ">Ingresar </span>
        </Link>

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-3 text-1xl ">Salir </span>
        </Link>

        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={20} />
          <span className="ml-3 text-1xl ">Productos </span>
        </Link>

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={20} />
          <span className="ml-3 text-1xl ">Ordenes </span>
        </Link>

        <Link
          href="/"
          className=" flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={20} />
          <span className="ml-3 text-1xl ">Usuarios </span>
        </Link>
      </nav>
    </div>
  );
}
