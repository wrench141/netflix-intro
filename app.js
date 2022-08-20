const brush = document.getElementsByClassName('brush')[0]
const lines = document.getElementsByClassName('lines')[0]

const stick1 = document.getElementsByClassName('color2')[0]
const stick2 = document.getElementsByClassName('brush3')[0]
const stick3 = document.getElementsByClassName('color')[0]

setTimeout(() => {
    stick1.style.animation = 'movedown 0.5s ease forwards'
}, 3000)

setTimeout(() => {
    stick2.style.animation = 'movedown 0.5s ease forwards'
}, 3500)

setTimeout(() => {
    stick3.style.animation = 'opacity 0.5s linear infinite'
    lines.style.display = 'flex'
}, 4000)

const colorArray = [
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


colorArray.map((color) => {
    const elem = document.createElement('div');
    const randomWidth = Math.floor(Math.random() * 1000);
    elem.className = 'line';
    elem.style.setProperty('--m', `${randomWidth}px`)
    elem.style.setProperty('--c', `${color}`)
    lines.appendChild(elem)
})


