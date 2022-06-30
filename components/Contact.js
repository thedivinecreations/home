import Insta from "../public/instagram.png";
import Mail from "../public/mail.png";
import Call from "../public/call.png";
import Linkdin from "../public/linkdin.png";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col justify-around w-full space-y-16 md:flex-row md:space-y-0">
      <div className="flex flex-col items-center space-y-16">
        <div className="flex items-center justify-center space-x-8">
          <Image src={Mail} height={50} width={50} />
          <Link href="mailto:deepkarancreations@gmail.com">
            deepkarancreations@gmail.com
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-8">
          <Image src={Call} height={50} width={50} />
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
      <div className="flex flex-col items-center space-y-16">
        <div className="flex items-center justify-center space-x-8">
          <Image src={Insta} height={50} width={50} />
          <Link href="https://www.instagram.com/the.divinecreations/">
            <a target="_blank">Deepkarancreations</a>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-8">
          <Image src={Linkdin} height={50} width={50} />
          <Link href="https://www.linkedin.com/in/divinecreations">
            <a target="_blank">Deepkarancreations</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
