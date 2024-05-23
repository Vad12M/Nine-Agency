'use client';

import React from "react";
import Typography from "@/ui/typography/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INew } from "@/interfaces/INew";
import { format } from "date-fns";
import { NEWS } from "@/components/constants";

export default function NewPage() {
  const router = useRouter();
  const newId = router.query.id as string;
  const [activeNew, setActiveNew] = useState<INew>();

  useEffect(() => {
    if (newId && !activeNew) {
      setActiveNew(NEWS.find((item) => item.id === +newId));
    }
  }, [newId]);

  if (!activeNew) {
    return null;
  }

  return (
    <div className='flex flex-col w-full md:py-40 py-20 m-container'>
      <Typography text={activeNew.title} type={'p1'}/>
      <Typography text={format(activeNew.date, 'dd MMM yyyy')} type={'body'} className='mb-4'/>
      <img src={activeNew.image} alt={activeNew.title} className='w-full md:h-[575px] h-[265px] object-cover mb-4 md:mb-8 rounded-[16px]'/>
      <Typography text={activeNew.description} type={'body'} className="w-full"/>
    </div>
  )
}
