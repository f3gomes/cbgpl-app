import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import {
  sideIcons,
  socialIcons,
  workshopDetailsList,
} from "@/components/data/list";
import WorkshopDetails from "@/components/custom/workshop-details";

type Params = {
  id: string;
};

export async function generateStaticParams() {
  return workshopDetailsList.map((workshop) => ({
    id: workshop.id,
  }));
}

export default function Details({ params }: { params: Params }) {
  const workshop = workshopDetailsList.find((e) => e.id === params.id);

  if (!workshop) {
    <div>
      <h1>Evento não encontrado!</h1>
    </div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row">
        <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

        <WorkshopDetails workshop={workshop} />

        <AsideRight />
      </main>
    </div>
  );
}
