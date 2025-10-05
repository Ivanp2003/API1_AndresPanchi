const obtenerMemes = async () => {//async precede a una función, indicando que esta siempre devolverá una Promesa. 
    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 

    const request = await fetch("https://api.imgflip.com/get_memes"); /*(fetch) Función para realizar una peticion a una API, y se coloca el enlace de la API a consumir*/

    const respuesta = await request.json(); //await se usa dentro de una función async para pausar la ejecución de esa función hasta que la Promesa se resuelva o se rechace
    

    respuesta.data.memes.slice(0, 15).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url; 
        memesContainers.appendChild(newMemeCard);
    });
    memeTemplate.remove();

};

obtenerMemes();
