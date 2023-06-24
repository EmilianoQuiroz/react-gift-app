// Importamos el UseState
import { useState } from "react";
// Componente para agregar categorias
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {    
// Categorias
const [categories, setCategories] = useState(['One Punch', 'One Piece']);
// Agregar nueva categoria
const OnAddCategory = () => {
    setCategories([...categories, 'Dragon Ball'])
}
console.log(categories);

return (
    <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>
        {/* Input */}
        <AddCategory />

        {/* Boton para agregar nueva categoria */}
        <button onClick={OnAddCategory}>Agregar Categoria</button>
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
