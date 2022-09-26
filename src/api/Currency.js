async function convertCurrency(from, to, amount) {
  const apiPath = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'
  const requestUrl = new URL(`${from}/${to}.json`, apiPath)
 
  const response = await fetch(requestUrl)
  const result = await response.json()

  return (result[to] * amount).toFixed(2)
}

export { convertCurrency }