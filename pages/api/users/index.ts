// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  id: number
  name: string
  username: string
  email: `${string}@${string}`
  address: {
    street: string
    suite: string
    city: string
    zipcode: `${number}-${number}`
    geo: {
      lat: `${number}`
      lng: `${number}`
    }
  }
}

type Data = {
  message: string
  body?: {
    users: User[]
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req
  switch (method) {
    case 'GET':
      const response = await fetch('https://jsonplaceholder.typicode.com/users/')
      const users: User[] = await response.json()
      const data = {
        message: 'Success',
        body: { users }
      }
      res.status(200).json(data)
      break
    case 'POST':
      res.json({ message: 'POSTリクエスト' });
      break;
    case 'PATCH':
      res.json({ message: 'PATCHリクエスト' });
    case 'DELETE':
      res.json({ message: 'DELETEリクエスト' });
    default:
      res.json({ message: 'その他リクエスト' });
  }
}
