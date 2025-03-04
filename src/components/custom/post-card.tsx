import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";

interface PostCardProps {
  name: string;
  message: string;
  imgUrl?: string;
  createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = ({
  name,
  message,
  imgUrl,
  createdAt,
}) => {
  return (
    <Card className="w-full space-y-4 rounded-2xl p-4 shadow-md">
      <div className="flex items-center space-x-3">
        <Avatar className="bg-slate-300">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${name}`}
            alt={name}
          />
        </Avatar>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">
            {format(new Date(createdAt), "dd/MM/yyyy HH:mm")}
          </p>
        </div>
      </div>
      {imgUrl && (
        <div className="h-48 w-full overflow-hidden">
          {imgUrl && (
            <Image
              width={150}
              height={150}
              alt="Post Image"
              src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/${imgUrl}`}
              className="h-auto w-auto object-cover"
            />
          )}
        </div>
      )}
      <CardContent>
        <p className="text-sm text-gray-700">{message}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
