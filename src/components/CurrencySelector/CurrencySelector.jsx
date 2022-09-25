import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CurrencySelector = ({ currencyList = [], currentCurrency, onChangeCurrency, direction }) => {
  const classes = useStyles();
  const options = currencyList.map((symbol) => <MenuItem value={ symbol } key={ symbol }>{ symbol }</MenuItem>)
  const label = direction === 'from' ? 'Convert From' : 'Convert To'
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ currentCurrency }
        onChange={ onChangeCurrency }
      >
       { options }
      </Select>
    </FormControl>
  )
}

export { CurrencySelector }