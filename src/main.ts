const button = document.querySelector('.playButton') as HTMLButtonElement;
const modal = document.querySelector('.modal') as HTMLDivElement;

function toggleModal() {
  if (!modal.classList.contains('open')) {
    modal.classList.toggle('open');
  }
}

button.addEventListener('click', () => {
  toggleModal();
});
