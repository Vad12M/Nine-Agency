import { useState } from "react";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import Button from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";

export default function ContactBlock({
  title,
  description
}: IDefaultBlockData) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const sendForm = () => {
    console.log(form);
  }


  const InfoItem = ({ title, content }: { title: string, content: string }) => {
    return (
      <div className="mb-10">
        <Typography text={title} type={'p1'} className="mb-2"/>
        <Typography text={content} type={'body'}/>
      </div>
    )
  }

  const infoItems = [
    { title: 'Contact us', content: '+373 78 21 99 20' },
    { title: 'E - mail', content: '9amagency@gmail.com' },
    { title: 'Address', content: 'Strada Albișoara 78/1' },
  ]

  return (
    <>
      <BlockLayout title={title} description={description} id={'contact'}>
        <div className="border border-white p-6 rounded-[16px] md:flex space-x-20 hidden">
          <div className="bg-gray p-10 rounded-[16px] h-[435px] w-[460px]">
            {infoItems.map((item, index) => (
              <InfoItem key={index} title={item.title} content={item.content}/>
            ))}
          </div>
          <div className="w-[540px]">
            <div className="flex flex-col space-y-4 pt-8 mb-8">
              <Input
                placeholder="Name"
                value={form.name}
                onChange={(value) => setForm({ ...form, name: value })}
              />
              <Input
                placeholder="Phone"
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value })}
              />
              <Input
                placeholder="Message"
                value={form.message}
                onChange={(value) => setForm({ ...form, message: value })}
                isArea={true}
              />
            </div>
            <Button
              label={'Send a message'}
              onClick={sendForm}
              rootClassName={'w-[257px]'}
              className={'w-[257px]'}
            />
          </div>
        </div>


        <div className="md:hidden">
          <div className="w-[330px]">
            <div className="flex flex-col space-y-4 pt-8 mb-8">
              <Input
                placeholder="Name"
                value={form.name}
                onChange={(value) => setForm({ ...form, name: value })}
              />
              <Input
                placeholder="Phone"
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value })}
              />
              <Input
                placeholder="Message"
                value={form.message}
                onChange={(value) => setForm({ ...form, message: value })}
                isArea={true}
              />
            </div>
            <Button
              label={'Send a message'}
              onClick={sendForm}
              rootClassName={'w-[330px]'}
              className={'w-330px]'}
            />
          </div>
          <div className="h-[1px] bg-white w-full my-14"/>
          <div className="bg-gray p-10 rounded-[16px] h-[340px] w-[330px]">
            {infoItems.map((item, index) => (
              <InfoItem key={index} title={item.title} content={item.content}/>
            ))}
          </div>

        </div>

      </BlockLayout>


    </>
  )
}
