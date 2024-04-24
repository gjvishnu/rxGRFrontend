import { client } from '../lib/graphQL_client'
import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
 
 

const createUser = gql`
mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
    }
  }
`;

export async function loader() {
  try {
    const create = {
      email: 'createthree@example.com',
      name: 'vzx'
    };

    const res = await client.request(createUser, {
      input: create
    });

    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return 'errrrrr';
  }
}

export default function GqlCreate() {
   const data = useLoaderData()
  return (
    <>
     <h1>GQL create</h1>
     <h1>ID :{data.createUser.id}</h1>
    <h1>Name :{data.createUser.name}</h1>
    <h1>Email :{data.createUser.email}</h1>
    </>
  );
}
