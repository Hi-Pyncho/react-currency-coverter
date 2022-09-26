import TextField from '@material-ui/core/TextField';
import React from 'react';

interface ICurrencyRowProps {
  currencyValue: number
  onChangeCurrencyInput: React.ChangeEventHandler<HTMLInputElement>
}

const CurrencyRow = ({ currencyValue, onChangeCurrencyInput }: ICurrencyRowProps): JSX.Element => {
  return (
      <TextField 
        fullWidth
        onChange={ onChangeCurrencyInput } 
        type='number' value={ currencyValue } 
        id="outlined-basic" 
        label="Currency" 
        variant="outlined" 
      />
  )
}

export { CurrencyRow }