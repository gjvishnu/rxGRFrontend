
export default function Products({loaderdata}){
    
    return(
      <>
      <div className="productsMain mt-5 px-5">
        <div className="grid grid-cols-4 gap-4">
          {loaderdata.map((product) => (
            <div key={product.id} className="p-4  flex justify-center items-center">
              <div className="card  ">
                <img key={product.id} src={product.image} alt={product.name} />
                <h3 key={product.id}>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    )
}