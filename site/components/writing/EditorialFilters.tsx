"use client";

import { FilterButton } from "@/components/ui";

export default function EditorialFilters({
  active,
  filters,
  onSelect,
}: {
  active: string;
  filters: readonly string[];
  onSelect: (filter: string) => void;
}) {
  return (
    <div className="editorial-filters" aria-label="Filter writing">
      {filters.map((filter) => (
        <FilterButton key={filter} onClick={() => onSelect(filter)} pressed={filter === active}>
          {filter}
        </FilterButton>
      ))}
    </div>
  );
}
