import type { LeadershipRichTextBlock, LeadershipRichTextChild } from "@/types/leadership.type";

function renderChildren(children: LeadershipRichTextChild[] | null | undefined) {
  return children?.map((child, i) => {
    const text = child.text ?? "";
    if (!text) return null;
    if (child.bold && child.italic) return <strong key={i}><em>{text}</em></strong>;
    if (child.bold) return <strong key={i}>{text}</strong>;
    if (child.italic) return <em key={i}>{text}</em>;
    return <span key={i}>{text}</span>;
  });
}

export function LetterOpening({ blocks }: { blocks: LeadershipRichTextBlock[] }) {
  return (
    <>
      {blocks
        .filter((b) => b.children?.some((c) => c.text?.trim()))
        .map((block, i) => {
          const isBoldOnly = block.children?.every((c) => c.bold);
          return (
            <p key={i} className={isBoldOnly ? "font-extrabold" : ""}>
              {renderChildren(block.children)}
            </p>
          );
        })}
    </>
  );
}
