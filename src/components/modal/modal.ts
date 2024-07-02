import './modal.css';

document.querySelector<HTMLDivElement>('.modal')!.innerHTML = `
  <div>
    <h1>Unlock video</h1>
    <p>Enter your telephone number – you'll receive a PIN</p>
    
    <div class="inputContainer">
        <div class="country-code">+971</div>
        <input type="tel" id="msisdn" maxlength="9" placeholder="_ _ _ _ _ _ _ _ _ _">
    </div>
    
    <button>
        <span>continue</span>
        <br>
        <span>to subscribe with pin</span>   
    </button>
    
    <p>price</p>
  </div>
`;

const msisdnInput = document.getElementById('msisdn') as HTMLInputElement;
msisdnInput.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  const input = target.value;
  if (!/^\d*$/.test(input)) {
    target.value = input.slice(0, -1);
  }
});
