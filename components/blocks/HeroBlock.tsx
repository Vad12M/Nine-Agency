import Typography from "@/ui/typography/Typography";
import AnimatedWords from "@/components/AnimatedWords";
import Button from "@/ui/button/Button";
import styles from './HeroBlock.module.scss';

export default function HeroBlock() {
  const companiesImages = [
    '/companies/company1.png',
    '/companies/company7.png',
    '/companies/company5.png',
    '/companies/company9.png',
    '/companies/company6.png',
    '/companies/company8.png',
    '/companies/company3.png',
    '/companies/company2.png',
    '/companies/company4.png',
  ];

  const extendedImages = Array.from({ length: 900 }, () => companiesImages).flat();

  return (
    <div className="w-full flex justify-center md:py-40 py-10 m-container relative h-screen">
      <img src="/ellipse.png" alt="hero image" className="md:absolute -top-[100px] hidden"/>
      <div className="flex flex-col items-center w-full justify-center">
        <Typography text={'Nine Agency'} type="superH1" className="text-center"/>
        <div className="overflow-hidden relative w-full">
          <AnimatedWords
            words={[
              'Social Media',
              'Marketing',
              'SEO',
              'Video Production',
              'AI',
            ]}
          />
        </div>
        <Typography
          text={'Lorem ipsum dolor sit amet consectetur. Lectus nam et ipsum risus magna volutpat nulla risus suscipit. '}
          type="body"
          className="text-center mt-6 md:max-w-[520px] max-w-[303px]"
        />
        <Button
          label={'Bool A Meeting'}
          className="md:mt-16 mt-8 w-[330px] md:w-[170px] h-[56px]"
          rootClassName="h-[56px] flex items-center justify-center"
        />

        <div className="flex items-center space-x-4 md:space-x-10 md:pt-28 pt-12 md:pb-12 md:mb-6 mb-12">
          <div className="h-0.5 md:w-[50px] w-[28px] bg-red"/>
          <Typography text={'TRUSTED BY AMAZING BRANDS'} type={'p2'}/>
          <div className="h-0.5 md:w-[50px] w-[28px] bg-red"/>
        </div>

        <div className="border border-white rounded-[16px] p-2 md:p-4 w-[328px] md:w-[946px] md:h-[157px] h-[60px]">
          <div className="overflow-hidden w-[310px] md:w-[910px]">
            <div className={`flex ${styles.animateMarquee}`}>
              {extendedImages.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`}
                     className="md:h-[120px] h-[44px] md:w-[264px] w-[150px] object-cover"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
