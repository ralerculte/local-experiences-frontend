export interface EmailDTO {
  email: string
}

export interface UserInfoDTO {
  email: string,
  password: string
}

export interface AuthResponse {
  email: string,
  accessToken: string,
  refreshToken: string,
}