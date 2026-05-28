"use client";

import { FileText, Eye, Download, Layers } from "lucide-react";

export interface DocItem {
  name: string;
  size: string;
  type: string;
}

interface ServiceDocListProps {
  title: string;
  subtitle: string;
  docs: DocItem[];
  onPreview: (name: string) => void;
  onDownload: (name: string) => void;
}

export function ServiceDocList({ title, subtitle, docs, onPreview, onDownload }: ServiceDocListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Layers className="w-4 h-4 text-[#1e4e8c]" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-950">{title}</h4>
      </div>
      <p className="text-[11px] text-gray-500 italic pb-1">{subtitle}</p>
      <div className="space-y-2">
        {docs.map((doc, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:border-[#1e4e8c] hover:shadow-sm transition-all text-left"
          >
            <div className="flex items-start space-x-3 max-w-[75%]">
              <div className="p-2 rounded mt-0.5 flex-shrink-0 bg-slate-100 text-gray-500">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-950 block leading-tight">{doc.name}</span>
                <span className="text-[9px] text-[#1e4e8c] leading-none mt-1 inline-block bg-blue-50 px-1.5 py-0.5 rounded font-bold">
                  {doc.size} • {doc.type.split("_")[0]}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onPreview(doc.name)}
                className="p-1.5 text-gray-400 hover:text-[#1e4e8c] bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                title="Xem nhanh văn bản"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onDownload(doc.name)}
                className="p-1.5 text-gray-400 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                title="Tải tệp PDF chính thức"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
