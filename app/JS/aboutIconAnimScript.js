var animationData = {
    container:document.getElementById('aboutMeBm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path: 'JS/aboutIconAnim.json'
};

var animation = bodymovin.loadAnimation(animationData);

function animate () {
    animation.paly();
};
