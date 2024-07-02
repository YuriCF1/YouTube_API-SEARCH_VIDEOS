export const getFavs = (idFav?: string) => {
    const storedVideosJSON = localStorage.getItem('videoFavs');
    console.log('Favs salvos', storedVideosJSON);
};
