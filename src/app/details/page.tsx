import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import { sideIcons, socialIcons } from "@/components/data/list";
import WorkshopDetails from "@/components/custom/workshop-details";

export default function Details() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
        <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

        <WorkshopDetails />

        <AsideRight />
      </main>
    </div>
  );
}
