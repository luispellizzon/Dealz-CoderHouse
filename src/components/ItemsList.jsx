import Item from "./Item";

const ItemsList =({productCategory})=>{
    return (
        <div className="mt-2 mb-5 border-2 border-black">
            {/*List for Each Product Category*/}
            <div className="font-bold">
                <h1>{productCategory.title}</h1>
            </div>

            {/*Each Item from the Category*/}
            {productCategory.items.map((product)=>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
        
    )
}

export default ItemsList;