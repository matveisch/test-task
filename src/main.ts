import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      legalText: 'Legal text',
      google: 'Google',
      duckduckgo: 'DuckDuckGo',
      facebook: 'Facebook',
      footer: 'Some text in the footer',

      unlockVideo: 'Unlock video',
      enterPhoneNumber: "Enter your telephone number – you'll receive a PIN",
      errorMessage: 'Please enter a valid 9-digit phone number.',
      continue: 'continue',
      subscribeWithPin: 'to subscribe with pin',
      price: 'price',
    },
  },
  ar: {
    translation: {
      legalText: 'نص قانوني',
      google: 'جوجل',
      duckduckgo: 'دك دك جو',
      facebook: 'فيسبوك',
      footer: 'بعض النصوص في التذييل',

      unlockVideo: 'افتح الفيديو',
      enterPhoneNumber: 'أدخل رقم هاتفك - ستتلقى رمز PIN',
      errorMessage: 'يرجى إدخال رقم هاتف مكون من 9 أرقام صالح.',
      continue: 'استمر',
      subscribeWithPin: 'للاشتراك باستخدام الرمز',
      price: 'السعر',
    },
  },
};

i18next.init(
  {
    lng: 'en',
    debug: false,
    resources,
  },
  function (err) {
    if (err) return console.error(err);
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll<HTMLElement>('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (key) {
      element.textContent = i18next.t(key);
    }
  });
}

document.querySelectorAll<HTMLButtonElement>('.languageButtons button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement;
    const selectedLanguage = target.getAttribute('data-lang');
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage, updateContent).then(() => {
        if (selectedLanguage === 'ar') {
          document.querySelector<HTMLDivElement>('.modal')!.style.direction = 'rtl';

          const input = document.getElementById('msisdn') as HTMLInputElement;
          input.style.direction = 'rtl';
        } else {
          document.querySelector<HTMLDivElement>('.modal')!.style.direction = 'ltr';

          const input = document.getElementById('msisdn') as HTMLInputElement;
          input.style.direction = 'ltr';
        }
      });
    }
  });
});
