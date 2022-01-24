const wrapper = document.querySelectorAll('.progress');

const barCount = 50;
const percent1 = 50 * 90/100;
const percent2 = 50 * 60/100;
const percent3 = 50 * 30/100;

for (let index = 0; index < barCount; index++) {
    const className = index < percent1 ? 'selected1' : '';
    wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[0].innerHTML += `<p class="selected percent-text text1">90%</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent2 ? 'selected2' : '';
    wrapper[1].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[1].innerHTML += `<p class="selected percent-text text2">60%</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent3 ? 'selected3' : '';
    wrapper[2].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[2].innerHTML += `<p class="selected percent-text text3">30%</p>`