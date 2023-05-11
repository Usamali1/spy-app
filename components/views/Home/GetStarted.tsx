import React, { useState } from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import moneyBack from '../../../public/moneyback2.png'
import Link from "next/link";

const GetStarted = () => {

  const [open, setopen] = useState(false)

  const handleOpen = () => {
    setopen(!open)
  }

  return (
    <>
      <div className="background3"
        style={{
          backgroundImage: `url(${moneyBack.src})`
        }}>
        <div className="flex max-w-3xl ml-[190px] gap-24 pb-16 max-sm:grid max-sm:max-w-full max-sm:ml-0 max-sm:gap-5 max-sm:px-5 ">
          <div className="max-sm:w-[150px] max-sm:flex max-sm:justify-center max-sm:px-5 max-sm:mx-auto ">
            <Image
              src={"/moneyback1.png"}
              alt={"img"}
              width={400}
              height={200}
            />
          </div>
          <div className="max-sm:text-center">
            <h2 className="text-[#383C43] text-4xl mb-9 font-[700px] max-sm:text-xl max-sm:mb-6 max-sm:font-[500px]">
              <b>Comece agora</b>
            </h2>
            <p className="text-[#6B7C93] text-lg mb-8 max-sm:text-base max-sm:mb-6">
              Proteja seus relacionamentos, pessoas e interesses. Garantia de devolução do dinheiro em 60 dias.
            </p>
            <div className="flex sm:justify-start justify-center  gap-5 text-sm">
              <Link href={'/login'}>
                <Button
                  title="Inscrever-se"
                  backgroundColor="#8b9ce6"
                  color="#ffffff"
                  border="#8393db"
                  padding={"8px 24px"}
                  size={"14px"}
                  weight={"400"}
                />
              </Link>
              <Link href={'/demo/dashboard'}>
                <Button
                  title="Ver demonstração"
                  backgroundColor="#ffffff"
                  color="#8393db"
                  border="#8393db"
                  padding={"8px 24px"}
                  size={"14px"}
                  weight={"400"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center py-4 border-t-2 bg-[#F5F9FC] text-[#4B4B4B] text-xs mb-16 max-sm:mb-10 cursor-pointer" onClick={handleOpen}>
        <p>Leia mais sobre o Spyzie</p>
        <span className={` transition-all duration-300 ${open ? 'rotate-180' : ''}`}> <AiOutlineDown /> </span>
      </div>
      {open && (
        <div className='max-w-[1100px] mx-auto px-0'>
          <h1 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Spyzie Spy Phone App: Spying Made Easy</h1>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>How hard is it to spy on someone? It’s simple, straightforward, and stress-free with Spyzie. You can monitor phones and tablets from your web browser at your convenience.
            And you won’t need any technical skills to speak of – to install the app or use it.</p>
          <h2 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>What Can a Spy Phone App Do For You?</h2>
          <p className='text-[#6B7C93] text-base mb-10 font-[400px] '>You can use a spy phone app like Spyzie to keep an eye on someone: .</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Keep them safe: Your child or teen could be in danger online. Are they video chatting with strangers? Or are they being bullied in school? They may not confide
            in you, but you can find out for yourself by keeping tabs on their activities</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>View their contacts list: Who are they in touch with? Is your child talking to someone inappropriate? Or is your partner in contact with an ex?
            You can check their contact lists and call records to gain detailed information.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Follow their movements: Where are they going? Are they truly going to work or are they secretly visiting someone else? You can
            track their location activities with the phone spy app remotely for your peace of mind.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Save money and time: How much money are you spending on a private investigator? You can keep tabs on someone for cheap with phone spy
            software instead. It costs a fraction of the price and is arguably just as effective.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Use privately: An added advantage of Spyzie is that the spy phone app is completely private to use. Your details aren’t recorded in any way.
            Further, your activities aren’t accessible to anyone, including the members of the staff.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>For business use: Spyzie makes for a powerful employee supervision tool. If an employee is using their
            company-issued device to
            sell company secrets or just to run their own business, then you will be able to put a stop to it.</p>

          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>See if they’re true to you: Is your partner cheating on you? Is an employee selling you out to the competition?
            Their phone activities can tell you everything you need to know about their faithfulness.</p>
          <h1 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Keep Tabs on Phone Activities Remotely with a Phone Spy App</h1>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>You can see what they’re doing on their phones and tablets with phone monitoring software:</p>
          <ul className='text-[#4B4B4B] text-xs list-disc mb-3'>
            <li className='mb-2 ml-3'>Phone calls and logs.</li>
            <li className='mb-2 ml-3'>Messages and social media messages.</li>
            <li className='mb-2 ml-3'>Location tracking, GPS, and geofencing.</li>
            <li className='mb-2 ml-3'>Apps and app use.</li>
            <li className='mb-2 ml-3'>Web browser and internet activities.</li>
            <li className='mb-2 ml-3'>Calendar tracking.</li>
            <li className='mb-2 ml-3'>Photos and videos.</li>
          </ul>
          <h2 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Spy Phone Apps are Designed with Stealth in Mind</h2>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Spyzie is one of the stealthiest cell spy phone apps on the market. This means the person you’re monitoring will never know you’re there. The stealth feature works differently
            depending on the target platform, iOS or Android, but it’s equally effective regardless.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>For Android, the app works in the background invisibly. It won’t drain the phone battery nor will it slow down the
            phone process in any way. Further, there is no app icon visible on the home screen or in the app drawer.</p>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]' >In the case of iOS, Spyzie is a completely web-based solution. It extracts the iCloud backup at periodic intervals.
            It’s not an app you install on the target iPhone or iPad. As such, the app is completely undetectable.</p >
          <h3 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Is It Ethically Okay to Use Mobile Monitoring Software?</h3>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]' >This is one for the philosophers. We can’t answer this question for you. We created Spyzie with the intent to allow you to protect yourself and your interests in this Digital Age. We know there are many dangers out there,
            and we want Spyzie to be a tool you can turn to when you need to figure out the truth.</p >
          <h4 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Do Parents Use Spyzie to Spy on Their Kids?</h4>
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]' >Yes, parents use Spyzie to monitor their kids. It has several features parents would find handy, which makes it an effective parental control solution.
            Primary among them is the ability to keep tabs on your children while staying hidden.</p >
          <p className='text-[#6B7C93] text-base mb-5 font-[400px]'>Children will often hide their activities from their parents for fear of reprisal. They are also smart enough to disable conventional parental
            control apps. Thanks to Spyzie’s stealth mode, you can keep an eye on your child in secret.</p >
          <h5 className='text-[#3B3B3B] text-[26px] font-[400px] mb-5'>Can I Catch a Cheating Partner with Mobile Spy Software?</h5>
          <p className='text-[#6B7C93] text-base mb-16 font-[400px]'>If you use the phone spy app Spyzie to monitor your partner, you may be able to find out if they are cheating, yes. This is what many people around the world do.
            This may not be legal in your country, however. Disclaimer: Spyzie is only for legal use.</p >
        </div>
      )}
    </>
  );
};

export default GetStarted;
