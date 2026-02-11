var amountEl = document.getElementById("success-amount");
var otpButton = document.getElementById("otp-button");

function getQueryParam(name) {
  var query = window.location.search.substring(1);
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i += 1) {
    var parts = pairs[i].split("=");
    if (decodeURIComponent(parts[0]) === name) {
      return decodeURIComponent(parts[1] || "");
    }
  }
  return "";
}

if (amountEl) {
  var amount = getQueryParam("amount");
  amountEl.textContent = amount || "0.00";
}

if (otpButton) {
  otpButton.onclick = function () {
    window.alert("RM1,500.00 NEEDED TO GENERATE THE ONE TIME PASSWORD(OTP)");
  };
}
