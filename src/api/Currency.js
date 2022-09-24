const apiPath = 'https://api.apilayer.com/exchangerates_data/'

async function getCurrencySymbols() {
  const requestUrl = new URL('symbols', apiPath)
  const response = await fetch(requestUrl, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'apikey': 'D5psqVKgE4Dqhame9QlOammfOtwEa7Bo'
    }
  }).catch(err => {
    throw new Error(err)
  })

  return response.json()
}

export { getCurrencySymbols }