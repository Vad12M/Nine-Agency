import Typography from "@/ui/typography/Typography";
import { NEWS } from "@/components/constants";
import NewBlockItems from "@/components/news/NewBlockItems";

const countBlocks = Math.ceil(NEWS.length / 3);
const newsBlocks = Array.from({ length: countBlocks }, (_, i) =>
  NEWS.slice(i * 3, i * 3 + 3)
);

export default function News() {
  return (
    <div className="flex flex-col w-full md:py-40 py-20 m-container">
      <div className="md:pb-20 pb-10 border-b border-white md:w-full w-[330px]">
        <Typography text={'Stay up - to - date with our latest news.'} className="md:w-[570px] w-[330px]"/>
      </div>
      {newsBlocks.map((newsBlock, index) => (
        <NewBlockItems key={index} items={newsBlock}/>
      ))}
    </div>
  );
}
