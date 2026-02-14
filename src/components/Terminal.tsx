import { useTerminal, PromptDisplay } from "../hooks/useTerminal";

export default function Terminal() {
  const {
    history,
    inputValue,
    setInputValue,
    handleKeyDown,
    inputRef,
    bottomRef,
  } = useTerminal();

  // Focus the hidden input whenever the user clicks anywhere
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="h-full w-full py-6 px-8 sm:py-8 sm:px-10 hide-scrollbar cursor-text"
      onClick={focusInput}
      style={{ backgroundColor: "var(--tn-bg-dark)" }}
    >
      {/* ── History ── */}
      {history.map((entry, i) => (
        <div key={i} className="fade-in mb-1" style={{paddingLeft: "10px", paddingTop: "5px"}}>
          {/* Command line (skip for welcome banner which has empty command) */}
          {entry.command !== "" && (
            <div className="flex gap-2 flex-wrap">
              <PromptDisplay />
              <span style={{ color: "var(--tn-fg)" }}>{entry.command}</span>
            </div>
          )}
          {/* Output */}
          {entry.output && (
            <div className="pl-0 whitespace-pre-wrap">{entry.output}</div>
          )}
        </div>
      ))}

      {/* ── Active Prompt Line ── */}
      <div className="flex gap-2 items-center mt-1" style={{paddingLeft: "10px", paddingTop: "5px"}}>
        <PromptDisplay />

        {/* Visible text + cursor */}
        <div className="relative flex-1 flex items-center min-h-[1.5rem]">
          {/* Rendered text mirroring input value */}
          <span className="whitespace-pre" style={{ color: "var(--tn-fg)" }}>
            {inputValue}
          </span>

          {/* Blinking block cursor */}
          <span
            className="cursor-blink inline-block w-[0.6em] h-[1.2em] ml-[1px] translate-y-[1px]"
            style={{ backgroundColor: "var(--tn-fg)" }}
          />

          {/* Hidden input */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 w-full h-full opacity-0"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </div>
      </div>

      {/* ── Scroll anchor ── */}
      <div ref={bottomRef} />
    </div>
  );
}
