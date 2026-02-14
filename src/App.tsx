import Terminal from "./components/Terminal";

export default function App() {
  return (
    <div
      className="h-screen w-screen overflow-hidden p-4 sm:p-6"
      style={{ backgroundColor: "var(--tn-bg)" }}
    >
      {/* Terminal window with rounded corners */}
      <div
        className="h-full w-full overflow-hidden relative"
        style={{
          backgroundColor: "var(--tn-bg-dark)",
          boxShadow:
            "0 0 40px rgba(122, 162, 247, 0.08), 0 0 80px rgba(122, 162, 247, 0.04), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* CRT scanline overlay */}
        <div className="crt-overlay rounded-xl" />

        {/* Terminal */}
        <div
          className="rounded-xl h-[calc(100%-20px)]"
          style={{
            border: "1px solid rgba(8, 36, 193, 1)",
            padding: "5px",
            margin: "10px",
          }}
        >
          <Terminal />
        </div>

        {/* Credit overlay */}
        <div
          className="absolute bottom-2 left-0 right-0 text-center text-sm pointer-events-auto"
          style={{ color: "var(--tn-comment)", marginBottom: "10px" }}
        >
          Concept inspired by{" "}
          <a
            href="https://github.com/m4tt72/terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all"
            style={{ color: "var(--tn-blue)" }}
          >
            m4tt72
          </a>
        </div>
      </div>
    </div>
  );
}
