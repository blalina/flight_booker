const tripTypeSelect = document.querySelector('.js-trip-type__select');
const tripWhenInput = document.querySelector('.js-trip-type__input-when');
const tripBackInput = document.querySelector('.js-trip-type__input-back');
const tripButton = document.querySelector('.js-trip-type__button-book');

const modal = document.querySelector('.js-modal');
const overlay = document.querySelector('.js-overlay');
const closeButton = document.querySelector('.js-modal-close');
const modalText = document.querySelector('.js-modal__text');

tripWhenInput.valueAsDate = new Date();
tripBackInput.valueAsDate = new Date();

tripTypeSelect.addEventListener('input', () => {
  if (tripTypeSelect.value === 'return') {
    tripBackInput.disabled = false;
  } else {
    tripBackInput.disabled = true;
  }
});

tripBackInput.addEventListener('input', () => {
  if (tripBackInput.value < tripWhenInput.value) {
    tripButton.disabled = true;
  } else {
    tripButton.disabled = false;
  }
});

tripButton.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
  if (tripTypeSelect.value === 'one-way') {
    modalText.innerHTML = `You have booked a one-way flight on ${tripWhenInput.value}`;
  } else {
    modalText.innerHTML = `You have booked a flight on ${tripWhenInput.value} with a return flight to ${tripBackInput.value}`;
  }
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
