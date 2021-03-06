import axios from "axios";

interface Token {
  success: boolean
  expires_at: string
  request_token: string
}

export const authAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const generateToken = async () => {
  const { data: { request_token } } = await authAxios.get<Token>('/authentication/token/new');
  localStorage.setItem('request_token', request_token);
  return request_token;
};

export const generateSessionId = async (requestToken:string | null) => {
  const { data: session_id } = await authAxios.post(
    '/authentication/session/new',
    { request_token: requestToken }
  );
  localStorage.setItem('session_id', session_id.session_id);
  return session_id;
};
