import { CurrencyRow, CurrencySelector, ResultRow } from "./components";
import { useEffect, useState } from "react";
import { convertCurrency} from "./api/Currency";
import { detectCurrency } from "./api/detectCurrency";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { getCurrencyData, getDefaultCurrencySymbol } from "./utils/getCurrencyData";
import { ISymbolList, IMUISelect } from './types'

import './App.css'

const App: React.FC = () => {
  const [symbolsList, setSymbolList] = useState<ISymbolList>([])
  const [currentCurrencyFrom, setCurrentCurrencyFrom] = useState('')
  const [currentCurrencyTo, setCurrentCurrencyTo] = useState('')
  const [currencyValueFrom, setCurrencyValueFrom] = useState(0)
  const [currencyValueTo, setCurrencyValueTo] = useState(0)

  useEffect(() => {
    setSymbolList(getCurrencyData())
    setCurrentCurrencyTo(getDefaultCurrencySymbol())
  
    detectCurrency().then(data => {
      setCurrentCurrencyFrom(data)
    })
  }, [])

  const updateCurrency = (value: number, currencyTo: string) => {
    convertCurrency(currentCurrencyFrom, currencyTo, value).then(result => {
      setCurrencyValueTo(result)
    })
  }

  const onChangeCurrency = (type: 'from' | 'to') => (event: IMUISelect): void => {
    const selectValue = event.target.value as string
    
    switch (type) {
      case 'from':
        setCurrentCurrencyFrom(selectValue)
        break;
      case 'to':
        setCurrentCurrencyTo(selectValue)
        break;
      default:
        throw new Error('Unexpected type of currency')
    }

    updateCurrency(currencyValueFrom, selectValue)
  }

  const onChangeCurrencyInput: React.ChangeEventHandler<HTMLInputElement > = (event) => {
    const value = Number(event.target.value)
    setCurrencyValueFrom(value)

    updateCurrency(value, currentCurrencyTo)
  }

  return (
    <Container maxWidth='xs'>
      <h1 style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        Currency Converter
      </h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ padding: '2rem' }}>
        
        <Grid item xs={12} sm={8}>
          <CurrencyRow onChangeCurrencyInput={ onChangeCurrencyInput } currencyValue={ currencyValueFrom } />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CurrencySelector 
            currencyList={ symbolsList } 
            currentCurrency={ currentCurrencyFrom } 
            onChangeCurrency={ onChangeCurrency('from') } 
            direction='from'
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <ResultRow setResult={ setCurrencyValueTo } result={ currencyValueTo } />
        </Grid>

        <Grid item xs={12} sm={4}>
          <CurrencySelector 
            currencyList={ symbolsList } 
            currentCurrency={ currentCurrencyTo } 
            onChangeCurrency={ onChangeCurrency('to') } 
            direction='to'
          />
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default App
