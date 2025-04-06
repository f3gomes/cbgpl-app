import Image from "next/image";
export default function AsideRight() {
  return (
    <aside className="sticky top-4 w-[330px] rounded-2xl bg-white p-4 shadow-md">
      {/* Banner centralizado */}
      <div className="flex flex-col items-center">
        <Image
          width={250}
          height={78}
          src="/assets/Patrocinio.png"
          alt="Congresso Logo"
          className="w-[300px] object-contain"
        />
        <hr className="my-4 w-full border-gray-300" />
      </div>
      <div className="flex items-start gap-2 font-semibold text-gray-400">
        <span>Patrocinado</span>
      </div>
    </aside>
  );
}
