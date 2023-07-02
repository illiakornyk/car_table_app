import * as yup from 'yup';

export const editCarSchema = yup.object().shape({
  color: yup.string().required('Color is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .required('Price is required')
    .positive('Price must be positive'),
  availability: yup.string().required('Availability is required'),
});
