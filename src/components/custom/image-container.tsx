import { Upload } from "lucide-react";
import Image from "next/image";
import { IProfileImg } from "./sign-up-form";

interface ImageContainerProps {
  profileImg: IProfileImg | undefined;
  setProfileImg: (value: IProfileImg | undefined) => void;
}

export default function ImageContainer({
  profileImg,
  setProfileImg,
}: ImageContainerProps) {
  // eslint-disable-next-line
  const handleImageChange = (event: any) => {
    const path = event.target.files[0];
    const profileImgUrl = URL.createObjectURL(event.target.files[0]);

    setProfileImg({
      path,
      profileImgUrl,
    });
  };

  return (
    <div className="mb-4 flex items-center justify-center">
      {!profileImg?.profileImgUrl && (
        <Upload className="absolute text-[#e5e5e8]" size={50} />
      )}

      <input
        id="file"
        type="file"
        name="file"
        onChange={handleImageChange}
        className={"absolute h-[150px] w-[150px] cursor-pointer opacity-0"}
      />

      <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border">
        {profileImg?.profileImgUrl && (
          <Image
            src={profileImg?.profileImgUrl}
            width={150}
            height={150}
            alt="Profile Image"
            className="max-h-[150px] max-w-[150px] rounded-full"
          />
        )}
      </div>
    </div>
  );
}
