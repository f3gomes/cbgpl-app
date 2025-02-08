import SpeakerCard from "./speakers-card";

// eslint-disable-next-line
export default function SpeakerList({ speakers }: any) {
  return (
    <div className="flex h-full w-full flex-row flex-wrap justify-center gap-3 bg-white p-2 xl:w-[706px]">
      {
        // eslint-disable-next-line
        speakers.map((item: any) => (
          <SpeakerCard
            key={item.name}
            name={item.name}
            role={item.role}
            image={item.image}
          />
        ))
      }
    </div>
  );
}
