import './modal.css';

document.querySelector<HTMLDivElement>('.modal')!.innerHTML = `
  <div>
    <h1 data-translate="unlockVideo">Unlock video</h1>
    <p data-translate="enterPhoneNumber">Enter your telephone number – you'll receive a PIN</p>
    
    <form id="phoneForm">
      <div class="inputContainer">
          <div class="countryCode">+971</div>
          <input type="tel" id="msisdn" maxlength="9" placeholder="_ _ _ _ _ _ _ _ _ _">
      </div>
      <div class="errorMessage" id="errorMessage" data-translate="errorMessage">Please enter a valid 9-digit phone number.</div>
      
      <button type="submit">
          <span data-translate="continue">continue</span>
          <br>
          <span data-translate="subscribeWithPin">to subscribe with pin</span>   
      </button>
    </form>
    
    <p data-translate="price">price</p>
  </div>
`;

const button = document.querySelector('.playButton') as HTMLButtonElement;
const modal = document.querySelector('.modal') as HTMLDivElement;

function toggleModal() {
  if (!modal.classList.contains('open')) {
    setTimeout(() => {
      modal.classList.toggle('open');
    }, 2000);
  }
}

button.addEventListener('click', () => {
  toggleModal();
});

const msisdnInput = document.getElementById('msisdn') as HTMLInputElement;
const form = document.getElementById('phoneForm') as HTMLFormElement;
const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;

msisdnInput.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  const input = target.value;
  if (!/^\d*$/.test(input)) {
    target.value = input.slice(0, -1);
  }
});

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const input = msisdnInput.value;
  if (input.length !== 9) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    alert('Form submitted successfully!');
  }
});
