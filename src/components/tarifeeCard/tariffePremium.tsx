"use client";
import tariffeClient from "@/data/tariffeClient.json";

export default function TariffePremium() {
    return (
        <div className="flex flex-wrap gap-10 justify-center items-start ">
            {
                tariffeClient.premium.map((tariffa) => (
                    <div className="flex flex-col  w-fit gap-4 justify-center items-start border-2 border-[#2A6F97] rounded-md p-10">
                        <p className="text-[24px] text-[#2A6F97] font-normal">{tariffa.titolo} <br></br> <p className="text-sm">{tariffa.prezzo}</p> </p>
                        <ul>
                            {tariffa.caratteristiche.map((caratteristiche) =>
                                <li key={caratteristiche}> - {caratteristiche}</li>
                            )}
                        </ul>
                        <button className="bg-[#2A6F97] text-white px-30 h-10 rounded-md hover:bg-[#2A6F97]/80 transition-all duration-300">Seleziona piano</button>
                    </div>
                ))
            }
        </div>
    )
}