import Typography from "../../ui/typography/Typography";
import Link from "next/link";

export default function NewItem({
  id,
  date,
  description,
  image
}: {
  id: number;
  date: string;
  description: string;
  image: string;
}) {

  return (
    <div className="md:block flex md:flex-col items-center rounded-[16px] w-[330px] md:w-[364px] md:h-[400px] h-[120px] relative mb-6">
      <img src={image} alt="news" className="rounded-t-[16px] md:w-[364px] md:h-[180px] w-[133px] h-[120px] object-cover"/>
      <div className="bg-gray rounded-[16px] md:p-6 p-4 md:-mt-4 absolute md:min-h-[213px] md:w-full w-[213px] h-[120px] right-0">
        <Typography text={date} type="body" className="md:mb-2"/>
        <Typography text={description} type="body" className="mb-4 hidden md:block"/>
        <Typography text={description.slice(0, 35) + '...'} type="body" className="mb-1 md:hidden"/>
        <Link href={`/news/${id}`} className="mt-3">
          <Typography text={'Read more'} type="body" className=" underline hover:no-underline" color={'text-redLight'}/>
        </Link>
      </div>
    </div>
  )
}
