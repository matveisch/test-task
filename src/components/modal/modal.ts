import './modal.css';

document.querySelector<HTMLDivElement>('.modal')!.innerHTML = `
  <div>
    <h1>Unlock video</h1>
    <p>Enter your telephone number – you'll receive a PIN</p>
    
    <form id="phoneForm">
      <div class="inputContainer">
          <div class="countryCode">+971</div>
          <input type="tel" id="msisdn" maxlength="9" placeholder="_ _ _ _ _ _ _ _ _ _">
      </div>
      <div class="errorMessage" id="errorMessage">Please enter a valid 9-digit phone number.</div>
      
      <button type="submit">
          <span>continue</span>
          <br>
          <span>to subscribe with pin</span>   
      </button>
    </form>
    
    
    <p>price</p>
  </div>
`;

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
    // Perform form submission logic here
  }
});
