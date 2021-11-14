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

export const generateSessionId = async (requestToken:string | null):Promise<string> => {
  const { data: session_id } = await authAxios.post(
    '/authentication/session/new',
    { request_token: requestToken }
  );
  localStorage.setItem('session_id', session_id.session_id);
  return session_id;
};

export const getUserAccount = async (sessionId:string) => {
  const { data } = await authAxios.get('/account', {
    params: {
      session_id: sessionId,
    },
  });

  return data;
};

export const deleteSession = async (session_id:string) => {
  const data = await authAxios.delete('/authentication/session', {
    data: {
      session_id,
    },
  });
  return data;
};