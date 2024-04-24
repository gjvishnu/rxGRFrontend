import type { MetaFunction } from "@remix-run/node";
import {client} from '../lib/graphQL_client'
import {gql} from 'graphql-request'
import { useLoaderData } from '@remix-run/react'
import Home from "~/components/home";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
 
// const {products} = await client.request(GET_CHAR)
  //  return products

const GET_CHAR = gql`
query{
  products{
    name
    image
  }
}
`

export async function loader(){
  try{
    const [response , {products}] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),client.request(GET_CHAR)])
    return {products,response}
  }
      catch(e){
        return 'errrrrror'
      }
  }
  
 
export default function Index() {
  const {products,response} =  useLoaderData()
  console.log(products);
  
  return (
 <>
 <Home loaderdata={products}/>
 </>
  )
}
