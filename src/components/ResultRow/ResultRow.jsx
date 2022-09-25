import TextField from '@material-ui/core/TextField';

const ResultRow = ({ result, setResult }) => {
  return (
    <TextField 
      label="Result"
      value={ result }
      InputProps={{
        readOnly: true,
      }}
      variant='outlined'
      fullWidth
      onChange={(event) => setResult(event.target.value)}
    >
        { result }
    </TextField>
  )
}

export { ResultRow }