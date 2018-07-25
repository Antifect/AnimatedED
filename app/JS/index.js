var animation = bodymovin.loadAnimation ({
     container:document.getElementById('aboutMeBm'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path: 'JS/aboutIconAnim.json'
});

bodymovin.loadAnimation({
container:document.getElementById('skillsBM'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'JS/skillsIconAnim.json'
})
