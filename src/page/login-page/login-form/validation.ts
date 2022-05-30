const REQUIRED_FIELD = "Обязательно для заполнения";

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин не может содержать русские буквы";
    }
    if (!value.match(/[@]/)) {
      return "e-mail в формате: index@index.com";
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[ ]/)) {
      return "Пароль не может содержать пробелы";
    }
    if (value.length < 8) {
      return "Пароль должен быть длиннее 8-ми сомволов";
    }

    if (!value.match(/.[A-Z]/)) {
      return "Добавьте хотя бы одну заглавнуб букву";
    }

    return true;
  },
};
