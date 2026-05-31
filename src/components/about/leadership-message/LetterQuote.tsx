import type { LeadershipRichTextBlock, LeadershipRichTextChild } from "@/types/leadership.type";

function renderChild(child: LeadershipRichTextChild, i: number) {
  const text = child.text ?? "";
  if (!text) return null;
  if (child.bold && child.italic) return <strong key={i}><em>{text}</em></strong>;
  if (child.bold) return <strong key={i}>{text}</strong>;
  if (child.italic) return <em key={i}>{text}</em>;
  return <span key={i}>{text}</span>;
}

export function LetterQuote({ blocks }: { blocks: LeadershipRichTextBlock[] }) {
  const hasContent = blocks.some((b) => b.children?.some((c) => c.text?.trim()));
  if (!hasContent) return null;

  return (
    <blockquote className="p-5 bg-slate-50 border-l-4 border-amber-400 rounded-r-xl space-y-1">
      {blocks
        .filter((b) => b.children?.some((c) => c.text?.trim()))
        .map((block, i) => (
          <p key={i}>
            {block.children?.map((child, j) => renderChild(child, j))}
          </p>
        ))}
    </blockquote>
  );
}
