import { useState, useEffect } from "react";
import { initSession } from "./utils/sessionLogger";
import { LogoMark } from "./components/SvgAssets";
import Welcome from "./components/Welcome";
import Primer from "./components/Primer";
import ArticleReader from "./components/ArticleReader";
import Quiz from "./components/Quiz";
import Export from "./components/Export";

const PHASE_ORDER = ["welcome", "primer", "reading", "quiz", "export"];

export default function App() {
  const [phase, setPhase] = useState("welcome");
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    initSession();
  }, []);

  useEffect(() => {
    function warn(e) {
      if (phase === "reading" || phase === "quiz") {
        e.preventDefault();
        e.returnValue = "";
      }
    }
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [phase]);

  const currentIndex = PHASE_ORDER.indexOf(phase);

  return (
    <div className="font-heebo min-h-screen bg-parchment text-bark" dir="ltr">
      <header className="bg-bark text-parchment-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#f0ede6 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative z-10 max-w-[720px] mx-auto px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <LogoMark className="w-10 h-10 text-parchment-deep shrink-0" />
              <div className="flex flex-col gap-0.5">
                <h1 className="font-heebo text-[22px] font-bold m-0 leading-none">
                  Reading Otherwise
                </h1>
                <span className="text-xs font-light opacity-85">
                  Socratic Reading Companion
                </span>
              </div>
            </div>
            <span className="text-sm font-medium leading-none opacity-90 pt-1 whitespace-nowrap" dir="ltr">
              Developed by{" "}
              <a
                href="https://h2eapps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-100 transition-opacity"
              >
                H2eApps
              </a>
            </span>
          </div>
        </div>

        {phase !== "welcome" && (
          <div className="max-w-[720px] mx-auto px-6 pb-4 relative z-10">
            <div className="flex gap-1.5">
              {PHASE_ORDER.map((p, i) => (
                <div
                  key={p}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i <= currentIndex ? 40 : 24,
                    background:
                      i < currentIndex
                        ? "rgba(255,255,255,0.6)"
                        : i === currentIndex
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-[720px] mx-auto px-4 sm:px-8 py-6 pb-24">
        {phase === "welcome" && <Welcome onComplete={() => setPhase("primer")} />}

        {phase === "primer" && <Primer onComplete={() => setPhase("reading")} />}

        {phase === "reading" && <ArticleReader onComplete={() => setPhase("quiz")} />}

        {phase === "quiz" && (
          <Quiz
            onComplete={(result) => {
              setQuizResult(result);
              setPhase("export");
            }}
          />
        )}

        {phase === "export" && <Export quizResult={quizResult} />}
      </main>
    </div>
  );
}
