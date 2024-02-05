
export interface UserDataInterface {
  name: string,
  surname:  string,
  birthday: string
  email: string,
  middleName?: string,
  secondSurname?:  string,
};

export interface UserSignUpInterface extends UserDataInterface {
  password: string,
};
