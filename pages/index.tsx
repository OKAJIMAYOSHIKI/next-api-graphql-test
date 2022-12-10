import type { GetServerSideProps, NextPage } from "next";

import {useState,useEffect} from 'react'
import { User } from "./api/users";

type Data = {
  users: User[]
}

const Home: NextPage<Data> = ({ users }) => {

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/users')
  const data: Data = await response.json()
  return { props: data}
}
