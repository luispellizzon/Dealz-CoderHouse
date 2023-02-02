import CategoryItemList from "./CategoryItemList";
import CATEGORY_DATA from "../data/categoryItems-data";

const CategoryListContainer =()=>{
      return (
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 md:gap-2 sm:flex-row sm:flex-wrap uppercase">
          {CATEGORY_DATA.map((category) => (
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