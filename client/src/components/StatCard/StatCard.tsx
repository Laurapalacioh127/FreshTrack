
type Props = {
  label: string;
  value: string | number;
  note: string;
  icon: string;
};

export function StatCard({ label, value, note, icon }: Props) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <span>{label}</span>
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </article>
  );
}
