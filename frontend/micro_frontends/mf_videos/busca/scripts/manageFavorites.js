export const adicionarFav = (idFav) => {
    const storedVideosJSON = localStorage.getItem('videoFavs');
    let storedVideos = storedVideosJSON ? JSON.parse(storedVideosJSON) : [];
    const videosInfo = document.getElementById(idFav).getAttribute('data-videoinfo');
    if (videosInfo) {
        const videoInfoObj = JSON.parse(videosInfo);
        const index = storedVideos.findIndex(video => video.id === videoInfoObj.id);
        if (index !== -1) {
            storedVideos.splice(index, 1);
            console.log('Vídeo removido dos favoritos:', videoInfoObj);
            localStorage.setItem('videoFavs', JSON.stringify(storedVideos));
            return false;
        }
        else {
            storedVideos.push(videoInfoObj);
            console.log('Novo vídeo favorito adicionado:', videoInfoObj);
            localStorage.setItem('videoFavs', JSON.stringify(storedVideos));
            return true;
        }
    }
    else {
        console.log('Nenhuma informação de vídeo encontrada para adicionar/remover dos favoritos.');
    }
    console.log('Vídeos favoritos atualizados:', storedVideos);
};
