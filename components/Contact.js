import Insta from "../public/instagram.png";
import Mail from "../public/mail.png";
import Call from "../public/call.png";
import Linkdin from "../public/linkdin.png";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center pb-32">
      <h1 className=" heading">Contact Us</h1>
      <div className="flex flex-col items-center justify-around w-full space-y-16 text-xl md:flex-row md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-center justify-between w-full space-y-16 text-2xl xl:flex-row xl:space-y-0">
          <div className="flex flex-col items-center mx-4 space-y-16">
            <div className="contactLink">
              <div className="w-8 h-8 md:h-14 md:w-14">
                <Image src={Mail} height="100%" width="100%" />
              </div>
              <Link href="mailto:deepkarancreations@gmail.com">
                deepkarancreations@gmail.com
              </Link>
            </div>
            <div className="contactLink">
              <div className="w-8 h-8 md:h-14 md:w-14">
                <Image src={Call} height="100%" width="100%" alt="call icon" />
              </div>
              <div>
                <Link href="tel:8146501279">
                  <span className="pr-4 mr-4 border-r border-white cursor-pointer">
                    81465-01279
                  </span>
                </Link>
                <Link href="tel:9878009166">
                  <span className="cursor-pointer">98780-09166</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mx-4 space-y-16 pridi">
            <div className="contactLink">
              <div className="w-8 h-8 md:h-14 md:w-14">
                <Image src={Insta} height="100%" width="100%" />
              </div>
              <Link href="https://www.instagram.com/the.divinecreations/">
                <a target="_blank">Deepkarancreations</a>
              </Link>
            </div>
            <div className="contactLink">
              <div className="w-8 h-8 md:h-14 md:w-14">
                <Image src={Linkdin} height="100%" width="100%" />
              </div>
              <Link href="https://www.linkedin.com/in/divinecreations">
                <a target="_blank">Deepkarancreations</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
