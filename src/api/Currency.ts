async function convertCurrency(from: string, to: string, amount: number): Promise<number> {
  const apiPath = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'
  const requestUrl = new URL(`${from}/${to}.json`, apiPath)
 
  const response = await fetch(requestUrl)
  const result = await response.json()

  return Number((result[to] * amount).toFixed(2))
}

export { convertCurrency }