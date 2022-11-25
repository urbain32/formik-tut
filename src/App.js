import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

function App() {
  return (
    <div className='app'>
      <form>
        <TextField
          id='firstName'
          name='firstName'
          label='first name'
          margin='normal'
        />
        <TextField
          id='lastName'
          name='lastName'
          label='last name'
          margin='normal'
        />
        <TextField
          id='email'
          name='email'
          label='email address'
          margin='normal'
        />
        <Button variant='outlined' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
