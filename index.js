const festStart = dayjs('2023-10-13');
const festEnd = dayjs('2023-10-15');
const now = dayjs();
const isBeforeFest = now.isBefore(festStart);
const isAfterFest = now.isAfter(festEnd);

const msgEl = document.querySelector('#days');

if (isBeforeFest) {
    msgEl.textContent = 'Fest už je brzy!'
} else if (isAfterFest) {
    msgEl.textContent = 'Fest už je pryč!'
} else {
    msgEl.textContent = 'Fest jde!'
}