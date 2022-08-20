const stick3 = document.getElementsByClassName('stick3')[0]
const stick2 = document.getElementsByClassName('color')[0]
const stick1 = document.getElementsByClassName('stick1')[0]
const lines = document.getElementsByClassName('lines')[0]
const color1 = document.getElementsByClassName('color1')[0]

const generateLines = () => {
    for (let i = 0; i <= 50; i++) {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        var randomWidth = Math.floor(Math.random() * 7 + i)
        var randomNum = Math.floor(Math.random() * 7 )

        var elem = document.createElement('div');
        elem.style.position = 'relative'
        elem.style.zIndex = 0
        elem.style.backgroundColor = randomColor === '#000000' ? 'white' : randomColor;
        elem.style.width = randomNum + 'px';
        elem.className = "line";
        lines.appendChild(elem);
    }

}

setTimeout(() => {
    stick3.style.animation = 'stick-reverse 1s ease-in forwards'
}, 4000);

setTimeout(() => {
    stick2.style.animation = 'stick-reverse 1s ease-in forwards'
}, 5000);

setTimeout(() => {
    stick1.style.animation = 'stick-change 1s ease forwards'
    lines.style.animation = 'c-change 1s ease forwards'
    color1.style.animation = 'opacity 1s ease forwards'
    generateLines()
}, 6000)


