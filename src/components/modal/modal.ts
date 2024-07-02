import './modal.css';

document.querySelector<HTMLDivElement>('.modal')!.innerHTML = `
  <div>
    <h1>Unlock video</h1>
    <p>Enter your telephone number – you'll receive a PIN</p>
    
    <div class="inputContainer"></div>
  </div>
`;
