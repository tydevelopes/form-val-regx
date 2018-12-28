const nameEl = document.getElementById('name');
const zipcodeEl = document.getElementById('zipcode');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');

// Form blur event listeners
nameEl.addEventListener('blur', validateName);
zipcodeEl.addEventListener('blur', validateZipcode);
emailEl.addEventListener('blur', validateEmail);
phoneEl.addEventListener('blur', validatePhone);

function validateName() {
  const name = nameEl.value;
  const regex = /^[a-zA-Z]{2,10}$/;

  if (!regex.test(name)) {
    nameEl.classList.add('is-invalid');
  } else {
    nameEl.classList.remove('is-invalid');
  }
}
function validateZipcode() {
  const zipcode = zipcodeEl.value;
  const regex = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regex.test(zipcode)) {
    zipcodeEl.classList.add('is-invalid');
  } else {
    zipcodeEl.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const email = emailEl.value;
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email)) {
    emailEl.classList.add('is-invalid');
  } else {
    emailEl.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const phone = phoneEl.value;
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regex.test(phone)) {
    phoneEl.classList.add('is-invalid');
  } else {
    phoneEl.classList.remove('is-invalid');
  }
}


/**
 * REGULAR EXPRESSION LESSON
 * let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxydjekdj';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
 */