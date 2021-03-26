// Function that formats numbers for better visualization
function formatNumber(number) {
  return number.toLocaleString('pt-br', { minimumFractionDigits: 0 }).replace(',', '.');
}

export default formatNumber;
