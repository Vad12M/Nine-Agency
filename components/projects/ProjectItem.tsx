import Link from "next/link";
import Typography from "@/ui/typography/Typography";
import { IProject } from "@/components/blocks/ProjectsBlock";

export default function ProjectItem({
  id,
  image,
  title,
  description,
}: IProject) {
  return (
    <Link href={`/projects/${id}`} className="flex flex-col items-center relative group overflow-hidden rounded-[16px]">
      <img src={image} alt={`Project ${id}`} className="w-full rounded-[16px]"/>
      <div
        className="flex flex-col space-y-3 absolute bg-black opacity-0 w-full bottom-0 p-6 transition-all duration-500 transform translate-y-full group-hover:opacity-80 group-hover:translate-y-0 rounded-[16px]"
      >
        <Typography text={title} type="p1"/>
        <Typography text={description} type="body" className="w-3/5"/>
        <Typography text={'See more'} type="body" className="underline"/>
      </div>
    </Link>
  )
}
