import { Quote } from "lucide-react";
import type { LeadershipContent } from "@/types/leadership.type";
import { LetterTitle } from "./LetterTitle";
import { LetterOpening } from "./LetterOpening";
import { LetterQuote } from "./LetterQuote";

type MessageLetterProps = Pick<
  LeadershipContent,
  "ghiChu" | "tieuDe" | "noiDung1" | "noiDung2" | "noiDung3"
>;

export function MessageLetter({ ghiChu, tieuDe, noiDung1, noiDung2, noiDung3 }: MessageLetterProps) {
  return (
    <div className="space-y-8 text-left">
      {/* Label */}
      <div className="flex items-center space-x-2 text-amber-600 font-mono text-xs font-bold uppercase tracking-wider">
        <Quote className="w-4 h-4 text-amber-500 rotate-180" />
        <span>{ghiChu}</span>
      </div>

      {/* Title */}
      <div className="space-y-3">
        <LetterTitle blocks={tieuDe} />
        <div className="w-16 h-1 bg-amber-400 rounded-full" />
      </div>

      {/* Body */}
      <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
        <LetterOpening blocks={noiDung1} />
        <LetterQuote blocks={noiDung2} />

        {/* noiDung3: sanitized CKEditor HTML — preserves color/background-color */}
        <div
          className="space-y-4 [&>p]:leading-relaxed [&>p]:text-slate-700 [&>p]:text-sm sm:[&>p]:text-base"
          dangerouslySetInnerHTML={{ __html: noiDung3 }}
        />
      </div>
    </div>
  );
}
