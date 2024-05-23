import Typography from "@/ui/typography/Typography";
import Button from "@/ui/button/Button";
import { useRouter } from "next/router";
import { NEWS } from "@/components/constants";
import NewBlockItems from "@/components/news/NewBlockItems";


export default function NewsBlock() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full md:py-40 py-20 m-container">
      <div className="md:pb-20 pb-10 border-b border-white md:w-full w-[330px]">
        <Typography text={'Stay up - to - date with our latest news.'} className="md:w-[570px] w-[330px]"/>
      </div>
      {!!NEWS.length && <NewBlockItems items={NEWS.slice(0, 3)}/>}
      {NEWS.length > 3 && <NewBlockItems items={NEWS.slice(3, 6)}/>}
      {NEWS.length > 6 && <NewBlockItems items={NEWS.slice(6, 9)}/>}
      <Button
        label={'Reed all news'}
        className={`mt-10 md:mt-20 w-[330px] md:w-[1150px]`}
        rootClassName="w-[330px] md:w-[1150px]"
        type={'outline'}
        onClick={() => router.push('/projects')}
      />
    </div>
  )
}
