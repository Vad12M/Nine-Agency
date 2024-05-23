import { IProjectGroup } from "@/components/blocks/ProjectsBlock";
import ProjectItem from "@/components/projects/ProjectItem";

export default function GroupProjectItem({
  group
}: {
  group: IProjectGroup
}) {
  const [project1, project2, project3] = group.projects;
  return (
    <div className="flex flex-col mb-6">
      <ProjectItem  {...project1}/>
      {project2 && project3 && <div className="flex space-x-6 mt-6">
        <ProjectItem {...project2}/>
        <ProjectItem {...project3}/>
      </div>}
    </div>
  )
}
