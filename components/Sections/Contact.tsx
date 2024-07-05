import Link from "next/link"
import { CONTACTS } from "../../constants/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" w-full min-h-[85vh]  py-10 "
    >
      <h2 className="font-[500] text-5xl pb-6">
        Let&apos;s Link Up
      </h2>
      {/* <p className='text-2xl'>Want to send me a message reach out on my socials</p> */}
      <div className="flex flex-wrap gap-8 my-10 px-4 " >
        {
          CONTACTS.map(contact => {
            const { link, color } = contact
            return (
              <Link
                key={link}
                href={link}
                className={`text-5xl ${color}`}
              >
                <contact.icon />
              </Link>
            )
          })
        }
      </div>
    </section>
  );
};

export default Contact;
// https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here
