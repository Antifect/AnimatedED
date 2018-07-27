var animation;

var animationData = {
    container:document.getElementById('edLogoAnimBm'),
    renderer:'svg',
    loop:false,
    autoplay:true,
    path: 'JS/edLogoAnim.json'
};

animation = bodymovin.loadAnimation(animationData);

var x = document.getElementById('home');
x.addEventListener('click', animate);

function animate() {
    animation.goToAndPlay(1, true);
}
