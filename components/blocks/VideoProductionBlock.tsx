import BlockLayout from "@/components/layouts/BlockLayout";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useRef, useState } from "react";
import ArrowLeft from "@/ui/icons/ArrowLeft";
import ArrowRight from "@/ui/icons/ArrowRight";
import { motion } from 'framer-motion';
import useOnClickOutside from "@/hooks/useOnClickOutside";
import PLayIcon from "@/ui/icons/PLayIcon";
import useGetIsMobile from "@/hooks/useGetIsMobile";

SwiperCore.use([Pagination, EffectCoverflow]);

export default function VideoProductionBlock({
  title,
  description
}: IDefaultBlockData) {
  const isMobile = useGetIsMobile();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const swiperRef = useRef(null);
  const swiperMobileRef = useRef(null);
  const currentRef = isMobile ? swiperMobileRef : swiperRef;
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ]

  const handlePrevSlide = () => {
    if (currentRef.current !== null && (currentRef.current as any).swiper !== null) {
      (currentRef.current as any).swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (currentRef.current !== null && (currentRef.current as any).swiper !== null) {
      (currentRef.current as any).swiper.slideNext();
    }
  };

  const handleSlideClick = (index: number, isMobile?: boolean) => {
    if (index === activeSlide && !isPlaying) {
      setIsPlaying(true);
      playVideo(isMobile);
    } else {
      setActiveSlide(index);
      stopVideo(isMobile);
    }
  };

  const playVideo = (isMobile?: boolean) => {
    // @ts-ignore
    const video: HTMLVideoElement | null = document.getElementById(`video-${activeSlide}${isMobile ? '-m' : ''}`);
    if (video) {
      video.play();
    }
  };

  const stopVideo = (isMobile?: boolean) => {
    // @ts-ignore
    const video: HTMLVideoElement | null = document.getElementById(`video-${activeSlide}${isMobile ? '-m' : ''}`);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useOnClickOutside([currentRef], () => {
    stopVideo(isMobile);
    setIsPlaying(false);
  });

  return (
    <BlockLayout title={title} description={description}>
      <div className="flex flex-col items-center">
        <div className="hidden md:block">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              700: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              500: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              411: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
            }}
            className='w-[1100px] m-auto'
            ref={swiperRef}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="max-h-min">
                <div className='rounded-[16px] relative'
                     onClick={() => activeSlide === index && handleSlideClick(index)}>
                  <motion.video
                    id={`video-${index}`}
                    src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                    autoPlay={false}
                    animate={{
                      marginTop: isPlaying && activeSlide === index ? '0' : '0',
                      marginLeft: isPlaying && activeSlide === index ? '-50%' : '0',
                      minWidth: isPlaying && activeSlide === index ? '200%' : '100%',
                    }}
                  />
                  {(isPlaying ? activeSlide !== index : true) &&
                    <div className="absolute z-50 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                      <PLayIcon/>
                    </div>}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="md:hidden">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            className={'md:hidden block w-full m-auto'}
            ref={swiperMobileRef}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className='rounded-[16px] relative'
                  onClick={() => activeSlide === index && handleSlideClick(index, true)}>
                  <video
                    id={`video-${index}-m`}
                    src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                    autoPlay={false}
                  />
                  {(isPlaying ? activeSlide !== index : true) &&
                    <div className="absolute z-50 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                      <PLayIcon/>
                    </div>}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {isPlaying && <div
          className="md:absolute opacity-50 w-screen h-screen top-0 backdrop-blur-sm hidden"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className="absolute w-screen h-screen "/>
        </div>
        }
        <div className="flex items-center space-x-8 mt-6">
          <button onClick={handlePrevSlide}>
            <ArrowLeft/>
          </button>
          <button onClick={handleNextSlide}>
            <ArrowRight/>
          </button>
        </div>
      </div>
    </BlockLayout>
  )
}
