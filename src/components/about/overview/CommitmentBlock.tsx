import type { AboutRichTextBlock, AboutRichTextChild } from "@/types/about.type";
import { renderListItem, renderParagraphChildren } from "./AboutRichText";

interface CommitmentBlockProps {
  title: string;
  listBlocks: AboutRichTextBlock[];
  paragraphBlocks: AboutRichTextBlock[];
}

export function CommitmentBlock({ title, listBlocks, paragraphBlocks }: CommitmentBlockProps) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-[#098a58]">{title}</p>

      {listBlocks.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
          {listBlocks.map((block, index) => renderListItem(block, index))}
        </ul>
      )}

      {paragraphBlocks.map((block, index) => (
        <p key={index} className="text-sm text-gray-600 leading-relaxed pt-1 border-t border-emerald-100">
          {renderParagraphChildren(block.children as AboutRichTextChild[] | null)}
        </p>
      ))}
    </div>
  );
}
