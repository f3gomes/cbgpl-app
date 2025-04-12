import SponsorColumn from "./sponsor-column";

export default function AsideRight() {
  return (
    <aside className="sticky top-4 min-w-[330px] rounded-2xl bg-white p-4 shadow-md xl:h-[630px]">
      <div className="flex justify-center gap-2 font-semibold text-gray-400">
        <span>Patrocinado</span>
      </div>

      <div>
        <SponsorColumn folder="c1" min={1} max={8} />
        <SponsorColumn folder="c2" min={9} max={16} />
        <SponsorColumn folder="c3" min={17} max={25} />
      </div>
    </aside>
  );
}
