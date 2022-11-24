import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

function App() {
  return (
    <>
      <form>
        <TextField id='firstName' name='firstName' label='first name' />
        <TextField id='lastName' name='lastName' label='last name' />
        <TextField id='email' name='email' label='email address' />
        <Button variant='outlined' type='submit'>Submit</Button>
      </form>
    </>
  );
}

export default App;
