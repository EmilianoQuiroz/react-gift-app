// Importamos el UseState
import { useState } from "react";
// Componente para agregar categorias
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {    
// Categorias
const [categories, setCategories] = useState(['One Punch', 'One Piece']);
// Agregar nueva categoria
const onAddCategory = ( newCategory ) => {
    setCategories([newCategory, ...categories]);
    // console.log(newCategory);
    console.log(newCategory);
}   
// console.log(newCategory);

return (
    <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>
        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        <ol>
            { categories.map( category => {
                return <li key={category}> { category } </li>
                }) 
            }
        </ol>
            {/* Gif Item */}
    </>
  )
}
