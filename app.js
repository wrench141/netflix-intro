const stick1 = document.getElementsByClassName('color')[0]
const stick2 = document.getElementsByClassName('color2')[0]
const stick3 = document.getElementsByClassName('brush3')[0]
const lines = document.getElementsByClassName('lines')[0]

// make reverse animations trigger
setTimeout(() => {
    stick2.style.animation = 'movedown 0.5s ease forwards'
}, 3000)

setTimeout(() => {
    stick3.style.animation = 'movedown 0.5s ease forwards'
}, 3500)

setTimeout(() => {
    stick1.style.animation = 'opacity 0.5s ease forwards'
    lines.style.display = 'flex'
}, 4000)


// lets create some random lines width random margins or gaps

let colors = [
    '#133286',
    '#3062af',
    '#FFF',
    '#4a7fcb',
    '#133286',
    '#3062af',
    '#628ace',
    '#949fd9',
    '#821e12',
    '#c34821',
    'red',
    '#d3ad94',
    'yellow',
    '#821e12',
    '#462652',
    '#b16f67',
    '#d3ad94',
    '#821e12',
    '#462652',
    '#4a7fcb',
    '#133286',
    '#3062af',
    '#628ace',
    '#b16f67',
    '#d3ad94',
    'yellow',
    '#821e12',
    '#821e12',
    '#c34821',
    '#821e12',
    '#c34821',
    'red',
]

colors.map((color) => {
    const line = document.createElement('div');
    const randomMargin = Math.floor(Math.random() * 1000);

    line.className = 'line';
    line.style.setProperty('--m', `${randomMargin}px`);
    line.style.setProperty('--c', color);
    lines.appendChild(line)
})