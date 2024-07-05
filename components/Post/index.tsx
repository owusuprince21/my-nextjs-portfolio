/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BLOGAPI from "../../pages/api/blogapi";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiChevronRightCircle } from "react-icons/bi";
import Title from "../Title";
import { BallTriangle } from "react-loader-spinner";
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

const Post = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/blogapi');
            const data = await response.json();
            setArticles(data.articles);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    fetchData();
}, []);

if (loading) {
    return (
        <>
          <BallTriangle
  height={100}
  width={100}
  radius={5}
  color=' #fd746c'
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />

        </>
    )
   
}
  return (
    <div className="mt-6">
    <Title label="News Around the World" />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {articles.map((article: any) => (
            <div key={article.url} className="border border-gray-200 rounded-lg p-4">
                    {/* {article.urlToImage && (
                        <div className="relative h-48">
                            <Image
                                src='https://cdn.vox-cdn.com/thumbor/aY8-8ZSzCvmFkz-0RCbdB0O6VT0=/0x149:1920x930/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/25517132/meta_quest_v67_windows.jpg'
                            alt={article.title}
                            width='600'
                            height='100'

                                className="rounded-lg"
                            />
                        </div>
                    )} */}
                    <h2 className="text-xl font-bold mt-2">Topic: {article.title}</h2>
                <p className="mt-2">Author: {article.author ? article.author : 'No Author'}</p>
                <p className="mt-2">{article.description}</p>
                <p className="mt-2">{article.content}</p>
                <p className="mt-2">{article.publishedAt}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <BiChevronRightCircle size={28}  style={{ marginRight: '8px' }} />
                        <span className=" font-semibold">Read More</span>
                    </div>
                </a>
            </div>
        ))}
    </div>
</div>
  );
};

export default Post;
