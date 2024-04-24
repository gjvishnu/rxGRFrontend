import Header from "./header";
import Products from "./products";

export default function Home({loaderdata}){

     
    return(
        <>
        <Header/>
        <Products loaderdata={loaderdata}/>
        </>
    )
}