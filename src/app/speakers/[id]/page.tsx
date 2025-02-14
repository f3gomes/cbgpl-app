import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import SpeakerDetails from "@/components/custom/speaker-details";
import { sideIcons, socialIcons } from "@/components/data/list";

interface SpeakerPageProps {
  params: {
    id: string;
  };
}

const SpeakerPage = ({ params: { id } }: SpeakerPageProps) => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <SpeakerDetails
            image={id}
            name="Neudson Barroso"
            role="Gerente de Projetos"
          />

          <AsideRight />
        </main>
      </div>
    </>
  );
};

export default SpeakerPage;
