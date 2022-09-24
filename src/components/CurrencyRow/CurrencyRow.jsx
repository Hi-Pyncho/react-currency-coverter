const CurrencyRow = ({ currency, onChangeCurrencyInput }) => {
  
  return (
      <input onChange={ onChangeCurrencyInput } type='number' value={ currency } />
  )
}

export { CurrencyRow }