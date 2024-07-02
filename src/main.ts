const button = document.querySelector<HTMLButtonElement>('.playButton');
const modal = document.querySelector<HTMLDivElement>('.modal');

button!.addEventListener('click', () => {
  modal!.classList.toggle('open');
});
