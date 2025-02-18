import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ParticipantDetails from "@/components/custom/participant-details";
import { sideIcons, socialIcons } from "@/components/data/list";

interface ParticipantPageProps {
  params: {
    id: string;
  };
}

const ParticipantPage = ({ params: { id } }: ParticipantPageProps) => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col gap-2 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <ParticipantDetails
            image={id}
            name="Maria Silva"
            role="Analista de Projetos"
            activities="Planejamento"
          />

          <AsideRight />
        </main>
      </div>
    </>
  );
};

export default ParticipantPage;
