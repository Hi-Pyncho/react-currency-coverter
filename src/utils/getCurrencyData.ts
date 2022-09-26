import { currencyDict } from "../data/currencyDict"
import { ISymbolList } from '../types'

const getCurrencyData = (): ISymbolList => {
  return Object.entries(currencyDict)
}

const getDefaultCurrencySymbol = (): string => {
  return getCurrencyData()[0][0]
}

export { getCurrencyData, getDefaultCurrencySymbol }