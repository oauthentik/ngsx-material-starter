import { environment } from "@env/environment";
export type AppImage = { [key in AppImagesEnum]: string };
export enum AppImagesEnum {
  HomeBackground,
  LoginBackground
}
export const AppImages = {
  [AppImagesEnum.HomeBackground]: environment.appBackground,
  [AppImagesEnum.LoginBackground]: environment.appLoginBackground
};
