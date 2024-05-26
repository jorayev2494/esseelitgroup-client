import useJwt from '@/services/auth/student/jwt/useJwt';
import httpClient from '@/services/http/index';

const { jwt } = useJwt(httpClient, {})

export default jwt