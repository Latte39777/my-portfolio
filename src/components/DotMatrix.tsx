type DotMatrixProps = {
  rows: number;
  cols: number;
  size?: string;
  gap?: string;
  color?: string;
  className?: string;
};

export default function DotMatrix({
  rows = 10,
  cols = 10,
  size = "w-4 h-4",
  gap = "gap-4",
  color = "bg-gray-300",
  className = "",
}: DotMatrixProps) {
  const totalDots = cols * rows;

  return (
    <div
      className={`grid ${gap} ${className}`}
      // grid-template-columns を動的に設定して、指定した列数で折り返す
      style={{ gridTemplateColumns: `repeat(${cols}, min-content)` }}
    >
      {Array.from({ length: totalDots }).map((_, i) => (
        <div key={i} className={`${size} ${color} rounded-full`} />
      ))}
    </div>
  );
}
