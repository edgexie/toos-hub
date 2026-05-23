export function PageHeader({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">{kicker}</p>
        <h1 className="text-4xl font-bold tracking-normal sm:text-6xl">{title}</h1>
      </div>
    </div>
  );
}
