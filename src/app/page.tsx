import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Section from "@/components/custom/section";
import { sideIcons, socialIcons } from "@/components/data/list";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col bg-gray-50">
        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <Section />

          <AsideRight />
        </main>
      </div>
    </>
  );
}
