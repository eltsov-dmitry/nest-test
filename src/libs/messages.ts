export enum messages {
  isString = 'Должен быть строкой',
  isNumber = 'Должен быть числом',
  IsNotEmpty = 'Не может быть пустым',
  passwordRule = 'Пароль должен быть от 4 до 6 символов',
  isEmail = 'Некорректный Email',
  EmailAlreadyExists = 'Пользователь с таким Email уже зарегестрирован',
  UserNotFound = 'Пользователь не найден',
  ProjectNotFound = 'Проект не найден',
}

export enum fields {
  title = 'Заголовок',
  user_id = 'ID пользователя',
  name_male = 'Имя мужчины',
  name_female = 'Имя женщины',
}
