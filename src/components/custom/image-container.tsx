"use client";

import { useState } from "react";

import { Upload } from "lucide-react";
import { IKUpload, ImageKitProvider } from "imagekitio-next";

import Image from "next/image";
import { authenticator } from "@/actions/imageKitAuth";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

import Spinner from "./spinner";
import { IProfileImg } from "./sign-up-form";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  profileImg: IProfileImg | undefined;
  setProfileImg: (value: IProfileImg | undefined) => void;
}

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function ImageContainer({
  profileImg,
  setProfileImg,
}: ImageContainerProps) {
  const [isLoading, setIsLoaindg] = useState(false);

  // eslint-disable-next-line
  const onError = (err: any) => {
    console.log("Error", err);
  };

  const onSuccess = (res: IKUploadResponse) => {
    const profileImgUrl = `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face/${res?.filePath}`;
    setProfileImg({
      path: res?.filePath,
      profileImgUrl,
    });
    setIsLoaindg(false);
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={() => authenticator()}
      >
        {!isLoading && !profileImg?.profileImgUrl && (
          <Upload className="absolute text-[#e5e5e8]" size={50} />
        )}

        <IKUpload
          fileName="gtxp-user.png"
          className={cn(
            "absolute h-[150px] w-[150px] opacity-0",
            profileImg !== undefined ? "cursor-default" : "cursor-pointer",
          )}
          onError={onError}
          onSuccess={onSuccess}
          disabled={profileImg !== undefined}
          onChange={() => {
            setIsLoaindg(true);
          }}
        />

        <div className="flex justify-center">
          {profileImg?.profileImgUrl ? (
            <Image
              src={profileImg?.profileImgUrl}
              width={150}
              height={150}
              alt="Profile Image"
              className="rounded-full"
            />
          ) : (
            <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border">
              {isLoading && <Spinner />}
            </div>
          )}
        </div>
      </ImageKitProvider>
    </div>
  );
}
