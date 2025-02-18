export enum AxiosQueryEnum {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
}

export enum AxiosStatusEnum {
  VALIDATION = 422,
  AUTHENTICATED = 401,
}

export enum AxiosEnum {
  BASEURL = 'https://cors-anywhere.herokuapp.com/http://31.128.35.50:8181/api',
  IMAGE_BASE_URL = 'http://localhost:8000',

  HEADER_KEY = 'X-Custom-Query-Key',
  HEADER_CUSTOM_MESSAGE = 'X-Custom-message',
  RESPONSE_TYPE = 'json',
  TIMEOUT = 120000,
  BEARER = 'Bearer ',
}

export enum AxiosQueryStatusEnum {
  ERROR = 'error',
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
}
