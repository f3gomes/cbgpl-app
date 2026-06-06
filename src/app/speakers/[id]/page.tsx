import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import SpeakerDetails from "@/components/custom/speaker-details";
import { sideIcons, socialIcons } from "@/data/list";

type SpeakerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const SpeakerPage = async ({ params }: SpeakerPageProps) => {
  const id = await params;

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <SpeakerDetails id={id.id} />

          <AsideRight />
        </main>
      </div>
    </>
  );
};

export default SpeakerPage;
