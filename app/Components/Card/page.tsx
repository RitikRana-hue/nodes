export default function Card() {
  return (
    <div className=" h-[350px] w-full flex items-center gap-y-6 justify-center flex-col bg-white p-[26px] rounded-[15px] shadow-md transition-transform duration-300 ease-in-out cursor-pointer  hover:translate-y-1.5">
      <div className="w-[60px] h-[60px] bg-[#C8E6C9] rounded-2xl flex items-center justify-center mb-6 text-xl font-bold text-[#2E7D32]">
        M
      </div>
      <h3 className="text-2xl md:text-3xl mb-4 text-[#333333] font-bold">
        IoT Integration
      </h3>
      <p className="text-[#666666]">
        Smart bins equipped with sensors for real-time monitoring of fill levels and waste types.
      </p>
    </div>
  );
}
