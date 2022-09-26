import TextField from '@material-ui/core/TextField';

interface IResultRow {
  result: number
  setResult: (value: number) => void
}

const ResultRow = ({ result, setResult }: IResultRow) => {
  return (
    <TextField 
      label="Result"
      value={ result }
      InputProps={{
        readOnly: true,
      }}
      variant='outlined'
      fullWidth
      onChange={(event) => setResult(Number(event.target.value))}
    >
        { result }
    </TextField>
  )
}

export { ResultRow }