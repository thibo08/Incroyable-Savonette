function scrollToID(id) {
    const elem = document.querySelector(id);
    elem.scrollIntoView({ behavior: 'smooth' });
}

// Turtle
window.addEventListener('load', () => {
    const turtle = document.querySelector('.tortue-little');
    console.log(turtle);
    requestAnimationFrame(animate);
    let x = 0;
    function animate(t) {
        x--;
        if (x < -1000) x = 0;
        turtle.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }
});
