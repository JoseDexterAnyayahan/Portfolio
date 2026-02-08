import { projects } from "@/lib/projects";
import WorksClient from "./WorksClient";

export const metadata = {
  title: "All Works | JD Portfolio",
  description:
    "Explore the full portfolio of Jose Dexter Anyayahan — web development, multimedia, videography, photography, and creative design projects.",
};

export default function WorksPage() {
  return <WorksClient projects={projects} />;
}
