"use client";
import TariffePremium from "@/components/tarifeeCard/tariffePremium";
import Tariffestandard from "@/components/tarifeeCard/tariffeStandard";
import useVisible from "@/hooks/useVisible";

export default function Tariffe() {
  const standard = useVisible(500, true); // 👈 Mostra standard di default
  const premium = useVisible(500, false);

  const showStandard = () => {
    if (!standard.isVisible) {
      premium.isVisible && premium.toggle();
      standard.toggle();
    }
  };

  const showPremium = () => {
    if (!premium.isVisible) {
      standard.isVisible && standard.toggle();
      premium.toggle();
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mb-20">
      <p className="text-[24px] text-[#2A6F97] font-normal">Le tariffe</p>

      <div className="flex gap-4 justify-center items-center">
        <button
          className="bg-[#2A6F97] text-white w-fit h-10 rounded-md m-5 px-10 hover:bg-[#2A6F97]/60 transition-all duration-300"
          onClick={showStandard}
        >
          Piano Day
        </button>

        <button
          className="bg-[#2A6F97] text-white w-fit h-10 rounded-md m-5 px-10 hover:bg-[#2A6F97]/60 transition-all duration-300" 
          onClick={showPremium}
        >
          Piano Stagionale
        </button>
      </div>

      {standard.render && (
        <div className={`fade ${standard.isVisible ? "show" : ""}`}>
          <Tariffestandard />
        </div>
      )}

      {premium.render && (
        <div className={`fade ${premium.isVisible ? "show" : ""}`}>
          <TariffePremium />
        </div>
      )}
    </div>
  );
}
