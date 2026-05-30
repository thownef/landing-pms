import type { RichTextBlock, RichTextChild } from "@/types/service-detail.type";

function renderInline(children: RichTextChild[] | undefined) {
  return children?.map((child, index) => {
    const text = child.text ?? "";

    return (
      <span
        key={index}
        className={`${child.bold ? "font-bold" : ""} ${child.italic ? "italic" : ""} ${child.underline ? "underline" : ""}`}
      >
        {text}
      </span>
    );
  });
}

export function RichText({ blocks, className }: { blocks: RichTextBlock[]; className: string }) {
  return (
    <>
      {blocks
        .filter((block) => block.children?.some((child) => child.text?.trim()))
        .map((block, index) => (
          <p key={index} className={className}>
            {renderInline(block.children)}
          </p>
        ))}
    </>
  );
}
