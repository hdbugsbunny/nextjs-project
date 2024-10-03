import ModalBackdrop from "@/components/modalBackdrop";
import { getNewsById } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const { newsId } = params;
  const newsItem = await getNewsById(newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
