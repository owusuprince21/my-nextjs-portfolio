import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import { CONTACTS } from "../../constants/contact";

const Footer = () => {
  return (
    <footer className="pt-6 bg-b lg:px-10 text-[18px] md:text-xl">
      <section className="mx-auto grid h-full min-h-[200px]  justify-between gap-6 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-0">
        <section className={"flex lg:items-center flex-col"}>
          <div className="flex-1">
            <div className="w-[150px] mb-4">
              <Logo />
            </div>
            <p className="my-4">Want to build something cool?</p>
            <div className="flex gap-6 pb-4">
              {CONTACTS.map((contact, index) => {
                return (
                  <Link key={index} href={contact.link}>
                    <contact.icon size={28} />
                  </Link>
                );
              })}
            </div>
            <p className="mt-4">powusu050@gmail.com</p>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="lg:mx-auto lg:w-[200px]">
            <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
              Quick links
            </h3>
            <div className="mt-4 flex flex-col gap-3 capitalize">
              <Link href="/about">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Projects</Link>
            </div>
          </div>
        </section>
        <section className="flex lg:items-center flex-col">
          <div className="lg:mx-auto lg:w-[200px]">
            <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
              important links
            </h3>
            <div className="mt-4 flex flex-col gap-3 capitalize">
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </section>
      </section>
      <div className="sm:text-md mx-auto mt-10 flex-col  flex h-20 items-start px-5 md:items-center justify-center md:justify-between border-t text-sm border-gray-500 md:text-lg lg:text-xl">
        <span>
          Copyright © {new Date().getFullYear()} |{" "}
          <span className="gradient-text">Portfolio Website</span>
        </span>
        <span>
          Designed By{" "}
          <Link href="#" className="gradient-text">
           owusu_prince
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
