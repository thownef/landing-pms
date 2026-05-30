import type { HomeRichTextBlock } from "@/types/home.type";

export function HeroSlogan({ blocks }: { blocks: HomeRichTextBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const isHighlighted = block.children?.some((child) => child.bold);
        return (
          <span
            key={index}
            className={
              isHighlighted
                ? "bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
                : undefined
            }
          >
            {block.children?.map((child) => child.text ?? "").join("")}
            {index < blocks.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}
