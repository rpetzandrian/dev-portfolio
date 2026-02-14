import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import {
  PROMPT_PARTS,
  WELCOME_BANNER,
  ABOUT_TEXT,
  WORK_EXPERIENCE,
  TECH_STACK,
  COMMANDS,
  PROJECTS,
  CONTACT,
} from "../data";

// ── Types ──
export interface HistoryEntry {
  command: string;
  output: ReactNode;
}

// ── Command Output Renderers ──
function renderWhoami(): ReactNode {
  return (
    <div className="py-1">
      {ABOUT_TEXT.map((line, i) => (
        <div key={i} style={{ color: "var(--tn-cyan)" }}>
          {line}
        </div>
      ))}
    </div>
  );
}

function renderWork(): ReactNode {
  return (
    <div className="py-1 space-y-3">
      {WORK_EXPERIENCE.map((job, i) => (
        <div key={i}>
          <div>
            <span style={{ color: "var(--tn-green)" }}>▸ {job.role}</span>
            <span style={{ color: "var(--tn-comment)" }}> @ </span>
            <span style={{ color: "var(--tn-blue)" }}>{job.company}</span>
            <span style={{ color: "var(--tn-comment)" }}> ({job.period})</span>
          </div>
          {job.highlights.map((h, j) => (
            <div key={j} style={{ color: "var(--tn-fg)" }} className="pl-4">
              <span style={{ color: "var(--tn-comment)" }}>  └─ </span>
              {h}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function renderStack(): ReactNode {
  return (
    <div className="py-1 space-y-2">
      {TECH_STACK.map((cat, i) => (
        <div key={i}>
          <span style={{ color: "var(--tn-purple)" }}>⦿ {cat.category}:</span>
          <span style={{ color: "var(--tn-fg)" }}>
            {" "}
            {cat.items.map((item, j) => (
              <span key={j}>
                <span style={{ color: "var(--tn-yellow)" }}>{item}</span>
                {j < cat.items.length - 1 && (
                  <span style={{ color: "var(--tn-comment)" }}> · </span>
                )}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

function renderHelp(): ReactNode {
  return (
    <div className="py-1">
      <div style={{ color: "var(--tn-yellow)" }} className="mb-1">
        Available commands:
      </div>
      {COMMANDS.map((cmd, i) => (
        <div key={i} className="flex gap-4">
          <span
            style={{ color: "var(--tn-green)" }}
            className="w-20 inline-block"
          >
            {cmd.name}
          </span>
          <span style={{ color: "var(--tn-comment)" }}>—</span>
          <span style={{ color: "var(--tn-fg)" }}>{cmd.description}</span>
        </div>
      ))}
    </div>
  );
}

function renderProjects(): ReactNode {
  return (
    <div className="py-1 space-y-3">
      {PROJECTS.map((proj, i) => (
        <div key={i}>
          <div>
            <span style={{ color: "var(--tn-green)" }}>📁 {proj.name}</span>
            {proj.url && (
              <span style={{ color: "var(--tn-blue)" }}> ({proj.url})</span>
            )}
          </div>
          <div style={{ color: "var(--tn-fg)" }} className="pl-4">
            {proj.description}
          </div>
          <div className="pl-4">
            <span style={{ color: "var(--tn-comment)" }}>Tech: </span>
            {proj.tech.map((t, j) => (
              <span key={j}>
                <span style={{ color: "var(--tn-cyan)" }}>{t}</span>
                {j < proj.tech.length - 1 && (
                  <span style={{ color: "var(--tn-comment)" }}>, </span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderContact(): ReactNode {
  return (
    <div className="py-1">
      <div style={{ color: "var(--tn-yellow)" }} className="mb-1">
        Get in touch:
      </div>
      <div>
        <span style={{ color: "var(--tn-purple)" }}>  ✉ Email    </span>
        <a
          href={`mailto:${CONTACT.email}`}
          style={{ color: "var(--tn-cyan)" }}
          className="underline hover:no-underline transition-all"
        >
          {CONTACT.email}
        </a>
      </div>
      <div>
        <span style={{ color: "var(--tn-purple)" }}>  ⌂ GitHub   </span>
        <a
          href={`https://${CONTACT.github}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--tn-cyan)" }}
          className="underline hover:no-underline transition-all"
        >
          {CONTACT.github}
        </a>
      </div>
      <div>
        <span style={{ color: "var(--tn-purple)" }}>  ∞ LinkedIn </span>
        <a
          href={`https://${CONTACT.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--tn-cyan)" }}
          className="underline hover:no-underline transition-all"
        >
          {CONTACT.linkedin}
        </a>
      </div>
    </div>
  );
}

function renderNotFound(cmd: string): ReactNode {
  return (
    <div style={{ color: "var(--tn-red)" }}>
      Command not found: {cmd}. Type{" "}
      <span style={{ color: "var(--tn-yellow)" }}>'help'</span> for options.
    </div>
  );
}

function renderWelcome(): ReactNode {
  return (
    <pre
      style={{ color: "var(--tn-blue)" }}
      className="text-xs sm:text-sm leading-tight"
    >
      {WELCOME_BANNER}
    </pre>
  );
}

// ── Colorful Prompt Component ──
export function PromptDisplay() {
  return (
    <span className="shrink-0 font-bold">
      <span style={{ color: "var(--tn-green)" }}>{PROMPT_PARTS.user}</span>
      <span style={{ color: "var(--tn-fg)" }}>{PROMPT_PARTS.separator}</span>
      <span style={{ color: "var(--tn-purple)" }}>{PROMPT_PARTS.host}</span>
      <span style={{ color: "var(--tn-cyan)" }}>{PROMPT_PARTS.path}</span>
      <span style={{ color: "var(--tn-yellow)" }}>{PROMPT_PARTS.symbol}</span>
    </span>
  );
}

// ── Hook ──
export function useTerminal() {
  const welcomeEntry: HistoryEntry = { command: "", output: renderWelcome() };
  const whoamiEntry: HistoryEntry = { command: "whoami", output: renderWhoami() };

  const [history, setHistory] = useState<HistoryEntry[]>([welcomeEntry, whoamiEntry]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Process a command string
  const processCommand = useCallback((cmd: string): ReactNode => {
    const trimmed = cmd.trim().toLowerCase();

    switch (trimmed) {
      case "whoami":
        return renderWhoami();
      case "work":
        return renderWork();
      case "stack":
        return renderStack();
      case "help":
        return renderHelp();
      case "projects":
        return renderProjects();
      case "contact":
        return renderContact();
      case "clear":
        return null; // handled separately
      case "":
        return null;
      default:
        return renderNotFound(trimmed);
    }
  }, []);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const cmd = inputValue.trim();

        if (cmd.toLowerCase() === "clear") {
          // Keep the welcome banner, clear everything else
          setHistory([welcomeEntry]);
          setInputValue("");
          setCommandHistory((prev) => [...prev, cmd]);
          setHistoryIndex(-1);
          return;
        }

        const output = processCommand(cmd);
        const newEntry: HistoryEntry = {
          command: cmd,
          output,
        };

        setHistory((prev) => [...prev, newEntry]);
        if (cmd) {
          setCommandHistory((prev) => [...prev, cmd]);
        }
        setInputValue("");
        setHistoryIndex(-1);
      }

      // Arrow up — previous command
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length === 0) return;
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }

      // Arrow down — next command
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex === -1) return;
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputValue("");
        } else {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
    },
    [inputValue, processCommand, commandHistory, historyIndex]
  );

  return {
    history,
    inputValue,
    setInputValue,
    handleKeyDown,
    inputRef,
    bottomRef,
  };
}
