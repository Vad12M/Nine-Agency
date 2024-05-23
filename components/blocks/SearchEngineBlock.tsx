import Typography from "@/ui/typography/Typography";
import TargetIcon from "@/ui/icons/TargetIcon";
import ContentIcon from "@/ui/icons/ContentIcon";
import StrategyIcon from "@/ui/icons/StrategyIcon";
import SocialMediaIcon from "@/ui/icons/SocialMediaIcon";
import RankingIcon from "@/ui/icons/RankingIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function SearchEngineBlock() {
  const data = [
    {
      icon: <TargetIcon/>,
      light: true,
      title: 'TargetIcon group',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt eget varius eros magna dignissim lectus blandit diam nibh.'
    },
    {
      icon: <ContentIcon/>,
      title: 'Content',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt eget varius eros magna dignissim lectus blandit diam nibh.'
    },
    {
      icon: <StrategyIcon/>,
      light: true,
      title: 'Marketing Strategy',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt eget varius eros magna dignissim lectus blandit diam nibh.'
    },
    {
      icon: <SocialMediaIcon/>,
      title: 'Social Media',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt eget varius eros magna dignissim lectus blandit diam nibh.'
    },
    {
      icon: <RankingIcon/>,
      light: true,
      title: 'Ranking',
      content: 'Lorem ipsum dolor sit amet consectetur. Tincidunt eget varius eros magna dignissim lectus blandit diam nibh.'
    },
  ];

  const Card = ({ icon, title, content, light }: {
    icon: any;
    title: string;
    content: string;
    light?: boolean;
  }) => {
    return (
      <div className={
        `flex flex-col justify-between items-start w-full md:w-[279px] h-[291px] py-5 px-4 rounded-[16px]
          ${light ? 'bg-gray' : ''}
        `}>
        <div className="mr-6">
          {icon}
        </div>
        <div>
          <Typography text={title} type={'p1'} className="mb-2"/>
          <Typography text={content} type={'body'} className={'w-[228px]'}/>
        </div>
      </div>
    )
  }

  return (
    <div className="flex md:flex-row flex-col items-start justify-between w-full py-40">
      <div className="min-w-[558px]">
        <Typography text={'Search engine optimisation (SEO)'} className="text-start w-[370px] md:max-w-[558px] mb-3"/>
        <Typography
          text={'Lorem ipsum dolor sit amet consectetur. Vitae erat porttitor in egestas. Molestie lobortis curabitur ut maecenas praesent. Amet consequat ut lobortis arcu.'}
          type={'body'}
          className="text-start max-w-[440px] md:block hidden"
        />
      </div>
      <div className="md:flex flex-col -ml-[300px] hidden">
        <div className="flex ml-[280px]">
          {data.slice(0, 2).map((el, index) => (
            <Card key={index} {...el}/>
          ))}
        </div>
        <div className="flex">
          {data.slice(2, 5).map((el, index) => (
            <Card key={index} {...el}/>
          ))}
        </div>
      </div>


      <div className="md:hidden">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          className={'w-[400px] mt-10'}
        >
          {data.map((el, index) => (
            <SwiperSlide key={index}>
              <Card {...el}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
