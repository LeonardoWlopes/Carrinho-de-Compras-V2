function currencyConverter(value: number) {
  const stringNumber = value.toString();

  const formattedValue = parseFloat(
    stringNumber.substring(0, stringNumber.length - 2) +
      "." +
      stringNumber.substring(stringNumber.length - 2)
  );

  const currencyValue = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "brl",
  }).format(formattedValue);

  return currencyValue;
}

export { currencyConverter };
