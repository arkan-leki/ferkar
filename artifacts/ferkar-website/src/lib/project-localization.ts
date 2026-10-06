import fergaImage from "../../../../attached_assets/photo_2026-06-04_03-18-31_1791312696276.jpg";
import poshyaImage from "../../../../attached_assets/Screenshot_1_1791313735162.jpg";

export type ProjectCopy = {
  name: string;
  category: string;
  description: string;
};

export type ProjectDisplay = ProjectCopy & {
  imageUrl?: string | null;
};

export type ProjectCopies = {
  ferga: ProjectCopy;
  poshya: ProjectCopy;
};

export function localizeProject(
  project: ProjectDisplay,
  projectCopies: ProjectCopies,
): ProjectDisplay {
  const projectKey = project.name.trim().toLowerCase();

  if (projectKey === "ferga") {
    return { ...project, ...projectCopies.ferga, imageUrl: fergaImage };
  }

  if (projectKey === "poshya") {
    return { ...project, ...projectCopies.poshya, imageUrl: poshyaImage };
  }

  return project;
}
