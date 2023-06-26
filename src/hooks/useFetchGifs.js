import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState( false )

const getImages = async() => {
    const newImages = await getGifs( category );
        setImages( newImages );
}
    
    useEffect (() =>{
        getImages();
    }, []);

  return {
    images,
    isLoading
    }
}
