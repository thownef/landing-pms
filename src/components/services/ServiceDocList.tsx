"use client";

import { FileText, Eye, Download, Layers } from "lucide-react";

export interface DocItem {
  name: string;
  size: string;
  type: string;
  url?: string;
  files?: Array<{
    name: string;
    url: string;
    size: string;
    type: string;
  }>;
}

interface ServiceDocListProps {
  title: string;
  subtitle: string;
  docs: DocItem[];
  onDownload: (name: string) => void;
}

export function ServiceDocList({ title, subtitle, docs, onDownload }: ServiceDocListProps) {
  const handleView = (doc: DocItem) => {
    if (doc.files && doc.files.length > 0) {
      // If multiple files, open the first one or show a selection
      window.open(doc.files[0].url, "_blank", "noopener,noreferrer");
    } else if (doc.url) {
      window.open(doc.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleDownload = (doc: DocItem) => {
    if (doc.files && doc.files.length > 0) {
      // Download all files in the group
      doc.files.forEach((file, index) => {
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = file.url;
          const extension = file.type.includes('XLSX') ? '.xlsx' : '.pdf';
          a.download = file.name + extension;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, index * 500); // Delay between downloads
      });
    } else if (doc.url) {
      const a = document.createElement("a");
      a.href = doc.url;
      const extension = doc.type.includes('XLSX') ? '.xlsx' : '.pdf';
      a.download = doc.name + extension;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      onDownload(doc.name);
    }
  };

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
                  {doc.size} • {doc.type.split("_")[0]}{doc.files ? ` (${doc.files.length} files)` : ""}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleView(doc)}
                disabled={!doc.url && (!doc.files || doc.files.length === 0)}
                className="p-1.5 text-gray-400 hover:text-[#1e4e8c] bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                title={doc.files ? "Xem file đầu tiên" : "Xem tài liệu"}
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDownload(doc)}
                className="p-1.5 text-gray-400 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                title={doc.files ? `Tải ${doc.files.length} files` : "Tải tệp"}
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
