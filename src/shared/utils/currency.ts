export function getCurrencyFormatWithSymbol(currencyCode: string) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
  };
}

export function getCurrencyFormatWithIsoCode(currencyCode: string) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "code",
  };
}

export function getCurrencyFormatWithLocalName(currencyCode: string) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "name",
  };
}

export function getCurrencyFormatNumbersOnly(currencyCode: string) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "none",
  };
}

export function formatCurrency(
  value: number,
  format: Intl.NumberFormatOptions,
  lang: string
) {
  const stripSymbols = format.currencyDisplay === "none";
  const localFormat = stripSymbols
    ? { ...format, currencyDisplay: "code" }
    : format;

  let result = Intl.NumberFormat(lang, localFormat).format(value);
  if (stripSymbols) {
    result = result.replace(/[a-z]{3}/i, "").trim();
  }

  return result;
}
