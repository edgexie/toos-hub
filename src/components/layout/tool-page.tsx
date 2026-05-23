import { BackHomeButton } from "@/components/layout/back-home-button";
import { PageHeader } from "@/components/layout/page-header";

export function ToolPage({
  children,
  icon,
  kicker,
  title,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-9">
      <BackHomeButton />
      <div className="grid gap-6">
        <PageHeader icon={icon} kicker={kicker} title={title} />
        {children}
      </div>
    </main>
  );
}
