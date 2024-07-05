import React, { FC } from "react";
import Head from "next/head";

const BlogMeta: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta title={title} content="" />
    </Head>
  );
};

export default BlogMeta;
