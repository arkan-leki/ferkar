import fergaImage from "../../../../attached_assets/photo_2026-06-04_03-18-31_1791312696276.jpg";

export type ProjectCopy = {
  name: string;
  category: string;
  description: string;
};

export type ProjectDisplay = ProjectCopy & {
  imageUrl?: string | null;
};

export function localizeProject(
  project: ProjectDisplay,
  fergaCopy: ProjectCopy,
): ProjectDisplay {
  return project.name.trim().toLowerCase() === "ferga"
    ? { ...project, ...fergaCopy, imageUrl: fergaImage }
    : project;
}
