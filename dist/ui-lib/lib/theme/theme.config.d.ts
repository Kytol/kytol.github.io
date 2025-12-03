/**
 * Theme configuration types and constants
 */
export type ThemeName = 'light' | 'dark';
export interface ThemeVariables {
    colorBg: string;
    colorSurface: string;
    colorText: string;
    colorPrimary: string;
    colorSecondary: string;
    colorBorder: string;
}
export interface ThemeConfig {
    name: ThemeName;
    variables: ThemeVariables;
}
export declare const LIGHT_THEME: ThemeConfig;
export declare const DARK_THEME: ThemeConfig;
export declare const THEMES: Record<ThemeName, ThemeConfig>;
