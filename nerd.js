const multiplier = 0.6262074377908017;
const spsInput = document.getElementById('sps');
const resultBox = document.getElementById('result');

function formatNumber(num) {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

spsInput.addEventListener('input', () => {
  const value = parseFloat(spsInput.value);
  if (!isNaN(value)) {
    const result = value * multiplier;
    resultBox.value = formatNumber(result);
  } else {
    resultBox.value = formatNumber(multiplier);
  }
});
