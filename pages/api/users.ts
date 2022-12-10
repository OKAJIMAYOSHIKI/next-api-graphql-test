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
  users: User[]
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users: User[] = await response.json()
  res.status(200).json({ users })
}
