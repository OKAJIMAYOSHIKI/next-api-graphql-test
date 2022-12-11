import type { GetServerSideProps, NextPage } from "next";
import { UserApi } from "./api/users";

const Home: NextPage<UserApi> = ({ message, body }) => {
  console.log('message:', message)
  return (
    <div>
      <ul>
        {body?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/users');
  const data: UserApi = await response.json();

  return { props: data };
}
