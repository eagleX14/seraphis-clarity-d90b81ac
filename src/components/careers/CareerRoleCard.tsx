import { Link } from "react-router-dom";
import { ArrowRight, Award, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CareerRole } from "@/data/careers";
import { getProjectDuration } from "@/data/careerPresentation";

const CareerRoleCard = ({ role }: { role: CareerRole }) => (
  <article className="seraphis-card flex h-full flex-col gap-5">
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{role.practiceArea}</span>
    </div>

    <div className="space-y-3">
      <h3 className="text-2xl leading-tight">{role.title}</h3>
      <p className="text-sm text-muted-foreground">{role.summary}</p>
    </div>

    <div className="grid gap-2 text-sm text-seraphis-body sm:grid-cols-2">
      <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" />{role.location}</div>
      <div className="flex items-center gap-2"><Clock3 size={16} className="text-primary" />{getProjectDuration(role)}</div>
      <div className="flex items-center gap-2"><BriefcaseBusiness size={16} className="text-primary" />{role.experienceLabel}</div>
      {role.certificationTags.length > 0 && (
        <div className="flex items-center gap-2"><Award size={16} className="text-primary" />{role.certificationTags.join(" / ")}</div>
      )}
    </div>

    <div className="mt-auto border-t border-border pt-5">
      <Button variant="hero-outline" className="w-full sm:w-auto" asChild>
        <Link to={`/careers/${role.slug}`}>
          View Role <ArrowRight size={16} />
        </Link>
      </Button>
    </div>
  </article>
);

export default CareerRoleCard;
