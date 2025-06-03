import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        // ...other frame properties...
        thumbnail: "https://basedwhere.world/thumbnail.png"
    });
}