import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ISymbolList, IMUISelect } from '../../types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface ICurrencySelector {
  currencyList: ISymbolList
  currentCurrency: string
  onChangeCurrency: (event: IMUISelect) => void
  direction: string
}

const CurrencySelector = ({ currencyList = [], currentCurrency, onChangeCurrency, direction }: ICurrencySelector): JSX.Element => {
  const classes = useStyles();
  const options = currencyList.map(([symbol, description]: [string, string]) => {
    return <MenuItem value={ symbol } key={ symbol }>{ description }</MenuItem>
  })
  const label = direction === 'from' ? 'Convert From' : 'Convert To'
  
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ currentCurrency }
        onChange={ (event) => onChangeCurrency(event) }
      >
       { options }
      </Select>
    </FormControl>
  )
}

export { CurrencySelector }