import './menu.css';

document.querySelector<HTMLDivElement>('.menu')!.innerHTML = `
  <div id="header">
    <button class="closeButton">
        <img src="/x.svg" alt="close">
    </button>
  </div>
  
  <ul>
    <li>
        <a href="http://google.com">Google</a>
    </li>
    <li>
        <a href="http://duckduckgo.com">DuckDuckGo</a>
    </li>
    <li>
        <a href="http://facebook.com">Facebook</a>
    </li>
  </ul>
`;

const menu = document.querySelector('.menu') as HTMLDivElement;
document.querySelector('.burgerButton')!.addEventListener('click', () => {
  menu.classList.toggle('menuOpen');
});

document.querySelector('.closeButton')!.addEventListener('click', () => {
  menu.classList.toggle('menuOpen');
});
