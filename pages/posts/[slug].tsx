// pages/posts/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';

interface PostProps {
    post: {
        title: string;
        content: string;
    };
}

export default function Post({ post }: PostProps) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { slug: 'post-1' } },
        { params: { slug: 'post-2' } },
    ];
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = {
        title: `Title for ${params?.slug}`,
        content: `Content for ${params?.slug}`,
    };
    return { props: { post } };
};
