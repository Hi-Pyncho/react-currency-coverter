const CurrencySelector = ({ currencyList = [], currentCurrency, onChangeCurrency }) => {
  return (
    <select value={ currentCurrency } onChange={ onChangeCurrency }>
      {
        currencyList.map(item => <option key={ item }>{ item }</option>)
      }
    </select>
  )
}

export { CurrencySelector }