var animationData = {
    container:document.getElementById('aboutMeBm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path: 'JS/aboutIconAnim.json'
};

var animation = lottie.loadAnimation(animationData);

function animate () {
    animation.paly();
};
