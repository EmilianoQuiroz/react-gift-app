import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {    
// Categorias
const [categories, setCategories] = useState(['One Punch', 'One Piece']);

// Agregar nueva categoria
const onAddCategory = ( newCategory ) => {
    //Validamos que la categoria se unica
    if ( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
}   

return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        { categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }/> 
            ))
        }

    </>
  )
}
