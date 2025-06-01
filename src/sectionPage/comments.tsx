import { Marquee } from "@/components/magicui/marquee";
import type { Comments as CommentType } from "@/types/interfaceComments";
import commentsClient from "@/data/commentsClient.json";
import { cn } from "@/lib/utils";

const comments: CommentType[] = commentsClient.map((comment, index) => ({
  ...comment,
  id: index + 1
}));

export function Designcomments() {
  return (
    <div className="flex flex-row gap-10 rounded-full">{comments.map((comment) => (
      <figure key={comment.id} className="flex flex-row gap-5 rounded-md items-center w-[560px] h-[125px] justify-center border-[1.5px] border-[#2A6F97]">
        <div className="flex flex-row gap-5 p-10">
          <img src={comment.img} className="rounded-full w-20 h-20" />
          <div className="flex flex-col gap-2 justify-center items-start">
            <figcaption>
              {comment.name} - {comment.username}
            </figcaption>
            <blockquote className="text-md text-justify w-100 flex flex-wrap">{comment.body}</blockquote>
          </div>
        </div>
      </figure>
    ))}
    </div>
  );
}


export default function Comments() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">Cosa dicono di noi</h1>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee repeat={5} pauseOnHover className="[--duration:100s]">
        <Designcomments />
      </Marquee>
      <Marquee repeat={5} pauseOnHover className="[--duration:100s]">
        <Designcomments />
      </Marquee>
      <Marquee repeat={5} pauseOnHover className="[--duration:100s]">
        <Designcomments />
      </Marquee>
    </div>
    </div>
  );
}