import { useState, forwardRef } from "react";

const ProtectedTextarea = forwardRef(function ProtectedTextarea(
  { value, onChange, placeholder, className, ...rest },
  ref
) {
  const [showWarning, setShowWarning] = useState(false);

  function flashWarning() {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2000);
  }

  function blockEvent(e) {
    e.preventDefault();
    flashWarning();
  }

  function handleKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && ["v", "V", "c", "C"].includes(e.key)) {
      e.preventDefault();
      flashWarning();
    }
  }

  return (
    <div className="relative">
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onPaste={blockEvent}
        onCopy={blockEvent}
        onCut={blockEvent}
        onDrop={blockEvent}
        onDragOver={(e) => e.preventDefault()}
        onContextMenu={blockEvent}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck={false}
        className={`w-full min-h-[120px] border border-border-light rounded-[10px] p-3.5 text-[15px] leading-[1.75] font-heebo resize-y bg-cream text-bark focus:outline-none focus:ring-2 focus:ring-moss ${className || ""}`}
        dir="ltr"
        {...rest}
      />
      {showWarning && (
        <div className="absolute top-2 left-2 right-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-2 rounded-lg text-center animate-fade-in-fast">
          Paste is disabled. Please write in your own words.
        </div>
      )}
    </div>
  );
});

export default ProtectedTextarea;
