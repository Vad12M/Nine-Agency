import Typography from "@/ui/typography/Typography";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PROJECTS } from "@/components/constants";

export default function ProjectPage() {
  const router = useRouter();
  const projectId = router.query.id;
  const [project, setProject] = React.useState<any>();

  useEffect(() => {
    if (projectId) {
      const data = PROJECTS.find((project) => project.id === +projectId);
      if (data) {
        setProject(data as any);
      }
    }
  }, [projectId]);

  if (!project) {
    return null;
  }

  const testImages = [
    '/projectDetailsImage.png',
    '/projectDetailsImage3.png',
    '/projectDetailsImage1.png',
    '/projectDetailsImage4.png',
  ];

  const col1 = testImages.slice(0, Math.ceil(testImages.length / 2));
  const col2 = testImages.slice(Math.ceil(testImages.length / 2), testImages.length);


  return <div>
    <div className='flex flex-col w-full md:py-40 py-20 m-container'>
      <Typography text={project.title} type={'p1'}/>
      <Typography text={project.description} type={'body'} className="w-full "/>

      <div className="md:flex space-x-6 hidden">
        <div className="flex flex-col">
          {col1.map((image, index) => (
            <img key={index} src={image} alt="project" className="w-full mt-8"/>
          ))}
        </div>

        <div className="flex flex-col">
          {col2.map((image, index) => (
            <img key={index} src={image} alt="project" className="w-full mt-8"/>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        {testImages.map((image, index) => (
          <img key={index} src={image} alt="project" className="w-full mt-8"/>
        ))}
      </div>


    </div>
  </div>
}
