import type { AboutRichTextBlock, AboutRichTextChild, AboutListItemBlock } from "@/types/about.type";

function isListItem(child: AboutRichTextChild | AboutListItemBlock): child is AboutListItemBlock {
  return (child as AboutListItemBlock).type === "list-item";
}

export function renderParagraphChildren(children: AboutRichTextChild[] | null | undefined) {
  return children?.map((child, i) => {
    const text = child.text ?? "";
    if (child.bold && child.italic) return <strong key={i}><em>{text}</em></strong>;
    if (child.bold) return <strong key={i}>{text}</strong>;
    if (child.italic) return <em key={i}>{text}</em>;
    return <span key={i}>{text}</span>;
  });
}

export function renderListItem(block: AboutRichTextBlock, index: number) {
  return (
    <li key={index} className="flex items-start gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
      <span>
        {block.children
          ?.filter(isListItem)
          .flatMap((li) => li.children ?? [])
          .map((child, i) => {
            const text = child.text ?? "";
            if (child.bold && child.italic) return <strong key={i}><em>{text}</em></strong>;
            if (child.bold) return <strong key={i}>{text}</strong>;
            if (child.italic) return <em key={i}>{text}</em>;
            return <span key={i}>{text}</span>;
          })}
      </span>
    </li>
  );
}

/** Render mô tả công ty: paragraph + list, lọc block rỗng */
export function AboutRichText({ blocks }: { blocks: AboutRichTextBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks
        .filter((b) => b.children?.some((c) => ("text" in c ? c.text?.trim() : true)))
        .map((block, index) =>
          block.type === "list" ? (
            renderListItem(block, index)
          ) : (
            <p key={index} className="text-base text-gray-700 leading-relaxed text-justify">
              {renderParagraphChildren(block.children as AboutRichTextChild[] | null)}
            </p>
          ),
        )}
    </div>
  );
}
