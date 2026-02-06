var amountCents = 0;
var amountEl = document.getElementById("amount-value");
var continueBtn = document.getElementById("continue-btn");
var keypad = document.getElementById("keypad");

function formatAmount(cents) {
  var dollars = Math.floor(cents / 100);
  var centsPart = cents % 100;
  var centsText = centsPart < 10 ? "0" + centsPart : "" + centsPart;
  return addCommas("" + dollars) + "." + centsText;
}

function addCommas(value) {
  var out = "";
  var count = 0;
  for (var i = value.length - 1; i >= 0; i -= 1) {
    out = value.charAt(i) + out;
    count += 1;
    if (count % 3 === 0 && i !== 0) {
      out = "," + out;
    }
  }
  return out;
}

function updateDisplay() {
  amountEl.textContent = formatAmount(amountCents);
  continueBtn.disabled = amountCents === 0;
  continueBtn.className = continueBtn.disabled
    ? "primary-btn"
    : "primary-btn is-active";
}

function addDigit(digit) {
  if (amountCents > 99999999) {
    return;
  }
  amountCents = amountCents * 10 + digit;
  updateDisplay();
}

function backspace() {
  amountCents = Math.floor(amountCents / 10);
  updateDisplay();
}

function clearAll() {
  amountCents = 0;
  updateDisplay();
}

if (keypad) {
  keypad.onclick = function (event) {
    var target = event.target;
    if (!target || target.tagName !== "BUTTON") {
      return;
    }

    var key = target.getAttribute("data-key");
    var action = target.getAttribute("data-action");

    if (key !== null) {
      addDigit(parseInt(key, 10));
      return;
    }

    if (action === "back") {
      backspace();
      return;
    }

    if (action === "clear") {
      clearAll();
    }
  };
}

if (continueBtn) {
  continueBtn.addEventListener("click", function () {
    if (amountCents === 0) {
      return;
    }
    window.prompt("Input OTP To Withdraw: " + formatAmount(amountCents) + " to Your Account: 2383638478349");
  });
}

updateDisplay();
