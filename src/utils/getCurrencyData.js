import { currencyDict } from "../data/currencyDict"

const getCurrencyData = () => {
  return Object.entries(currencyDict)
}

const getDefaultCurrencySymbol = () => {
  return getCurrencyData()[0][0]
}

export { getCurrencyData, getDefaultCurrencySymbol }