export interface UserSignIn {
  email?: string;
  password?: string;
}

export interface AuthenticationResponse {
  token?: string;
  message?: string;
  role?: string;
  expiration?: string;
}

export interface UserSignUp {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}
