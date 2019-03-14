function currencyFormatter(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function getTotalPrice(arr) {
  const total = arr.reduce((acc, cur) => acc + cur.total, 0);

  return currencyFormatter(total);
}

export { currencyFormatter, getTotalPrice };
