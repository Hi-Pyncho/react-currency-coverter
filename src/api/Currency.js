const apiPath = 'https://api.apilayer.com/exchangerates_data/'
const headers = {
  'apikey': 'D5psqVKgE4Dqhame9QlOammfOtwEa7Bo'
}

async function getCurrencySymbols() {
  const requestUrl = new URL('symbols', apiPath)
  const response = await fetch(requestUrl, {
    method: 'GET',
    redirect: 'follow',
    headers
  }).catch(err => {
    throw new Error(err)
  })

  const rawAnswer = await response.json()
  const symbolsList = Object.keys(rawAnswer.symbols)

  return {
    raw: rawAnswer,
    symbols: symbolsList
  }
}

async function convertCurrency(from, to, amount) {
  const requestUrl = new URL('convert', apiPath)
  requestUrl.searchParams.append('from', from)
  requestUrl.searchParams.append('to', to)
  requestUrl.searchParams.append('amount', amount)

  const response = await fetch(requestUrl, {
    method: 'GET',
    redirect: 'follow',
    headers
  }).catch(err => {
    throw new Error(err)
  })

  const rawAnswer = await response.json()
  
  return rawAnswer.result
}

export { getCurrencySymbols, convertCurrency }