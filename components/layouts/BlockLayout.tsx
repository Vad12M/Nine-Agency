import Typography from "@/ui/typography/Typography";

interface IBlockLayout {
  title: string;
  description: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export default function BlockLayout({
  title,
  description,
  children,
  id,
  className
}: IBlockLayout) {
  return (
    <div className={`flex items-start md:items-center flex-col w-full md:py-40 py-20 m-container ${className}`} id={id} >
      <div className="flex items-start md:items-center flex-col">
        <Typography text={title} className="md:text-center md:max-w-[800px] max-w-[330px] md:mb-6 mb-3"/>
        <Typography text={description} type={'body'} className="md:text-center md:max-w-[500px] w-full pb-10"/>
      </div>
      {children}
    </div>
  )
}
