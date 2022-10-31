function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

export const currency = (number, locales="en-US") => {
  if (isNumeric(number)) {
      return number.toLocaleString(locales, {
        style: "currency",
        currency: "USD"
      })
  }
}