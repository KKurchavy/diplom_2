export interface LoginDto {
  name: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  role: string;
  tests: any[];
  dictionaries: any[];
}

export interface UserDto {
  email: string;
  name: string;
  role: string;
  password: string;
}
