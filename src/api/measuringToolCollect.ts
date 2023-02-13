import baseUrl from "@/config/env";

import axios from "axios";

export interface User {
  _id: string;
  name: string;
  username: string;
}
export interface Area {
  _id: string;
  name: string;
  username: string;
}
export async function queryUsers() {
  const res = await axios({
    baseURL: `${baseUrl}/users`,
    method: "GET",
    params: {},
  });
  return res.data.data;
}
export async function queryAreas() {
  const res = await axios({
    baseURL: `${baseUrl}/areas`,
    method: "GET",
    params: {},
  });
  return res.data.data;
}
