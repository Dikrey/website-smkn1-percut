import Link from "next/link";
import type { Program } from "@/lib/school-data";

export default function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <Link className={`program-card theme-${program.theme}`} href={`/jurusan/${program.slug}`}>
      <div className="program-card-top">
        <span className="program-index">0{index + 1} / PROGRAM</span>
        <span className="program-icon" aria-hidden="true">{program.icon}</span>
      </div>
      <div className="program-card-copy">
        <span className="program-acronym">{program.acronym}</span>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
      </div>
      <span className="program-link">Lihat program <span aria-hidden="true">↗</span></span>
      <span className="program-watermark" aria-hidden="true">{program.acronym}</span>
    </Link>
  );
}
