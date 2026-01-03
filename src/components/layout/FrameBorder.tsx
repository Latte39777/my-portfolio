export default function FrameBorder() {
  const gap = "mx-2 md:mx-4 my-0";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 ${gap} overflow-hidden`}
    >
      {/* --- 1. 左上 (Top Left) --- */}
      <div className="absolute top-0 left-0">
        <span className={`absolute top-1 left-1 text-2xl whitespace-nowrap`}>
          - - - - - - - - - - - -
        </span>
      </div>

      {/* --- 2. 右上 (Top Right) --- */}
      <div className="absolute top-0 right-0">
        <div
          className={`absolute top-1 right-1 flex items-center gap-2 text-2xl whitespace-nowrap`}
        >
          × × ×
        </div>
      </div>

      {/* --- 3. 左下 (Bottom Left) --- */}
      <div className="absolute bottom-0 left-0">
        <span className={`absolute bottom-1 left-1 text-2xl whitespace-nowrap`}>
          × × ×
        </span>
      </div>

      {/* --- 4. 右下 (Bottom Right) --- */}
      <div className="absolute right-0 bottom-0 text-right">
        <div className={`absolute right-1 bottom-1 text-2xl whitespace-nowrap`}>
          - - - - - - - - - - - -
        </div>
      </div>
    </div>
  );
}
