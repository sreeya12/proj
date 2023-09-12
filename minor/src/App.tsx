import './App.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function App() {

  const audioLables = [ 
    { label: 'Audio001', year: 1994 },
  { label: 'Audio002', year: 1972 },
  { label: 'Audio003', year: 1974 },
  { label: 'Audio004', year: 2008 },
  { label: 'Audio005', year: 1957 },

  ]
  return (
    <>
    <div className='navbar'>
    <h3>Speech Emotion Analysis</h3>
    </div>
    <div className='heading'>
      <h2>Select an Audio File:</h2>
      <Autocomplete
      disablePortal
      fullWidth
      id="combo-box-demo"
      options={audioLables}
      sx={{ width: 1100 }}
      renderInput={(params) => <TextField {...params} label="Select a file" />}
    />
    </div>    <div className='main'>
      
  <div className='imagediv'>
    </div>
    <div className='output'>
    <h2>Output: </h2>
    <TextField>Calm</TextField> 
    </div>
    </div>
    </>
  )
}

export default App
