import type { LeadershipRichTextBlock } from "@/types/leadership.type";

export function LetterTitle({ blocks }: { blocks: LeadershipRichTextBlock[] }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 uppercase tracking-tight leading-snug">
      {blocks.map((block, i) => {
        const text = block.children?.map((c) => c.text ?? "").join("") ?? "";
        const isBold = block.children?.some((c) => c.bold);
        return (
          <span key={i}>
            {isBold ? <span className="text-emerald-700">{text}</span> : text}
            {i < blocks.length - 1 && <br />}
          </span>
        );
      })}
    </h2>
  );
}
