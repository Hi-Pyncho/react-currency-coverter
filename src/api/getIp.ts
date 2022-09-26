const getIp = async (): Promise<string> => {
  const apiKey = '09f95a04d10f46d5e1d917e2e19346caa3657c0b0f06a8a7bd124914'
  const apiUrl = 'https://api.ipdata.co'
  const requestUrl = new URL(apiUrl)
  requestUrl.searchParams.append('api-key', apiKey)

  const response = await fetch(requestUrl).catch(err => {
    throw new Error(err)
  })

  const data = await response.json()

  return data.ip
}

export { getIp }