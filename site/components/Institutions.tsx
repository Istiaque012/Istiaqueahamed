import { institutions } from "@/lib/content";

export default function Institutions() {
  return (
    <section id="institutions" className="border-y border-hairline bg-surface-2">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-8 gap-y-3 px-6 py-6 md:px-10">
        <span className="w-full text-[10px] uppercase tracking-[0.22em] text-faint md:w-auto">
          Trained at
        </span>
        {institutions.map((name, i) => (
          <span key={name} className="flex items-center gap-8 text-sm text-muted">
            {name}
            {i < institutions.length - 1 && (
              <span className="hidden text-hairline md:inline">·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
