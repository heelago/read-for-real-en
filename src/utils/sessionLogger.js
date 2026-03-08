import { INLINE_QUESTIONS } from "../data/reading-flow";
import { ARTICLE } from "../data/article-content";

const sessionLog = {
  startTime: null,
  studentMeta: null,
  conceptsViewed: [],
  structuredAnswers: {},
  quizAnswers: {},
  quizScore: null,
  exportTime: null,
};

export function initSession() {
  sessionLog.startTime = new Date().toISOString();
}

export function setStudentMeta(meta) {
  sessionLog.studentMeta = meta;
}

export function logConceptViewed(conceptId) {
  if (!sessionLog.conceptsViewed.includes(conceptId)) {
    sessionLog.conceptsViewed.push(conceptId);
  }
}

export function logStructuredAnswer(index, answer) {
  sessionLog.structuredAnswers[index] = answer;
}

export function logQuizAnswer(questionId, answer) {
  sessionLog.quizAnswers[questionId] = answer;
}

export function setQuizScore(score) {
  sessionLog.quizScore = score;
}

export function getEngagementMetrics() {
  const now = new Date();
  const duration = sessionLog.startTime
    ? Math.round((now - new Date(sessionLog.startTime)) / 60000)
    : 0;

  const answeredCount = Object.keys(sessionLog.structuredAnswers).length;
  const totalWords = Object.values(sessionLog.structuredAnswers).reduce(
    (sum, ans) => sum + (ans ? ans.trim().split(/\s+/).length : 0),
    0
  );
  const avgWords = answeredCount > 0 ? Math.round(totalWords / answeredCount) : 0;

  return {
    duration,
    conceptsViewed: sessionLog.conceptsViewed.length,
    totalConcepts: ARTICLE.keyConcepts.length,
    answeredQuestions: answeredCount,
    totalQuestions: INLINE_QUESTIONS.length,
    avgAnswerLength: avgWords,
    quizScore: sessionLog.quizScore,
  };
}

export function getSessionLog() {
  return sessionLog;
}
