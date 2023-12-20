import { faker } from '@faker-js/faker';

export const user = {
  idUser: 1,
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  email: 'user@example.com',
  middleName: null,
  secondSurname: null,
  password: '$2a$10$Tj15FY0Z7SvMDuky/mwVmO8eFwvKtAUi44jzQslZoETnko88psjH2',
  birthday: faker.date.past({ years: 21, refDate: '2000-08-30' }),
};

export const user2 = {
  idUser: 2,
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  email: 'user2@example.com',
  middleName: null,
  secondSurname: null,
  password: '$2a$12$kgc.oO2mrcdMOlojiPv7Ge6v1maNyx2tHFGtczzoLzVC3hPuw91PK',
  birthday: faker.date.past({ years: 21, refDate: '2000-10-30' }),
};

export const newUser = {
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  email: 'other@example.com',
  password: '56789012',
  birthday: faker.date.past({ years: 21, refDate: '2000-09-30' }),
};
