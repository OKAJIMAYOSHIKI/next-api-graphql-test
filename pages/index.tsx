import type { GetServerSideProps, NextPage } from "next";

import {useState,useEffect} from 'react'
import { User } from "./api/users";

type Data = {
  users: User[]
}

const Home: NextPage<Data> = ({ users }) => {
  useEffect(() => {
    const postData = async () => {
      await fetch('/api/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'John' }),
      });
    };
    postData();
  }, []);

  return (
    <div>
      <h1>ユーザ</h1>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/users')
  const data: Data = await response.json()
  return { props: data}
}
