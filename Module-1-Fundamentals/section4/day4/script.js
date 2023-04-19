window.onload = () => {

    const setBackgroundColor = (color) => {
        const paragram = document.querySelector('.content');
        paragram.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    };
    
    const setTextColor = (color) => {
        const fontColor = document.querySelector('.content');
        fontColor.style.color = color;
        localStorage.setItem('fontColor', color);
    };

    const setFontSize = (size) => {
        const fontSize = document.querySelector('.content');
        fontSize.style.fontSize = size;
        localStorage.setItem('fontSize', size);
    };

    const setLinePadding = (padding) => {
            const linePadding = document.querySelector('.content');
            linePadding.style.lineHeight = padding;
            localStorage.setItem('linePadding', padding);
    };
    
    const setFontStyle = (style) => {
            const fontStyle = document.querySelector('.content');
            fontStyle.style.fontFamily = style;
            localStorage.setItem('fontFamily', style);
    };

    // return the color of the button selected
    const backgroundColorBTN = document.querySelectorAll('#background-color>button');
    for (let i = 0; i < backgroundColorBTN.length; i += 1) {
        backgroundColorBTN[i].addEventListener('click', (event) => {
        setBackgroundColor(event.target.innerHTML);
    });
    }

    // return the color of the text to be changed
    const getColorText = document.querySelectorAll('#font-color>button');
    for (let i = 0; i < getColorText.length; i += 1) {
        getColorText[i].addEventListener('click', (event) => {
            setTextColor(event.target.innerHTML);
        })
    }
    
    // return the size of the text to be changed
    const getFontSize = document.querySelectorAll('#font-size>button');
    for (let i = 0; i < getFontSize.length; i += 1) {
        getFontSize[i].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML);
        })
    }
    
    // return the line padding of the text to be changed
    const getLinePadding = document.querySelectorAll('#line-height>button');
    for (let i = 0; i < getLinePadding.length; i += 1) {
        getLinePadding[i].addEventListener('click', (event) => {
            setLinePadding(event.target.innerHTML);
        })
    }
    
    // return the font style of the text to be changed
    const getFontStyle = document.querySelectorAll('#font-family>button');
    for (let i = 0; i < getFontStyle.length; i += 1) {
        getFontStyle[i].addEventListener('click', (event) => {
            setFontStyle(event.target.innerHTML);
        })
    }

    const initialize = () => {
        let backgroundColor = localStorage.getItem("backgroundColor")
        if (backgroundColor) setBackgroundColor(backgroundColor);

        let fontColor = localStorage.getItem('fontColor');
        if (fontColor) setTextColor(fontColor);

        let fontSize = localStorage.getItem('fontSize');
        if (fontSize) setFontSize(fontSize);

        let linePadding = localStorage.getItem('linePadding');
        if (linePadding) setLinePadding(linePadding);
        
        let fontStyle = localStorage.getItem('fontStyle');
        if (fontStyle) setFontStyle(fontStyle);
    }
    initialize();
}