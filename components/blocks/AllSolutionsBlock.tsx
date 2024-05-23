import BlockLayout from "@/components/layouts/BlockLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function AllSolutionsBlock({
  title,
  description
}: IDefaultBlockData) {
  const images = [
    '/solutions2.png',
    '/solutions1.png',
    '/solutions3.png',
  ];

  return (
    <BlockLayout title={title} description={description}>
      <div className="">
        <div className="md:flex items-center space-x-6 justify-center hidden">
          {images.map((image, index) => (
            <img key={index} src={image} alt="solution" className="w-full h-[300px] object-cover"/>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            className={'w-[400px] mt-10'}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img key={index} src={image} alt="solution" className="rounded-[16px]"/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </BlockLayout>
  )
}
