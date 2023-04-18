window.onload = () => {

    const setBackgroundColor = (color) => {
        const paragram = document.querySelector('.content');
        paragram.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    };

    // return the color of the button selected
    const backgroundColorBTN = document.querySelectorAll('#background-color>button');
    for (let i = 0; i < backgroundColorBTN.length; i += 1) {
        backgroundColorBTN[i].addEventListener('click', (event) => {
        setBackgroundColor(event.target.innerHTML);
    });
    }

    const initialize = () => {
        let backgroundColor = localStorage.getItem("backgroundColor")
        if (backgroundColor) setBackgroundColor(backgroundColor);
    }
    initialize();
}