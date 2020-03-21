import { API_ROUTES } from "@app/config/api-index";

export interface Api {
  url: string;
  index: { [key in API_ROUTES]: string };
  host: string;
}
