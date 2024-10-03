"use client";

import { DUMMY_NEWS } from "@/dummyNews";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const { newsId } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.newsId === newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
