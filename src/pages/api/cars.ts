import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!API_URL) {
    res.status(500).json({ error: 'API URL not configured' });
    return;
  }

  try {
    const response = await axios.get(API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
