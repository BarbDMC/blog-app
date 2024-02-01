
export interface userDataInterface {
  name: string,
  surname:  string,
  birthday: string
  email: string,
  middleName?: string,
  secondSurname?:  string,
};

export interface userSignUpInterface extends userDataInterface {
  password: string,
};
