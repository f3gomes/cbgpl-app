import { CircleUserRound, CircleX } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import FeedbackModal from "./feedback-modal";
import { PopoverMaterial } from "./popover-material";
import { Avatar, AvatarImage } from "../ui/avatar";

type Workshop =
  | {
    workshopId: string;
    speakerId: string;
    profileImgUrl: string;
    time: string;
    date: string;
    local: string;
    type: string;
    theme: string;
    speaker: string;
    description: string;
  }
  | undefined;

type Props = {
  workshop: Workshop;
};

export default function WorkshopDetails({ workshop }: Props) {
  return (
    <Card className="w-full rounded-2xl bg-white p-3 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="rounded-[30px] border-4 border-gray-200 border-t-white bg-white">
        <div className="relative mx-auto flex h-[120px] w-full items-center rounded-[27px] bg-[#35246F] p-4 shadow-xl">
          <Link
            href={`/schedule`}
            type="button"
            className="absolute right-4 top-2 text-gray-300 transition-colors hover:text-gray-100"
            aria-label="Fechar"
          >
            <CircleX />
          </Link>
          <h2 className="ml-1 w-[572px] p-1 text-start text-2xl font-bold text-white">
            {workshop?.theme}
          </h2>
        </div>

        <div className="p-6 text-xl">
          <div className="flex w-full items-start justify-between">
            <div>
              <p>
                <span className="font-semibold">Data:</span>{" "}
                <span className="font-inter">{workshop?.date}</span>
              </p>
              <p>
                <span className="font-semibold">Local:</span>{" "}
                <span className="font-inter">{workshop?.local}</span>
              </p>
            </div>
            <div className="mr-12">
              <p>
                <span className="font-semibold">Horário:</span>{" "}
                <span className="font-inter">{workshop?.time}</span>
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
                <Avatar className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
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
              <Link href={`/speakers/${workshop?.speakerId}`}>
                <p className="text-[16px] font-semibold">{workshop?.speaker}</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Palestrantes, botões etc. */}
        <div className="flex justify-center gap-3 p-6 align-middle sm:flex-row">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl">
              <span className="font-inter text-lg">Feedback</span>
            </DialogTrigger>
            <FeedbackModal />
          </Dialog>

          {/* <Link
            href={`/details`}
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl"
          >
            Material
          </Link> */}

          <PopoverMaterial />
          <Link
            href="https://pontoonline.com.br/20cbgpl/"
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
