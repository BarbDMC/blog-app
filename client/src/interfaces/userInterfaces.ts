
export interface userDataInterface {
  name: string,
  middleName?: string,
  surname:  string,
  secondSurname?:  string,
  birthday: string
  email: string,
};

export interface userSignUpInterface extends userDataInterface {
  password: string,
};