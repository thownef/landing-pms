import type { HomeRichTextBlock, HomeRichTextChild } from "@/types/home.type";

function renderInline(children: HomeRichTextChild[] | null | undefined, boldClassName: string) {
  return children?.map((child, index) => {
    const text = child.text ?? "";
    if (child.bold) {
      return (
        <strong key={index} className={boldClassName}>
          {text}
        </strong>
      );
    }
    return <span key={index}>{text}</span>;
  });
}

interface HeroRichTextProps {
  blocks: HomeRichTextBlock[];
  className: string;
  boldClassName: string;
}

export function HeroRichText({ blocks, className, boldClassName }: HeroRichTextProps) {
  return (
    <>
      {blocks.map((block, index) => (
        <p key={index} className={className}>
          {renderInline(block.children, boldClassName)}
        </p>
      ))}
    </>
  );
}
