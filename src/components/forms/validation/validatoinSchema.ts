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

export const addCarSchema = yup.object().shape({
  company: yup.string().required('Company is required'),
  model: yup.string().required('Model is required'),
  vin: yup.string().required('VIN is required'),
  year: yup
    .number()
    .typeError('Year must be a number')
    .required('Year is required')
    .integer('Year must be an integer')
    .min(1900, 'Year must be greater than or equal to 1900')
    .max(
      new Date().getFullYear(),
      'Year must be less than or equal to current year'
    ),
  color: yup.string().required('Color is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .required('Price is required')
    .positive('Price must be positive'),
  availability: yup.string().required('Availability is required'),
});
