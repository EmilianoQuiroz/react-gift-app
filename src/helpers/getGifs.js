export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CQHPXRjqrmj2G3IvhaiyZmX1VyI2HC4T&q=${ category }&limit=30`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}