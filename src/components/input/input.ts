import './input.css';

document.querySelector('.inputContainer')!.innerHTML = `
  <div class="country-code">+971</div>
  <input type="tel" id="msisdn" maxlength="9" placeholder="_ _ _ _ _ _ _ _ _ _">
`;

const msisdnInput = document.getElementById('msisdn') as HTMLInputElement;

msisdnInput.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  const input = target.value;
  if (!/^\d*$/.test(input)) {
    target.value = input.slice(0, -1);
  }
});
