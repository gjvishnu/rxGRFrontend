 import { client } from '../lib/graphQL_client'
import { gql } from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
 
 

const GET_CHAR = gql`
  query {
    products {
      name
      image
      id
    }
  }
`;

 
const updateUser = gql`
  mutation update($input: UpdateUserInput!) {
    updateUserInput(input: $input) {
      id
      email
      name
    }
  }
`;

export async function loader() {
  try {
    const updateUserInput = {
      email: 'test1@example.com',
      name: 'vzx'
    };

    const res = await client.request(updateUser, {
      input: updateUserInput
    });

    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return 'errrrrr';
  }
}

export default function Gqlupdate() {
   const data = useLoaderData()
   console.log(data);
   
  return (
    <>
     <h1>GQL Update</h1>
    <h1>ID :{data.updateUserInput.id}</h1>
    <h1>Name :{data.updateUserInput.name}</h1>
    <h1>Email :{data.updateUserInput.email}</h1>

     </>
  );
}
