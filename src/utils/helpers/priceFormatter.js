export function priceFormatter(price) {
    return `${price.toLocaleString("ru-RU", {
      style: "decimal",
      currency: "RUB"
    })} Р`;
  }