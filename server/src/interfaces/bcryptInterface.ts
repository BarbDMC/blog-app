
export interface BcryptInterface {
  compare(password: string, hashedPassword: string): Promise<boolean>;
  hash(password: string, round: number): Promise<string>;
}
