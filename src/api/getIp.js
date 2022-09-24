const getIp = async () => {
  const apiKey = '9242c4f0274445cab9110fb4c34154b5'
  const apiUrl = 'https://ipgeolocation.abstractapi.com/v1/'
  const requestUrl = new URL(apiUrl)
  requestUrl.searchParams.append('api_key', apiKey)

  const response = await fetch(requestUrl).catch(err => {
    throw new Error(err)
  })

  const data = await response.json()

  return data.ip_address
}

export { getIp }