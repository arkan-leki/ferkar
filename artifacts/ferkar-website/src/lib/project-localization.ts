import fergaImage from "../../../../attached_assets/generated_images/project-ferga.jpg";

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
