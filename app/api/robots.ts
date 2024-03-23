import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(`User-agent: *\n`);
    res.write(`Disallow: /admin\n`);
    res.write(`Disallow: /private\n`);
    res.end();
}