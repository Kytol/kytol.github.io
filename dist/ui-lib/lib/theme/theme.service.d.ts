import { ThemeName } from './theme.config';
import * as i0 from "@angular/core";
/**
 * ThemeService provides programmatic theme switching functionality.
 * It manages the current theme state and applies theme classes to the document root.
 */
export declare class ThemeService {
    private readonly _currentTheme;
    private readonly isBrowser;
    /** Current theme as a readonly signal */
    readonly currentTheme: import("@angular/core").Signal<ThemeName>;
    /** Current theme configuration */
    readonly themeConfig: import("@angular/core").Signal<import("./theme.config").ThemeConfig>;
    constructor(platformId: object);
    /**
     * Initialize theme from stored preference or system preference
     */
    private initializeTheme;
    /**
     * Set the current theme
     * @param theme - The theme to apply ('light' or 'dark')
     */
    setTheme(theme: ThemeName): void;
    /**
     * Toggle between light and dark themes
     */
    toggleTheme(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
