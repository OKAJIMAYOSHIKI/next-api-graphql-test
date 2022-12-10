import type { NextApiRequest, NextApiResponse } from "next";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { User } from ".";

type Data = {
  id: User['id']
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (typeof req.query.id !== 'string') {
      res.status(400).json({ message: 'Bad Request' })
    }
    res.status(200).json({ id: req.query.id  })
}