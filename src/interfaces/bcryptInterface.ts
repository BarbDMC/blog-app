
export interface bcryptInterface {
  compare(password: string, hashedPassword: string): Promise<boolean>;
}
