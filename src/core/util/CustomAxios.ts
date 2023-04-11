import axios, { AxiosInstance } from "axios";

const url = "https://reqres.in/";
export const customAxios: AxiosInstance = axios.create({
  baseURL: `${url}`, // 기본 서버 주소 입력
  headers: {},
});
