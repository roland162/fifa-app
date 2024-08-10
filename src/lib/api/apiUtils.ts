import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
  timeout: 10000,
});

export class API {
  static async get(url: string) {
    const response = await axiosInstance.get(url);
    return response.data;
  }

  static async post(url: string, data: any) {
    const response = await axiosInstance.post(url, data);
    return response.data;
  }

  static async put(url: string, data: any) {
    const response = await axiosInstance.put(url, data);
    return response.data;
  }

  static async delete(url: string) {
    const response = await axiosInstance.delete(url);
    return response.data;
  }
}
