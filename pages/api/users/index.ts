// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from 'sqlite3';

/***
 * ### テーブル構成
 * ```
 * id INTEGER PRIMARY KEY AUTOINCREMENT,
 * email text NOT NULL UNIQUE,
 * name text NOT NULL
 * ```
 */
export type User = {
  id: number
  name: string
  email: `${string}@${string}`
}

export type UserApi = {
  message: string
  body?: {
    users: User[]
  }
}

const selectAll = <T>(db: sqlite3.Database, query: string) => {
  return new Promise<T>((resolve, reject) => {
    db.all(query, (err: Error, rows: T) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserApi>) {
  const db = new sqlite3.Database('./database.sqlite');
  const users = await selectAll<User[]>(db, 'select * from users');
  db.close();
  const data = {
    message: 'Success',
    body: { users }
  }
  res.status(200).json(data);
}
