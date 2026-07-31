import { statItems, type StatItem } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';

function StatBadge({ value, label, srText }: StatItem) {
  const { ref, display } = useCountUp(value);

  return (
    <div className="stat-item">
      <span className="stat-value" aria-hidden="true" ref={ref}>
        {display}
      </span>
      <span className="stat-label" aria-hidden="true">
        {label}
      </span>
      <span className="visually-hidden">{srText}</span>
    </div>
  );
}

export function Stats() {
  return (
    <div className="card-stats">
      {statItems.map((item) => (
        <StatBadge key={item.label} {...item} />
      ))}
    </div>
  );
}
