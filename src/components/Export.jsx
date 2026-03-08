import { useState, useEffect } from "react";
import { ARTICLE } from "../data/article-content";
import { generateReport } from "../utils/reportGenerator";
import { getSessionLog, getEngagementMetrics } from "../utils/sessionLogger";

export default function Export({ quizResult }) {
  const [reportUrl, setReportUrl] = useState(null);
  const metrics = getEngagementMetrics();
  const log = getSessionLog();
  const studentName = log.studentMeta?.name || "student";

  useEffect(() => {
    const html = generateReport();
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    setReportUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  const authorSlug = ARTICLE.author.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const filename = `reading-report-${authorSlug}-${studentName
    .replace(/\s+/g, "-")
    .toLowerCase()}-${new Date().toISOString().slice(0, 10)}.html`;

  function openPrintToPdf() {
    if (!reportUrl) return;
    window.open(`${reportUrl}#print`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="animate-fade-in text-center pt-8">
      <div className="text-5xl mb-4">✓</div>
      <h2 className="font-frank text-[22px] font-bold mb-2.5">Report Ready</h2>
      <p className="text-bark-muted text-[15px] leading-[1.8] max-w-[480px] mx-auto mb-6">
        Your report includes responses, quiz results, and engagement metrics. Download it as HTML or open print view and save as PDF.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[520px] mx-auto mb-8">
        <div className="bg-parchment border border-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-moss">{metrics.duration}</div>
          <div className="text-xs text-earth mt-1">Minutes</div>
        </div>
        <div className="bg-parchment border border-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-moss">
            {metrics.answeredQuestions}/{metrics.totalQuestions}
          </div>
          <div className="text-xs text-earth mt-1">Socratic Prompts</div>
        </div>
        <div className="bg-parchment border border-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-moss">
            {quizResult ? `${quizResult.correct}/${quizResult.total}` : "-"}
          </div>
          <div className="text-xs text-earth mt-1">Quiz Score</div>
        </div>
        <div className="bg-parchment border border-border rounded-xl p-3 text-center">
          <div className="text-xl font-bold text-moss">
            {metrics.conceptsViewed}/{metrics.totalConcepts}
          </div>
          <div className="text-xs text-earth mt-1">Concepts Opened</div>
        </div>
      </div>

      {reportUrl && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={reportUrl}
            download={filename}
            className="inline-block bg-moss text-white rounded-[10px] px-8 py-3 text-base font-semibold no-underline font-heebo hover:brightness-110 transition-all"
          >
            Download HTML
          </a>
          <button
            type="button"
            onClick={openPrintToPdf}
            className="inline-block bg-slate text-white rounded-[10px] px-8 py-3 text-base font-semibold border-none cursor-pointer font-heebo hover:brightness-110 transition-all"
          >
            Open Print / PDF
          </button>
        </div>
      )}
    </div>
  );
}
