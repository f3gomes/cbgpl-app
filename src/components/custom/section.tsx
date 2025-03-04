"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PostForm from "./post-form";
import { listPosts } from "@/actions/listPosts";
import PostCard from "./post-card";
import Spinner from "./spinner";

export default function Section() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data: any = await listPosts();

        if (data?.data) {
          setPosts(data?.data?.posts);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [newPost]);

  return (
    <section className="flex w-full flex-col items-center xl:max-w-[700px]">
      <PostForm newPost={newPost} setNewPost={setNewPost} />

      <Card className="mt-2 w-full flex-grow rounded-2xl bg-[#FFFFFF] shadow-inner">
        <CardHeader>
          {posts.length > 0 ? (
            !isLoading ? (
              <div className="flex flex-col gap-3">
                {posts
                  .slice()
                  .reverse()
                  .map((item: any) => {
                    return (
                      <PostCard
                        key={item.id}
                        name={item.name}
                        message={item.message}
                        imgUrl={item.imgUrl}
                        createdAt={item.createdAt}
                        profileImg={item.profileImg}
                      />
                    );
                  })}
              </div>
            ) : (
              <Spinner />
            )
          ) : (
            <>
              <CardTitle>Postagens Recentes</CardTitle>
              <CardDescription>
                Aqui você encontrará as últimas atualizações do Congresso.
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
}
