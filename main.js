const alphabet_box = document.querySelector('.alphabet_box')
const lettersArray = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
for (let i = 0; i < lettersArray.length; i++) {
    const element = lettersArray[i];
    const elem = document.createElement("div");
    elem.classList.add("letter");
    elem.textContent = element;
    alphabet_box.appendChild(elem);
}
// body.appendChild(elem)