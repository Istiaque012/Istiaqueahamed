"use client";

import { FilterButton } from "@/components/ui";

export default function EditorialFilters({
  active,
  ariaLabel = "Filter writing",
  filters,
  onSelect,
}: {
  active: string;
  ariaLabel?: string;
  filters: readonly string[];
  onSelect: (filter: string) => void;
}) {
  return (
    <div className="editorial-filters" aria-label={ariaLabel}>
      {filters.map((filter) => (
        <FilterButton key={filter} onClick={() => onSelect(filter)} pressed={filter === active}>
          {filter}
        </FilterButton>
      ))}
    </div>
  );
}
