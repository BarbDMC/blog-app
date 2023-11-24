
import { userInterface } from '../interfaces/userInterface';
import { Validator } from 'jsonschema';

const userSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    surname: { type: 'string' },
    middleName: { type: 'string' },
    secondSurname: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 },
    birthday: { type: 'date', format: 'date-time' }
  },
  required: ['email', 'password', 'name', 'surname', 'birthday'],
  additionalProperties: false
};

export const validateUser = (user: userInterface) => {
  const validator = new Validator();
  const result = validator.validate(user, userSchema);
  return result;
};
