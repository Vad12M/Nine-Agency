import Link from "next/link";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import Button from "@/ui/button/Button";
import InstagramIcon from "@/ui/icons/InstagramIcon";
import FacebookIcon from "@/ui/icons/FacebookIcon";
import TikTokIcon from "@/ui/icons/TikTokIcon";
import YouTubeIcon from "@/ui/icons/YouTubeIcon";

export default function Footer() {

  const sendEmail = () => {
    console.log('send email');
  }

  const showLogo = () => (
    <img alt={'logo'}/>
  );


  const showEmailBlock = () => (
    <div className={"w-full md:w-auto pt-16 pb-20"}>
      <Typography text={'Get the freshest news from us'} type={'p2'} className="mb-4"/>
      <div className="flex md:flex-row flex-col space-x-2 items-center">
        <Input
          className="
            text-gray md:mb-0 mb-2 h-[50px] md:h-10 bg-white placeholder:text-grayLight px-[14px] rounded-[8px] md:w-[280px] w-full
          "
          placeholder={'Your email address…'}
          placeholderTextColor={'text-grayLight'}
        />
        <Button
          label={'Subscribe'}
          className="md:w-[120px] md:max-h-10 w-full h-[50px] rounded-[8px]"
          rootClassName={"md:w-[120px] w-full"}
          onClick={sendEmail}
        />
      </div>
    </div>
  );

  const showSocialIcons = () => (
    <div className="flex items-center space-x-4">
      <Link href={'/'}>
        <InstagramIcon/>
      </Link>
      <Link href={'/'}>
        <FacebookIcon/>
      </Link>
      <Link href={'/'}>
        <TikTokIcon/>
      </Link>
      <Link href={'/'}>
        <YouTubeIcon/>
      </Link>
    </div>
  );

  const showLinks = () => (
    <nav
      className="flex md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-12 text-white md:pb-0 pb-16 md:pt-0 pt-10">
      <a href={'#about'}>
        <Typography text={'About us'} type={'p2'}/>
      </a>
      <Link href={'#projects'}>
        <Typography text={'Our cases'} type={'p2'}/>
      </Link>
      <Link href={'/news'}>
        <Typography text={'News'} type={'p2'}/>
      </Link>
      <a href={'#contact'}>
        <Typography text={'Contact'} type={'p2'}/>
      </a>
    </nav>
  );


  return (
    <footer className='py-20 border-t-2 border-white rounded-[20px]'>
      <div className="md:flex flex-col hidden">
        <div className="flex items-center justify-between pb-5 border-b border-gray mb-10 m-container">
          <div className="flex flex-col space-y-20">
            {showLogo()}
            {showLinks()}
            {showSocialIcons()}
          </div>
          {showEmailBlock()}
        </div>
        <nav className="flex items-center space-x-8 m-container">
          <Link href={'/'}>
            <Typography text={'Terms & Conditions'} type={'body'} color={'text-grayLight'}/>
          </Link>
          <Link href={'/'}>
            <Typography text={'Privacy Policy'} type={'body'} color={'text-grayLight'}/>
          </Link>
          <Link href={'/'}>
            <Typography text={'Accessibility'} type={'body'} color={'text-grayLight'}/>
          </Link>
          <Link href={'/'}>
            <Typography text={'Legal'} type={'body'} color={'text-grayLight'}/>
          </Link>
        </nav>
      </div>

      <div className="md:hidden flex flex-col items-center justify-between m-container">
        <div className="flex flex-col items-center space-y-10 w-full border-b border-white">
          {showLogo()}
          {showLinks()}
        </div>
        <div className="w-full flex flex-col">
          {showEmailBlock()}
          {showSocialIcons()}
        </div>
      </div>
    </footer>
  )
}
