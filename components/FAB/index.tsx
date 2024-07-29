import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

const FAB: FC<{ title: string; icon: ReactNode }> = ({ title, icon }) => {
  // const router = useRouter();
  const goToContact = () => {
    window.open("https://www.buymeacoffee.com/prince_owusu", '_blank');
  };
  return (
    <button
      className="fixed flex items-center justify-center px-6 bottom-4 right-4 m-4 md:m-10 cursor-pointer p-3 text-xl rounded-3xl gradient-bg font-bold z-[20]"
      onClick={goToContact}
    >
      <span>{icon}</span>
      <p>{title}</p>
    </button>
  );
};

export default FAB;
