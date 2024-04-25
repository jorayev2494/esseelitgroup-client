import useJwt from '@/services/auth/company/jwt/useJwt';
import httpClient from '@/services/http/index';

const { jwt } = useJwt(httpClient, {})

export default jwt