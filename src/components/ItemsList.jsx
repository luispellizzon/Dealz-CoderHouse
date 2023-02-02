import Item from "./Item";

const ItemsList =({productCategory})=>{
    return (
        /*List for Each Category*/
        <div className="mt-2 mb-5 border-2 border-black">
            {/*Each Title From Each Category*/}
            <div className="font-bold">
                <h1>{productCategory.title}</h1>
            </div>

            {/*Each Item From Each Category*/}
            {productCategory.items.map((product)=>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
        
    )
}

export default ItemsList;