import Button from "@/ui/button/Button";
import Typography from "@/ui/typography/Typography";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import LeftIcon from "@/ui/icons/LeftIcon";
import useGetIsMobile from "@/hooks/useGetIsMobile";

export default function Header() {
  const router = useRouter();
  const isMobile = useGetIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showLinks = () => (
    <nav className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4 md:space-x-12 text-white">
      <a href={'#about'}>
        <Typography text={'About us'} type={'body'}/>
      </a>
      <Link href={'#projects'}>
        <Typography text={'Our cases'} type={'body'}/>
      </Link>
      <Link href={'/news'}>
        <Typography text={'News'} type={'body'}/>
      </Link>
      <a href={'#contact'}>
        <Typography text={'Contact'} type={'body'}/>
      </a>
    </nav>
  );

  const isHomePage = router.pathname === '/';

  return (
    <header className="flex items-center justify-between py-6 bg-background z-50 m-container md:px-0 mx-10">
      {!isHomePage && isMobile ?
        <button className="ml-4 z-50" onClick={() => router.push(sessionStorage.getItem('previousUrl') || '/')}>
          <LeftIcon/>
        </button> : <Link href={'/'}>
          Logo
        </Link>}
      <div className="md:block hidden">
        {showLinks()}
      </div>
      <Button
        label={'Get Started'}
        type={'secondary'}
        className={'w-[170px] md:block hidden'}
      />
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`z-50 md:hidden flex flex-col items-center justify-center border rounded-[8px] border-white bg-transparent w-10 h-10 ${!isMenuOpen ? 'space-y-1' : ''}`}>
        <div className={`w-5 h-[1px] bg-white ${isMenuOpen ? 'transform rotate-45 translate-y-[1px]' : ''}`}/>
        <div className={`w-5 h-[1px] bg-white ${isMenuOpen ? 'hidden' : ''}`}/>
        <div className={`w-5 h-[1px] bg-white ${isMenuOpen ? 'transform -rotate-45' : ''}`}/>
      </button>

      {isMenuOpen && (
        <div
          className="w-screen h-screen bg-background fixed top-0 left-0 flex flex-col items-center z-40">
          <div className="pt-[35%]">
            {showLinks()}
          </div>
        </div>
      )}
    </header>
  )
}
