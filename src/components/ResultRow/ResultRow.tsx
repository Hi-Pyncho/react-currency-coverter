import TextField from '@material-ui/core/TextField';

interface IResultRow {
  result: number
  setResult: React.Dispatch<React.SetStateAction<number>>
}

const ResultRow = ({ result, setResult }: IResultRow): JSX.Element => {
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