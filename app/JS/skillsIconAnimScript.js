var animationData = {
    container:document.getElementById('skillsBm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path: 'JS/skillsIconAnim.json'
};

var animation = lottie.loadAnimation(animationData);

function animate () {
    animation.paly();
};
