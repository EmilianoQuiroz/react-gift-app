//Importamos el UseState
import { useState } from "react";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch', 'One Piece']);

console.log(categories);

return (
    <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>
        {/* Input */}

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
