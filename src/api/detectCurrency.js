import { getIp } from "./getIp"

const detectCurrency = async () => {
  const apiKey = '6x9dxiyw5o3gk16o'
  const apiUrl = 'https://api.ipregistry.co/'
  const ip = await getIp()
  const requestUrl = new URL(ip, apiUrl)
  requestUrl.searchParams.append('key', apiKey)
  requestUrl.searchParams.append('fields', 'currency')

  const response = await fetch(requestUrl).catch(err => {
    throw new Error(err)
  })

  const data = await response.json()
  
  return data.currency.code.toLowerCase()
}

export { detectCurrency }