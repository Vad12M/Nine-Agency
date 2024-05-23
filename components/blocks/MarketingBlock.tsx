import Typography from "@/ui/typography/Typography";
import BlockLayout from "@/components/layouts/BlockLayout";
import useGetIsMobile from "@/hooks/useGetIsMobile";

export default function MarketingBlock({
  title,
  description
}: IDefaultBlockData) {
  const isMobile = useGetIsMobile();
  const data = [
    { img: '/marketing1.png', alt: 'experience', content: 'years of experience', count: 7 },
    { img: '/marketing2.png', alt: 'members', content: 'team members', count: 23 },
    { img: '/marketing3.png', alt: 'clients', content: 'satisfied clients', count: 70 },
    { img: '/marketing4.png', alt: 'videos', content: 'company videos created', count: 200 },
  ];

  const mobileData = [
    { img: '/marketingMobile3.png', alt: 'experience', content: 'years of experience', count: 7 },
    { img: '/marketingMobile4.png', alt: 'members', content: 'team members', count: 23 },
    { img: '/marketingMobile1.png', alt: 'clients', content: 'satisfied clients', count: 70 },
    { img: '/marketingMobile2.png', alt: 'videos', content: 'company videos created', count: 200 },
  ];

  const MarketingItem = ({ img, alt, content, count }: {
    img: string;
    alt: string;
    content: string;
    count: number;
  }) => {
    return (
      <div className="relative group w-full">
        <div className="w-full h-full bg-black absolute opacity-60 group-hover:opacity-0 transition duration-300">
        </div>
        <img src={img} alt={alt}/>
        <div
          className="absolute w-full justify-center flex flex-col items-start bottom-5 left-5 group-hover:opacity-0 transition duration-300">
          <Typography text={count + '+'} type={'sub'} className="mb-2"/>
          <Typography text={content} type={'body'}/>
        </div>
      </div>
    )
  };

  return (
    <BlockLayout title={title} description={description} id={'about'}>
      <div className="flex flex-col md:flex-row m-container justify-center">
        {(isMobile ? mobileData : data).map((item, index) => (
          <MarketingItem key={index} {...item}/>
        ))}
      </div>
    </BlockLayout>
  )
}
