"use client";

import { useEffect, useState } from "react";
import PostForm from "./post-form";
import { listPosts } from "@/actions/listPosts";
import PostCard from "./post-card";

export default function Section() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
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

  if (isLoading) {
    return (
      <section className="flex min-h-60 w-full flex-col items-center rounded-2xl bg-[#FFFFFF] shadow-inner xl:max-w-[700px]">
        <div className="mt-2 flex w-full flex-grow items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-[#35246F]"></div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="flex min-h-60 w-full flex-col items-center rounded-2xl bg-[#FFFFFF] shadow-inner xl:max-w-[700px]">
        <div className="mt-2 flex w-full flex-grow flex-col items-center justify-center gap-3">
          <h1 className="text-xl font-semibold leading-none tracking-tight">
            Postagens Recentes
          </h1>
          <div className="text-sm text-muted-foreground">
            Aqui você encontrará as últimas atualizações do Congresso.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col items-center xl:max-w-[700px]">
      <PostForm newPost={newPost} setNewPost={setNewPost} />

      <div className="mt-2 w-full flex-grow rounded-2xl bg-[#FFFFFF] shadow-inner">
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
      </div>
    </section>
  );
}
