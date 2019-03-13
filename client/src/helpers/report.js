export const integerFormat = value => (value || "-")

export const percentFormat = (value, decimals = 0) => value ? value.toFixed(decimals) : "-"

export const moneyFormat = value => (value % 1) ? value.toFixed(2) : (value || "-")
