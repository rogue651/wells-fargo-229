var amountEl = document.getElementById("success-amount");

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
  amountEl.textContent = "100,000.00";
}

var nextStepButton = document.getElementById("next-step-button");
if (nextStepButton) {
  nextStepButton.onclick = function () {
    window.alert("To finalize, pay a redemption fee of Rm700");
  };
}
