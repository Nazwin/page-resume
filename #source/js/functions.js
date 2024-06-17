let str = "Hello, World!";
const out = document.querySelector('p[data-typing-text]');
str = out.textContent;
out.textContent = '';

let position = 0;

const typeText = () => {
    if (position === str.length) {
        return;
    }
    const v = getRandomInt(1, 100);
    if (v > 90 && position !== 0) {
        out.textContent += str[getRandomInt(0, str.length - 2)];
        setTimeout(removeLastChar, 1000)
    } else {
        out.textContent += str[position];
        position++;
        setTimeout(typeText, getRandomInt());
    }
}

const removeLastChar = () => {
    out.textContent = out.textContent.substring(0, position);
    setTimeout(typeText, getRandomInt());

}

function getRandomInt(min = 50, max = 500) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}