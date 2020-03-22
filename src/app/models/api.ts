import { API_ROUTES } from "@app/config/api-index";

export interface Api {
  url: string;
  index: typeof API_ROUTES;
  host: string;
}
