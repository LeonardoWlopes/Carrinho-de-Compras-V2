function currencyConverter(value: number) {
  const formattedValue = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "brl",
  }).format(value);

  return formattedValue
}

export { currencyConverter };
