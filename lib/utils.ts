import { programs } from "@/lib/school-data";

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function initials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
