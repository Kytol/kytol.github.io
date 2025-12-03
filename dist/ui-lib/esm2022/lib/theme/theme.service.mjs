import { Injectable, signal, computed, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { THEMES } from './theme.config';
import * as i0 from "@angular/core";
/**
 * ThemeService provides programmatic theme switching functionality.
 * It manages the current theme state and applies theme classes to the document root.
 */
export class ThemeService {
    _currentTheme = signal('light');
    isBrowser;
    /** Current theme as a readonly signal */
    currentTheme = this._currentTheme.asReadonly();
    /** Current theme configuration */
    themeConfig = computed(() => THEMES[this._currentTheme()]);
    constructor(platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.initializeTheme();
    }
    /**
     * Initialize theme from stored preference or system preference
     */
    initializeTheme() {
        if (!this.isBrowser)
            return;
        const stored = localStorage.getItem('ui-lib-theme');
        if (stored && (stored === 'light' || stored === 'dark')) {
            this.setTheme(stored);
        }
        else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
            this.setTheme('dark');
        }
        else {
            this.setTheme('light');
        }
    }
    /**
     * Set the current theme
     * @param theme - The theme to apply ('light' or 'dark')
     */
    setTheme(theme) {
        this._currentTheme.set(theme);
        if (this.isBrowser) {
            const root = document.documentElement;
            root.classList.remove('theme-light', 'theme-dark');
            root.classList.add(`theme-${theme}`);
            localStorage.setItem('ui-lib-theme', theme);
        }
    }
    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this._currentTheme() === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ThemeService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYi9zcmMvbGliL3RoZW1lL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFhLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sWUFBWTtJQUNOLGFBQWEsR0FBRyxNQUFNLENBQVksT0FBTyxDQUFDLENBQUM7SUFDM0MsU0FBUyxDQUFVO0lBRXBDLHlDQUF5QztJQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV4RCxrQ0FBa0M7SUFDekIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRSxZQUFpQyxVQUFrQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFFNUIsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQXFCLENBQUM7UUFDeEUsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQzthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsS0FBZ0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO3dHQXBEVSxZQUFZLGtCQVVILFdBQVc7NEdBVnBCLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBV2MsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgc2lnbmFsLCBjb21wdXRlZCwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRoZW1lTmFtZSwgVEhFTUVTIH0gZnJvbSAnLi90aGVtZS5jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIFRoZW1lU2VydmljZSBwcm92aWRlcyBwcm9ncmFtbWF0aWMgdGhlbWUgc3dpdGNoaW5nIGZ1bmN0aW9uYWxpdHkuXHJcbiAqIEl0IG1hbmFnZXMgdGhlIGN1cnJlbnQgdGhlbWUgc3RhdGUgYW5kIGFwcGxpZXMgdGhlbWUgY2xhc3NlcyB0byB0aGUgZG9jdW1lbnQgcm9vdC5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudFRoZW1lID0gc2lnbmFsPFRoZW1lTmFtZT4oJ2xpZ2h0Jyk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBDdXJyZW50IHRoZW1lIGFzIGEgcmVhZG9ubHkgc2lnbmFsICovXHJcbiAgcmVhZG9ubHkgY3VycmVudFRoZW1lID0gdGhpcy5fY3VycmVudFRoZW1lLmFzUmVhZG9ubHkoKTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgdGhlbWUgY29uZmlndXJhdGlvbiAqL1xyXG4gIHJlYWRvbmx5IHRoZW1lQ29uZmlnID0gY29tcHV0ZWQoKCkgPT4gVEhFTUVTW3RoaXMuX2N1cnJlbnRUaGVtZSgpXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG9iamVjdCkge1xyXG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZW1lIGZyb20gc3RvcmVkIHByZWZlcmVuY2Ugb3Igc3lzdGVtIHByZWZlcmVuY2VcclxuICAgKi9cclxuICBwcml2YXRlIGluaXRpYWxpemVUaGVtZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWktbGliLXRoZW1lJykgYXMgVGhlbWVOYW1lIHwgbnVsbDtcclxuICAgIGlmIChzdG9yZWQgJiYgKHN0b3JlZCA9PT0gJ2xpZ2h0JyB8fCBzdG9yZWQgPT09ICdkYXJrJykpIHtcclxuICAgICAgdGhpcy5zZXRUaGVtZShzdG9yZWQpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYT8uKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICB0aGlzLnNldFRoZW1lKCdkYXJrJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFRoZW1lKCdsaWdodCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBjdXJyZW50IHRoZW1lXHJcbiAgICogQHBhcmFtIHRoZW1lIC0gVGhlIHRoZW1lIHRvIGFwcGx5ICgnbGlnaHQnIG9yICdkYXJrJylcclxuICAgKi9cclxuICBzZXRUaGVtZSh0aGVtZTogVGhlbWVOYW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VGhlbWUuc2V0KHRoZW1lKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUtbGlnaHQnLCAndGhlbWUtZGFyaycpO1xyXG4gICAgICByb290LmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWV9YCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aS1saWItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgYmV0d2VlbiBsaWdodCBhbmQgZGFyayB0aGVtZXNcclxuICAgKi9cclxuICB0b2dnbGVUaGVtZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhpcy5fY3VycmVudFRoZW1lKCkgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xyXG4gICAgdGhpcy5zZXRUaGVtZShuZXdUaGVtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==