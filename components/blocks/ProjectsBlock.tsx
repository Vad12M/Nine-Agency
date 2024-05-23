'use client';

import Button from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";
import GroupProjectItem from "@/components/projects/GroupProjectItem";
import { useState } from "react";
import { PROJECTS } from "@/components/constants";

export interface IProject {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface IProjectGroup {
  id: number;
  projects: IProject[];
}


export default function ProjectsBlock({
  title,
  description,
}: IDefaultBlockData) {


  const [limit, setLimit] = useState(2);
  let groupedProjects = groupProjects(PROJECTS, 3);

  function groupProjects(projects: IProject[], groupSize: number = 3): IProjectGroup[] {
    const groups: IProjectGroup[] = [];
    for (let i = 0; i < projects.length; i += groupSize) {
      groups.push({
        id: i / groupSize + 1,
        projects: projects.slice(i, i + groupSize),
      });
    }
    return groups;
  }

  return (
    <BlockLayout title={title} description={description} id={'projects'}>
      <div className="w-full flex flex-col items-start md:items-center justify-center">
        <div className="md:flex flex-col items-center w-[1170px] hidden">
          {groupedProjects.slice(0, limit).map((group, index) =>
            <GroupProjectItem group={group} key={index}/>)}
        </div>

        <div className="md:hidden flex-col items-center w-full flex">
          {PROJECTS.slice(0, limit * 3).map((project, index) => (
            <GroupProjectItem group={{ id: index + 1, projects: [project] }} key={index}/>
          ))}
        </div>
        <Button
          label={'See all projects'}
          className={`mt-10 w-full md:w-[1150px] ${limit >= groupedProjects.length ? 'hidden' : ''}`}
          rootClassName="w-full md:w-[1150px]"
          type={'outline'}
          onClick={() => setLimit(limit + 1)}
        />
      </div>
    </BlockLayout>
  );
}
