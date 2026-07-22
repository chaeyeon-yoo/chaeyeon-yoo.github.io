import { useScrollProgress } from '../hooks/useScrollProgress';

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="reading-progress"
      aria-hidden="true"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
