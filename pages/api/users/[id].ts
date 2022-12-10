import type { NextApiRequest, NextApiResponse } from "next";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { User } from ".";

type Data = {
  message: string
  body?: {
    id: User['id']
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const id = req.query.id
    if (typeof id !== 'string') {
      return res.status(400).json({ message: 'Bad Request' })
    }
    res.status(200).json({
      message: 'Success',
      body: {
        id: +id
      }
    })
}