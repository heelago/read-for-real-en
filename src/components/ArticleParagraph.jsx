import { useState } from "react";

export default function ArticleParagraph({ paragraph }) {
  return (
    <div className="mb-6 relative article-paragraph-card">
      <div
        className="article-content paragraph-en rounded-lg border border-border-light/70 bg-cream px-4 py-4"
        dir="ltr"
        style={{ textAlign: "left" }}
      >
        <p
          className={`text-base leading-[1.85] text-bark m-0 ${
            paragraph.isQuote ? "pl-4 border-l-2 border-earth/30 italic" : ""
          }`}
        >
          {paragraph.text}
        </p>
        {paragraph.isQuote && paragraph.quoteAuthor && (
          <p className="text-xs text-muted mt-1">- {paragraph.quoteAuthor}</p>
        )}
      </div>
    </div>
  );
}
