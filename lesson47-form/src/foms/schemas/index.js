import * as Yup from "yup";

export  const mySchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Юзер нейм повинен містити мінімум 4 символи')
      .max(20, 'Юзер нейм повинен містити максимум 10 символів')
      .required(''),
    email: Yup.string()
    .email('Неправильна адреса електронної пошти')
    .required(''),
    phoneNumber: Yup.string()
    .min(13, 'Перевір формат номеру телефона')
    .max(13, 'Перевір формат номеру телефона')
    .required(''),
    message: Yup.string()
    .min(10, 'Повідомлення має бути не менше 10 символів')
    .max(40, 'Повідомлення має бути не більше 40 символів')
    .required(''),
  });
