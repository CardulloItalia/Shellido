"use client"
import Link from "next/link";


export default function Navbar(){
    return(
        <div className="w-full h-10 flex flex-row justify-between items-center">
            <Link className="text-3xl font-bold" href="/">ShellLido</Link>
            <div className="flex flex-row gap-10 items-center">
                <Link href="#services">Servizi</Link>
                <Link href="#rates">Prezzi</Link>
                <Link href="#comments">Dicono di noi</Link>
                <Link href="#location">Dove siamo</Link>
                <Link href="/prenotazione" className="bg-[#61A5C2] text-white px-10 py-2 rounded-md">Prenota</Link>
            </div>
        </div>
    )
}