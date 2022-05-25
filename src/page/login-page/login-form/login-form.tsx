import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login-form.css'

export const LoginForm: React.FC = () => {
  return (
    <div className="login-form">
        <Typography variant="h4" component="div">
            Войдите
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom= { true } className ="login-form__subtitle">
            Что бы получить доступ
        </Typography>


        <form className='login-form__form' onSubmit={() => null}>
            <TextField
                label="e-mail"
                margin='normal'
                className='login-form__input'
                fullWidth ={ true }
            />
             <TextField
                label='password'
                type='password'
                margin='normal'
                className='login-form__input'
                fullWidth ={ true }
            />
            <Button
                type="submit"
                variant='contained'
                fullWidth={ true }
                disableElevation={ true }
                sx={
                    {marginTop: 2}
                }
            >
                Войти
            </Button>
        </form>
    </div>

    

 )
}