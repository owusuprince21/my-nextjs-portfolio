// pages/api/blogapi.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function BLOGAPI(req: NextApiRequest, res: NextApiResponse) {
    const apikey = process.env.API_KEY;
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-04&sortBy=publishedAt&apiKey=${apikey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}
