export default {
  // Endpoints
  loginEndpoint: '/company/auth/login',
  registerEndpoint: '/company/auth/register',
  refreshEndpoint: '/company/auth/refresh-token',
  forgotPasswordEndpoint: '/company/auth/restore-password/link',
  restorePasswordEndpoint: '/company/auth/restore-password/restore',
  logoutEndpoint: '/company/auth/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'access_token',
  storageRefreshTokenKeyName: 'refresh_token',
  storageAuthDataKeyName: 'auth_data',
}