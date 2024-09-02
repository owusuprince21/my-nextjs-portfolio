// pages/api/blogapi.ts

import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function BLOGAPI(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
       return res.status(405).json({error: "Method Not Allowed"})
    }
    
    const apiKey = process.env.API_KEY;
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`External API Error: ${response.statusText}`);
        }

        const data = await response.json();
        res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=300');  // Example of client-side caching
        res.status(200).json(data);
    } catch {
        console.error(`Error fetching data:, ${error}`);
        res.status(500).json({error: 'Error fetching data'})
    }
}
