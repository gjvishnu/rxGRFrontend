import { client } from '../lib/graphQL_client'
import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
 

const read = gql`
query {
    allUsers {
      name
      email
      id
    }
  }
`;

export async function loader() {
  try {
 
    const res = await client.request(read);

    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return 'errrrrr';
  }
}

export default function Gqlread() {
   const data = useLoaderData()
   console.log(data);
   
  return (
    <>
     <h1>GQL Read</h1>
       {data.allUsers.map((e)=>(
        <h1>{e.name}</h1>
       ))}
     </>
  );
}
