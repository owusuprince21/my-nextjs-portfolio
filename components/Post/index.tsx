/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import BLOGAPI from "../../pages/api/blogapi";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiChevronRightCircle } from "react-icons/bi";
import Title from "../Title";
import { BallTriangle } from "react-loader-spinner";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// // import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// // import 'react-loading-skeleton/dist/skeleton.css'

// const Post = () => {
//   const [articles, setArticles] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(`${BLOGAPI}`);
//             const data = await response.json();
//             setArticles(data.articles || []);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setLoading(false);
//         }
//     };

//     fetchData();
// }, []);

// if (loading) {
//     return (
//         <>
//           <BallTriangle
//   height={100}
//   width={100}
//   radius={5}
//   color=' #fd746c'
//   ariaLabel="ball-triangle-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
//   />

//         </>
//     )
   
// }
//   return (
//     <div className="mt-6">
//     <Title label="News Around the World" />
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
//         {articles.map((article, index) => (
//             <div key={index} className="border border-gray-200 rounded-lg p-4">
//                     {/* {article.urlToImage && (
//                         <div className="relative h-48">
//                             <Image
//                                 src='https://cdn.vox-cdn.com/thumbor/aY8-8ZSzCvmFkz-0RCbdB0O6VT0=/0x149:1920x930/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/25517132/meta_quest_v67_windows.jpg'
//                             alt={article.title}
//                             width='600'
//                             height='100'

//                                 className="rounded-lg"
//                             />
//                         </div>
//                     )} */}
//                     <h2 className="text-xl font-bold mt-2">Topic: {article.title}</h2>
//                 <p className="mt-2">Author: {article.author ? article.author : 'No Author'}</p>
//                 <p className="mt-2">{article.description}</p>
//                 <p className="mt-2">{article.content}</p>
//                 <p className="mt-2">{article.publishedAt}</p>
//                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                     <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
//                         <BiChevronRightCircle size={28}  style={{ marginRight: '8px' }} />
//                         <span className=" font-semibold">Read More</span>
//                     </div>
//                 </a>
//             </div>
//         ))}
//     </div>
// </div>
//   );
// };

// export default Post;

// components/Blog.tsx


interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
}

const Blog: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/blogapi');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
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
    if (error) return <p>Error: {error}</p>;

    const shareArticle = (article: Article) => {
        const text = encodeURIComponent(`${article.title} - ${article.description}`);
        const url = encodeURIComponent(article.url);
        return {
            twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
        };
    };

    return (
        <div className="mt-6">
            <Title label="News Around the World" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
                
                    {articles.map((article, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                            
                            {article.urlToImage && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                            />
                                )}
                                
                            <h2 className="text-2xl font-bold mt-2 p-2">{article.title}</h2>
                            <p className="">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-800 text-sm sm:text-base lg:text-lg font-semibold"
                            >Read more</a>
                                
                            <div className="mt-4 flex space-x-4">
                                Share 
                            <a
                                href={shareArticle(article).twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 text-white bg-black hover:bg-blue-500 px-3 py-1 rounded-md text-sm"
                            >
                                <FaXTwitter size={20}/>
                            </a>
                            <a
                                href={shareArticle(article).facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md text-sm"
                            >
                                <FaFacebook  size={20}/>
                            </a>
                            <a
                                href={shareArticle(article).linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-blue-800 hover:bg-blue-900 px-2 py-1 rounded-md text-sm"
                            >
                                <FaLinkedin size={20}  />
                            </a>
                        </div>
                        </div>
                    ))}
                
            </div>
        </div>
    );
};

export default Blog;
