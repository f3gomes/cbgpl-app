import { CircleUserRound, CircleX } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import FeedbackModal from "./feedback-modal";
import { PopoverMaterial } from "./popover-material";
import { Avatar, AvatarImage } from "../ui/avatar";

export type Workshop = {
  workshopId: string;
  speakerId: string;
  profileImgUrl: string;
  time: string;
  date: string;
  local: string;
  type: string;
  theme: string;
  speaker: string[];
  title: string;
  description: string;
};

export type WorkshopProps = {
  workshop: Workshop;
};

export default function WorkshopDetails({ workshop }: WorkshopProps) {
  return (
    <Card className="w-full rounded-2xl bg-white p-3 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="rounded-[30px] border-4 border-gray-200 border-t-white bg-white">
        <div className="relative mx-auto flex h-[120px] w-full items-center rounded-[27px] bg-[#35246F] p-4 shadow-xl">
          <Link
            href={`/schedule`}
            type="button"
            className="absolute right-2 top-2 text-gray-300 transition-colors hover:text-gray-100"
            aria-label="Fechar"
          >
            <CircleX />
          </Link>

          <h2 className="ml-1 w-full p-2 text-center text-lg font-bold text-white md:text-xl xl:text-2xl">
            {workshop?.theme}
          </h2>
        </div>

        <div className="p-6 text-xl">
          <div className="flex w-full flex-col items-start justify-between md:flex-row">
            <div>
              <p>
                <span className="font-semibold">Data:</span>{" "}
                <span className="font-inter">{workshop?.date}</span>
              </p>
              <p>
                <span className="font-semibold">Horário:</span>{" "}
                <span className="font-inter">{workshop?.time}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Local:</span>{" "}
                <span className="font-inter">{workshop?.local}</span>
              </p>
            </div>
          </div>

          <p className="mt-6 text-justify">
            <span className="font-semibold">Descrição:</span>{" "}
            <span className="font-inter">{workshop?.description}</span>
          </p>
        </div>

        <div className="mt-2">
          <div className="flex h-[90px] items-center space-x-3 p-6">
            {workshop?.profileImgUrl !== "" ? (
              <Link href={`/speakers/${workshop?.speakerId}`}>
                <Avatar className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
                  <AvatarImage
                    src={workshop?.profileImgUrl}
                    alt="User avatar"
                  />
                  <CircleUserRound size={36} className="text-[#FFFFFF]" />
                </Avatar>
              </Link>
            ) : (
              <div className="h-[90px] w-[90px] shrink-0 rounded-full bg-[#D9D9D9]" />
            )}
            <div>
              {workshop?.speaker?.map((speaker, index) => (
                <div
                  key={index}
                  className="transition duration-200 hover:opacity-60"
                >
                  {index === 0 ? (
                    <Link href={`/speakers/${workshop?.speakerId}`}>
                      <p className="text-xs font-semibold md:text-base">
                        {speaker}
                      </p>
                    </Link>
                  ) : (
                    <Link href={`/speakers`}>
                      <p className="text-xs font-semibold md:text-base">
                        {speaker}
                      </p>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 p-6 align-middle sm:flex-row">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl">
              <span className="font-inter text-lg">Feedback</span>
            </DialogTrigger>
            <FeedbackModal />
          </Dialog>

          <Link
            target="_blank"
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl"
            href={
              "https://drive.google.com/drive/folders/10yhziSd16XyfXnVIg8oURf6kBqVKdZRf"
            }
          >
            Material
          </Link>

          <Link
            href="https://pontoonline.com.br/20cbgpl/login"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border bg-orange-500 px-14 py-2 text-base font-semibold text-white sm:text-lg md:text-xl"
          >
            Inscreva-se!
          </Link>
        </div>
      </div>
    </Card>
  );
}
