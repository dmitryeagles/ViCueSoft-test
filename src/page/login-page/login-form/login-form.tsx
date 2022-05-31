import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Controller,
  useForm,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { loginValidation, passwordValidation } from "./validation";
import "./login-form.css";

interface ISingInform {
  login: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISingInform>({mode: 'onChange'});
  const onSubmit: SubmitHandler<ISingInform> = (data) => console.log(data);
  

  return (
    <div className="login-form">
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="login-form__subtitle"
      >
        Что бы получить доступ
      </Typography>

      <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="e-mail"
              margin="normal"
              className="login-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={errors.login !== undefined}
              helperText={errors.login && "Не верный формат e-mail"}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="password"
              type="password"
              margin="normal"
              className="login-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={errors.password !== undefined}
              helperText={errors.password && "Пароль минимум 8 символом и 1 загравная буква"}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
