export default {
  // Endpoints
  loginEndpoint: '/student/auth/login',
  registerEndpoint: '/student/auth/register',
  refreshEndpoint: '/student/auth/refresh-token',
  forgotPasswordEndpoint: '/student/auth/restore-password/link',
  restorePasswordEndpoint: '/student/auth/restore-password/restore',
  logoutEndpoint: '/student/auth/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'access_token',
  storageRefreshTokenKeyName: 'refresh_token',
  storageAuthDataKeyName: 'auth_data',
}