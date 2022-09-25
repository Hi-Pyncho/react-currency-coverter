import TextField from '@material-ui/core/TextField';

const CurrencyRow = ({ currency, onChangeCurrencyInput }) => {
  return (
      <TextField 
        fullWidth
        onChange={ onChangeCurrencyInput } 
        type='number' value={ currency } 
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
      />
  )
}

export { CurrencyRow }