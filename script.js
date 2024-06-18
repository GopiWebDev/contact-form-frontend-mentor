// form element
const form = document.querySelector('[data-form]');
// all essential input elements
const firstNameInput = document.querySelector('[data-first-name]');
const lastNameInput = document.querySelector('[data-last-name]');
const emailInput = document.querySelector('[data-email]');
const generalQuery = document.querySelector('[data-general]');
const supportQuery = document.querySelector('[data-support]');
const messageInput = document.querySelector('[data-message]');
const consentCheckbox = document.querySelector('[data-checkbox]');
const successMessage = document.querySelector('[data-success-message]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFirstName();
  checkLastName();
  checkEmail();
  checkQuery();
  checkMessage();
  checkConsent();
  if (
    firstNameInput.value !== '' &&
    lastNameInput.value !== '' &&
    emailInput.value !== '' &&
    (generalQuery.checked !== false || supportQuery.checked !== false) &&
    messageInput.value !== '' &&
    consentCheckbox.checked !== false
  ) {
    successMessage.style.top = '1%';
  } else {
    {
      successMessage.style.top = '-100%';
    }
  }
});

function checkFirstName() {
  if (firstNameInput.value === '' || firstNameInput.value == null) {
    document.querySelector('[data-first-name-error]').innerText =
      'This field is required';
    firstNameInput.style.border = '2px solid hsl(0, 66%, 54%)';
  } else {
    document.querySelector('[data-first-name-error]').innerText = '';
    firstNameInput.style.border = '2px solid hsl(169, 82%, 27%)';
  }
}

function checkLastName() {
  if (lastNameInput.value === '' || lastNameInput.value == null) {
    document.querySelector('[data-last-name-error]').innerText =
      'This field is required';
    lastNameInput.style.border = '2px solid hsl(0, 66%, 54%)';
  } else {
    document.querySelector('[data-last-name-error]').innerText = '';
    lastNameInput.style.border = '2px solid hsl(169, 82%, 27%)';
  }
}

function checkEmail() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailInput.value.match(validRegex)) {
    document.querySelector('[data-email-error]').innerText =
      'Please enter a valid email address';
    emailInput.style.border = '2px solid hsl(0, 66%, 54%)';
  } else {
    document.querySelector('[data-email-error]').innerText = '';
    emailInput.style.border = '2px solid hsl(169, 82%, 27%)';
  }
}

function checkQuery() {
  if (generalQuery.checked === false && supportQuery.checked === false) {
    document.querySelector('[data-query-error]').innerText =
      'Please select a query type';
  } else {
    document.querySelector('[data-query-error]').innerText = '';
  }
}

function checkMessage() {
  if (messageInput.value === '' || messageInput.value == null) {
    document.querySelector('[data-message-error]').innerText =
      'This field is required';
    messageInput.style.border = '2px solid hsl(0, 66%, 54%)';
  } else {
    document.querySelector('[data-message-error]').innerText = '';
    messageInput.style.border = '2px solid hsl(169, 82%, 27%)';
  }
}

function checkConsent() {
  if (consentCheckbox.checked === false) {
    document.querySelector('[data-consent-error]').innerText =
      'To submit this form, please consent to being consented';
  } else {
    document.querySelector('[data-consent-error]').innerText = '';
  }
}

const queryBox = document.querySelector('.query');
const generalQueryClass = document.querySelector('.general-query');
const supportQueryClass = document.querySelector('.support-query');

queryBox.addEventListener('change', () => {
  if (generalQuery.checked) {
    generalQueryClass.style.backgroundColor = 'hsl(148, 38%, 91%)';
    generalQueryClass.style.border = '2px solid hsl(169, 82%, 27%)';
    supportQueryClass.style.backgroundColor = '';
    supportQueryClass.style.border = '';
  } else if (supportQuery.checked) {
    supportQueryClass.style.backgroundColor = 'hsl(148, 38%, 91%)';
    supportQueryClass.style.border = '2px solid hsl(169, 82%, 27%)';
    generalQueryClass.style.backgroundColor = '';
    generalQueryClass.style.border = '';
  }
});
