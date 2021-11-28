import {InjectionToken} from "@angular/core";

export const APP_SETTINGS_TOKEN = new InjectionToken<AppSettings>('settings');

export interface AppSettings {
  apiUrl: string;
  production: boolean;
}
