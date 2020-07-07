// Kung Fu Panda Slideshow / Gallery

let imgPaths = ['po.png', 'crane.png', 'mantis.png', 'monkey.png', 'tigress.png', 'viper.png'];

let imgContainer = document.getElementById('img-container');
for (let i = 0; i < imgPaths.length; i++) {
    imgContainer.innerHTML += '<img src="images/' + imgPaths[i] + '">';
}
