import CategoryItemList from "./CategoryItemList";
import SHOP_DATA from "../shopitems-data";

const CategoryListContainer =()=>{
    const categories = [
        {
          id: 1,
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "Women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          id: 5,
          title: "Men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
      ];
    
      return (
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 md:gap-2 sm:flex-row sm:flex-wrap uppercase">
          {categories.map((category) => (
            <CategoryItemList
              key={category.id}
              categoryName={category.title}
              id={category.id}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      );

};

export default CategoryListContainer;