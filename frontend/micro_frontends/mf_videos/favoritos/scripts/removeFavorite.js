export const getFavs = (idFav) => {
    const storedVideosJSON = localStorage.getItem('videoFavs');
    console.log('Favs salvos', storedVideosJSON);
};
