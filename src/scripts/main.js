'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((i) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.textContent = i.name;

  if (i.id) {
    newLabel.setAttribute('for', i.id);
  }

  const capitalizedName = i.name.charAt(0).toUpperCase() + i.name.substring(1);

  i.setAttribute('placeholder', capitalizedName);

  i.before(newLabel);
});
