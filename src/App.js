import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className='app'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id='firstName'
          name='firstName'
          label='first name'
          margin='normal'
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          id='lastName'
          name='lastName'
          label='last name'
          onChange={formik.handleChange}
          value={formik.values.lastName}
          margin='normal'
        />
        <TextField
          id='email'
          name='email'
          label='email address'
          onChange={formik.handleChange}
          value={formik.values.email}
          margin='normal'
        />
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
