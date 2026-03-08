import { ARTICLE, PHASES } from "../data/article-content";
import { INLINE_QUESTIONS } from "../data/reading-flow";
import { QUIZ } from "../data/quiz-data";
import { getSessionLog, getEngagementMetrics } from "./sessionLogger";

export function generateReport() {
  const log = getSessionLog();
  const metrics = getEngagementMetrics();
  const now = new Date();
  log.exportTime = now.toISOString();

  const meta = log.studentMeta || {};

  const answersHTML = INLINE_QUESTIONS
    .map((q) => {
      const ans = log.structuredAnswers[q.id];
      if (!ans) return "";
      const phase = PHASES[q.phase];
      return `
      <div class="qa-block">
        <div class="phase-tag" style="color:${phase.color}">${phase.icon} ${phase.label} - Prompt ${q.id}</div>
        <div class="question">${q.question}</div>
        <div class="answer">${ans}</div>
      </div>`;
    })
    .join("");

  const quizHTML = QUIZ.map((q) => {
    const studentAnswer = log.quizAnswers[q.id];
    if (studentAnswer === undefined) return "";

    if (q.type === "multiple_choice") {
      const answerDisplay = q.options[studentAnswer] || "No response";
      const correctDisplay = q.options[q.correct];
      const isCorrect = studentAnswer === q.correct;
      return `
      <div class="quiz-block ${isCorrect ? "correct" : "incorrect"}">
        <div class="question">${q.question}</div>
        <div class="student-answer">Student answer: ${answerDisplay}</div>
        <div class="correct-answer">Correct answer: ${correctDisplay}</div>
        <div class="result-badge">${isCorrect ? "Correct" : "Incorrect"}</div>
      </div>`;
    }

    if (q.type === "true_false") {
      const isCorrect = studentAnswer.value === q.correct;
      return `
      <div class="quiz-block ${isCorrect ? "correct" : "incorrect"}">
        <div class="question">${q.question}</div>
        <div class="student-answer">Student answer: ${studentAnswer.value ? "True" : "False"}</div>
        ${studentAnswer.justification ? `<div class="justification">Justification: ${studentAnswer.justification}</div>` : ""}
        <div class="correct-answer">Correct answer: ${q.correct ? "True" : "False"}</div>
        <div class="result-badge">${isCorrect ? "Correct" : "Incorrect"}</div>
      </div>`;
    }

    if (q.type === "matching") {
      const pairs = q.pairs;
      const isCorrect = studentAnswer.every((matchIdx, termIdx) => matchIdx === termIdx);
      return `
      <div class="quiz-block ${isCorrect ? "correct" : "incorrect"}">
        <div class="question">${q.question}</div>
        <table class="matching-table">
          <tr><th>Term</th><th>Student Match</th><th>Correct Match</th></tr>
          ${pairs
            .map(
              (p, idx) => `
          <tr>
            <td>${p.term}</td>
            <td>${pairs[studentAnswer[idx]]?.match || "-"}</td>
            <td>${p.match}</td>
          </tr>`
            )
            .join("")}
        </table>
        <div class="result-badge">${isCorrect ? "Correct" : "Incorrect"}</div>
      </div>`;
    }

    return "";
  }).join("");

  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<title>Reading Report - ${ARTICLE.title}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&family=Frank+Ruhl+Libre:wght@400;500;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Heebo', sans-serif; direction: ltr; background: #fff; color: #2d2a24; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; }
h1 { font-family: 'Frank Ruhl Libre', serif; font-size: 24px; color: #3d3529; margin-bottom: 4px; }
h2 { font-family: 'Frank Ruhl Libre', serif; font-size: 18px; color: #5a4f40; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #e8e3d9; }
.meta { color: #8a7d6b; font-size: 14px; margin-bottom: 8px; }
.meta-box { background: #faf8f4; border: 1px solid #e8e3d9; border-radius: 10px; padding: 20px; margin: 20px 0 32px; }
.qa-block { margin-bottom: 24px; padding: 16px; background: #faf8f4; border-radius: 10px; border-left: 3px solid #6b7c5b; }
.phase-tag { font-size: 13px; font-weight: 600; margin-bottom: 8px; }
.question { font-weight: 600; font-size: 15px; margin-bottom: 10px; color: #3d3529; }
.answer { font-size: 15px; color: #4a4338; white-space: pre-wrap; }
.quiz-block { margin-bottom: 16px; padding: 14px; border-radius: 10px; border-left: 3px solid #ccc; }
.quiz-block.correct { background: #f0f7ed; border-left-color: #6b7c5b; }
.quiz-block.incorrect { background: #fdf5f0; border-left-color: #c75; }
.student-answer { font-size: 14px; color: #4a4338; margin-top: 6px; }
.correct-answer { font-size: 14px; color: #6b7c5b; margin-top: 4px; }
.justification { font-size: 14px; color: #5a4f40; margin-top: 4px; font-style: italic; }
.result-badge { font-size: 13px; font-weight: 600; margin-top: 8px; }
.matching-table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 13px; }
.matching-table th, .matching-table td { padding: 6px 10px; border: 1px solid #e8e3d9; text-align: left; }
.matching-table th { background: #f0ede6; font-weight: 600; }
.engagement-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 16px 0; }
.engagement-item { background: #faf8f4; padding: 12px; border-radius: 8px; text-align: center; }
.engagement-item .value { font-size: 22px; font-weight: 700; color: #6b7c5b; }
.engagement-item .label { font-size: 12px; color: #8a7d6b; margin-top: 4px; }
.footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #e8e3d9; font-size: 12px; color: #aaa; text-align: center; }
@media print { body { padding: 20px; } }
</style>
</head>
<body>
<h1>Reading Report - Reading Otherwise</h1>
<p class="meta">${ARTICLE.title}</p>
<p class="meta">${ARTICLE.author} (${ARTICLE.year}). ${ARTICLE.source}</p>

<div class="meta-box">
  ${meta.name ? `<div class="meta">Name: ${meta.name}</div>` : ""}
  ${meta.studentId ? `<div class="meta">Student ID: ${meta.studentId}</div>` : ""}
  ${meta.email ? `<div class="meta">Email: ${meta.email}</div>` : ""}
  <div class="meta">Course Unit: Digital Humanities</div>
  <div class="meta">Date: ${now.toLocaleDateString("en-US")}</div>
  <div class="meta">Work Duration: ~${metrics.duration} minutes</div>
</div>

<h2>Engagement Summary</h2>
<div class="engagement-grid">
  <div class="engagement-item">
    <div class="value">${metrics.conceptsViewed}/${metrics.totalConcepts}</div>
    <div class="label">Concepts Opened</div>
  </div>
  <div class="engagement-item">
    <div class="value">${metrics.avgAnswerLength}</div>
    <div class="label">Avg. Words per Answer</div>
  </div>
  <div class="engagement-item">
    <div class="value">${metrics.answeredQuestions}/${metrics.totalQuestions}</div>
    <div class="label">Socratic Prompts Answered</div>
  </div>
  <div class="engagement-item">
    <div class="value">${metrics.quizScore !== null ? metrics.quizScore.correct + "/" + metrics.quizScore.total : "-"}</div>
    <div class="label">Quiz Score</div>
  </div>
</div>

<h2>Socratic Responses</h2>
<p class="meta">Answered ${metrics.answeredQuestions} out of ${metrics.totalQuestions} prompts</p>
${answersHTML || "<p>No Socratic responses were submitted.</p>"}

${quizHTML ? `<h2>Quiz Results</h2>${quizHTML}` : ""}

<div class="footer">
  Generated with Reading Otherwise - Socratic reading companion
</div>
<script>
  const params = new URLSearchParams(window.location.search);
  const wantsPrint = params.get("print") === "1" || window.location.hash === "#print";
  if (wantsPrint) {
    window.addEventListener("load", () => {
      setTimeout(() => window.print(), 350);
    });
  }
</script>
</body>
</html>`;
}
