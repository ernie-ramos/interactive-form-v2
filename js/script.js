
// Use JavaScript to select the 'Name' input element and place focus on it.
const name = document.getElementById('name');
name.focus();

// Target the ‘Other’ input field, and hide it initially, so that it will
// display if JavaScript is disabled, but be hidden initially with JS.
const otherJobRole = document.getElementById('other-title');
otherJobRole.style.display = 'none';

// When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
// clear to the user that they need to select a theme before selecting a color.

// Hide the “Select Theme” `option` element in the “Design” menu.
const colors = document.getElementById('colors-js-puns');
colors.style.display = 'none';

const design = document.getElementById('design');
design.addEventListener('click', (e) => {
  const options = document.querySelectorAll('#design option');
  console.log(options);
})
