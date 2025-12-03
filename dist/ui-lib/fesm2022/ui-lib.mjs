import * as i0 from '@angular/core';
import { signal, computed, PLATFORM_ID, Injectable, Inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, HostBinding, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * Theme configuration types and constants
 */
const LIGHT_THEME = {
    name: 'light',
    variables: {
        colorBg: '#ffffff',
        colorSurface: '#f6f7f8',
        colorText: '#222',
        colorPrimary: '#3b82f6',
        colorSecondary: '#6b7280',
        colorBorder: '#d1d5db'
    }
};
const DARK_THEME = {
    name: 'dark',
    variables: {
        colorBg: '#111827',
        colorSurface: '#1f2937',
        colorText: '#f3f4f6',
        colorPrimary: '#60a5fa',
        colorSecondary: '#9ca3af',
        colorBorder: '#374151'
    }
};
const THEMES = {
    light: LIGHT_THEME,
    dark: DARK_THEME
};

/**
 * ThemeService provides programmatic theme switching functionality.
 * It manages the current theme state and applies theme classes to the document root.
 */
class ThemeService {
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

/**
 * Shared types and interfaces for UI Library components
 */
const BUTTON_SIZES = {
    sm: { padding: '4px 10px', fontSize: '12px' },
    md: { padding: '6px 14px', fontSize: '14px' },
    lg: { padding: '10px 20px', fontSize: '16px' }
};
const DEFAULT_PAGE_SIZES = [10, 25, 50, 100];
// ============================================
// Search Component Types
// ============================================
const DEFAULT_DEBOUNCE_MS = 300;

/**
 * UI Button Component
 *
 * A reusable button component with variants, sizes, and states.
 * Supports icons, loading state, and full keyboard accessibility.
 */
class ButtonComponent {
    elementRef;
    /** Button visual variant */
    variant = 'primary';
    /** Button size */
    size = 'md';
    /** Whether the button is disabled */
    disabled = false;
    /** Whether the button is in loading state */
    loading = false;
    /** Icon to display on the left side */
    iconLeft = null;
    /** Icon to display on the right side */
    iconRight = null;
    /** Click event emitter */
    clicked = new EventEmitter();
    /** Track if there's text content - will be set after content init */
    hasTextContent = true;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /** Host binding for disabled attribute */
    get isDisabled() {
        return this.disabled || this.loading ? true : null;
    }
    /** Get CSS classes based on variant and size */
    get buttonClasses() {
        return {
            'ui-button': true,
            [`ui-button--${this.variant}`]: true,
            [`ui-button--${this.size}`]: true,
            'ui-button--disabled': this.disabled,
            'ui-button--loading': this.loading,
            'ui-button--icon-only': this.isIconOnly
        };
    }
    /** Check if button is icon-only (has icon but no text content projected) */
    get isIconOnly() {
        return (this.iconLeft !== null || this.iconRight !== null) && !this.hasTextContent;
    }
    /** Get padding style based on size */
    get paddingStyle() {
        // For icon-only buttons, use equal padding
        if (this.isIconOnly) {
            return this.getIconOnlyPadding();
        }
        return BUTTON_SIZES[this.size]?.padding || BUTTON_SIZES.md.padding;
    }
    /** Get icon-only padding based on size */
    getIconOnlyPadding() {
        switch (this.size) {
            case 'sm': return '4px';
            case 'lg': return '10px';
            case 'md':
            default: return '6px';
        }
    }
    /** Get font size style based on size */
    get fontSizeStyle() {
        return BUTTON_SIZES[this.size]?.fontSize || BUTTON_SIZES.md.fontSize;
    }
    /** Check for text content after content is initialized */
    ngAfterContentInit() {
        this.checkTextContent();
    }
    /** Check if there's meaningful text content in the projected content */
    checkTextContent() {
        const contentElement = this.elementRef.nativeElement.querySelector('.ui-button__content');
        if (contentElement) {
            const textContent = contentElement.textContent?.trim() || '';
            this.hasTextContent = textContent.length > 0;
        }
    }
    /** Handle click events */
    onClick(event) {
        if (this.disabled || this.loading) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.clicked.emit(event);
    }
    /** Handle keyboard events for accessibility (Enter and Space keys) */
    onKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            if (this.disabled || this.loading) {
                event.preventDefault();
                return;
            }
            event.preventDefault();
            this.clicked.emit(new MouseEvent('click', { bubbles: true, cancelable: true }));
        }
    }
    /** Update text content status - can be called from template */
    updateTextContent(hasContent) {
        this.hasTextContent = hasContent;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ButtonComponent, isStandalone: true, selector: "ui-button", inputs: { variant: "variant", size: "size", disabled: "disabled", loading: "loading", iconLeft: "iconLeft", iconRight: "iconRight" }, outputs: { clicked: "clicked" }, host: { properties: { "attr.disabled": "this.isDisabled" } }, ngImport: i0, template: "<button\r\n  [ngClass]=\"buttonClasses\"\r\n  [style.padding]=\"paddingStyle\"\r\n  [style.fontSize]=\"fontSizeStyle\"\r\n  [disabled]=\"disabled || loading\"\r\n  [attr.aria-disabled]=\"disabled || loading\"\r\n  [attr.aria-busy]=\"loading\"\r\n  [attr.tabindex]=\"disabled ? -1 : 0\"\r\n  (click)=\"onClick($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n>\r\n  <!-- Loading spinner overlay -->\r\n  <span *ngIf=\"loading\" class=\"ui-button__spinner\" aria-hidden=\"true\">\r\n    <svg class=\"ui-button__spinner-icon\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n      <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"31.4 31.4\" />\r\n    </svg>\r\n  </span>\r\n\r\n  <!-- Left icon -->\r\n  <span \r\n    *ngIf=\"iconLeft\" \r\n    class=\"ui-button__icon ui-button__icon--left\"\r\n    aria-hidden=\"true\"\r\n    role=\"img\"\r\n    [attr.aria-label]=\"iconLeft\"\r\n  >\r\n    {{ iconLeft }}\r\n  </span>\r\n\r\n  <!-- Button content -->\r\n  <span class=\"ui-button__content\" [class.ui-button__content--hidden]=\"loading\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n\r\n  <!-- Right icon -->\r\n  <span \r\n    *ngIf=\"iconRight\" \r\n    class=\"ui-button__icon ui-button__icon--right\"\r\n    aria-hidden=\"true\"\r\n    role=\"img\"\r\n    [attr.aria-label]=\"iconRight\"\r\n  >\r\n    {{ iconRight }}\r\n  </span>\r\n</button>\r\n", styles: [".ui-button{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-2, 8px);font-family:var(--font-family, \"Inter\", sans-serif);font-weight:var(--font-weight-medium, 500);line-height:var(--line-height-tight, 1.25);border-radius:var(--radius-md, 6px);border:1px solid transparent;cursor:pointer;transition:all var(--transition-fast, .15s ease);position:relative;white-space:nowrap;-webkit-user-select:none;user-select:none}.ui-button:focus-visible{outline:2px solid var(--color-focus-ring, rgba(59, 130, 246, .5));outline-offset:2px}.ui-button--primary{background-color:var(--color-primary, #3b82f6);color:#fff;border-color:var(--color-primary, #3b82f6)}.ui-button--primary:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-primary, #3b82f6) 85%,black);border-color:color-mix(in srgb,var(--color-primary, #3b82f6) 85%,black)}.ui-button--primary:active:not(:disabled){background-color:color-mix(in srgb,var(--color-primary, #3b82f6) 75%,black)}.ui-button--secondary{background-color:var(--color-secondary, #6b7280);color:#fff;border-color:var(--color-secondary, #6b7280)}.ui-button--secondary:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-secondary, #6b7280) 85%,black);border-color:color-mix(in srgb,var(--color-secondary, #6b7280) 85%,black)}.ui-button--secondary:active:not(:disabled){background-color:color-mix(in srgb,var(--color-secondary, #6b7280) 75%,black)}.ui-button--outline{background-color:transparent;color:var(--color-primary, #3b82f6);border-color:var(--color-border, #d1d5db)}.ui-button--outline:hover:not(:disabled){background-color:var(--color-hover, rgba(0, 0, 0, .05));border-color:var(--color-primary, #3b82f6)}.ui-button--outline:active:not(:disabled){background-color:var(--color-hover, rgba(0, 0, 0, .1))}.ui-button--sm{min-height:28px}.ui-button--md{min-height:36px}.ui-button--lg{min-height:44px}.ui-button--disabled,.ui-button:disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.ui-button--loading{cursor:wait;pointer-events:none}.ui-button__spinner{position:absolute;display:flex;align-items:center;justify-content:center}.ui-button__spinner-icon{width:1em;height:1em;animation:ui-button-spin 1s linear infinite}@keyframes ui-button-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ui-button__content--hidden{visibility:hidden}.ui-button__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.ui-button__icon--left{order:-1}.ui-button__icon--right{order:1}.ui-button--icon-only{aspect-ratio:1;min-width:auto}.ui-button__content{display:inline-flex;align-items:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-button', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\r\n  [ngClass]=\"buttonClasses\"\r\n  [style.padding]=\"paddingStyle\"\r\n  [style.fontSize]=\"fontSizeStyle\"\r\n  [disabled]=\"disabled || loading\"\r\n  [attr.aria-disabled]=\"disabled || loading\"\r\n  [attr.aria-busy]=\"loading\"\r\n  [attr.tabindex]=\"disabled ? -1 : 0\"\r\n  (click)=\"onClick($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n>\r\n  <!-- Loading spinner overlay -->\r\n  <span *ngIf=\"loading\" class=\"ui-button__spinner\" aria-hidden=\"true\">\r\n    <svg class=\"ui-button__spinner-icon\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n      <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"31.4 31.4\" />\r\n    </svg>\r\n  </span>\r\n\r\n  <!-- Left icon -->\r\n  <span \r\n    *ngIf=\"iconLeft\" \r\n    class=\"ui-button__icon ui-button__icon--left\"\r\n    aria-hidden=\"true\"\r\n    role=\"img\"\r\n    [attr.aria-label]=\"iconLeft\"\r\n  >\r\n    {{ iconLeft }}\r\n  </span>\r\n\r\n  <!-- Button content -->\r\n  <span class=\"ui-button__content\" [class.ui-button__content--hidden]=\"loading\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n\r\n  <!-- Right icon -->\r\n  <span \r\n    *ngIf=\"iconRight\" \r\n    class=\"ui-button__icon ui-button__icon--right\"\r\n    aria-hidden=\"true\"\r\n    role=\"img\"\r\n    [attr.aria-label]=\"iconRight\"\r\n  >\r\n    {{ iconRight }}\r\n  </span>\r\n</button>\r\n", styles: [".ui-button{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-2, 8px);font-family:var(--font-family, \"Inter\", sans-serif);font-weight:var(--font-weight-medium, 500);line-height:var(--line-height-tight, 1.25);border-radius:var(--radius-md, 6px);border:1px solid transparent;cursor:pointer;transition:all var(--transition-fast, .15s ease);position:relative;white-space:nowrap;-webkit-user-select:none;user-select:none}.ui-button:focus-visible{outline:2px solid var(--color-focus-ring, rgba(59, 130, 246, .5));outline-offset:2px}.ui-button--primary{background-color:var(--color-primary, #3b82f6);color:#fff;border-color:var(--color-primary, #3b82f6)}.ui-button--primary:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-primary, #3b82f6) 85%,black);border-color:color-mix(in srgb,var(--color-primary, #3b82f6) 85%,black)}.ui-button--primary:active:not(:disabled){background-color:color-mix(in srgb,var(--color-primary, #3b82f6) 75%,black)}.ui-button--secondary{background-color:var(--color-secondary, #6b7280);color:#fff;border-color:var(--color-secondary, #6b7280)}.ui-button--secondary:hover:not(:disabled){background-color:color-mix(in srgb,var(--color-secondary, #6b7280) 85%,black);border-color:color-mix(in srgb,var(--color-secondary, #6b7280) 85%,black)}.ui-button--secondary:active:not(:disabled){background-color:color-mix(in srgb,var(--color-secondary, #6b7280) 75%,black)}.ui-button--outline{background-color:transparent;color:var(--color-primary, #3b82f6);border-color:var(--color-border, #d1d5db)}.ui-button--outline:hover:not(:disabled){background-color:var(--color-hover, rgba(0, 0, 0, .05));border-color:var(--color-primary, #3b82f6)}.ui-button--outline:active:not(:disabled){background-color:var(--color-hover, rgba(0, 0, 0, .1))}.ui-button--sm{min-height:28px}.ui-button--md{min-height:36px}.ui-button--lg{min-height:44px}.ui-button--disabled,.ui-button:disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.ui-button--loading{cursor:wait;pointer-events:none}.ui-button__spinner{position:absolute;display:flex;align-items:center;justify-content:center}.ui-button__spinner-icon{width:1em;height:1em;animation:ui-button-spin 1s linear infinite}@keyframes ui-button-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ui-button__content--hidden{visibility:hidden}.ui-button__icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.ui-button__icon--left{order:-1}.ui-button__icon--right{order:1}.ui-button--icon-only{aspect-ratio:1;min-width:auto}.ui-button__content{display:inline-flex;align-items:center}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], iconLeft: [{
                type: Input
            }], iconRight: [{
                type: Input
            }], clicked: [{
                type: Output
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }] } });

/** Unique ID counter for input elements */
let inputIdCounter = 0;
/**
 * UI Input Component
 *
 * A reusable input field component with labels, validation states, and icons.
 * Supports reactive forms via ControlValueAccessor.
 */
class InputComponent {
    /** Label text displayed above the input */
    label = '';
    /** Placeholder text for the input */
    placeholder = '';
    /** Input type (text, number, email, password) */
    type = 'text';
    /** Current input value */
    value = '';
    /** Whether the input is disabled */
    disabled = false;
    /** Error message to display */
    error = null;
    /** Icon to display on the left side (prefix) */
    prefixIcon = null;
    /** Icon to display on the right side (suffix) */
    suffixIcon = null;
    /** Event emitted when value changes */
    valueChange = new EventEmitter();
    /** Unique ID for the input element */
    inputId = `ui-input-${++inputIdCounter}`;
    /** ControlValueAccessor callbacks */
    onChange = () => { };
    onTouched = () => { };
    /** Get CSS classes for the input wrapper */
    get wrapperClasses() {
        return {
            'ui-input-wrapper': true,
            'ui-input-wrapper--disabled': this.disabled,
            'ui-input-wrapper--error': !!this.error,
            'ui-input-wrapper--has-prefix': !!this.prefixIcon,
            'ui-input-wrapper--has-suffix': !!this.suffixIcon
        };
    }
    /** Handle input value changes */
    onInputChange(event) {
        const target = event.target;
        const newValue = target.value;
        this.value = newValue;
        this.valueChange.emit(newValue);
        this.onChange(newValue);
    }
    /** Handle input blur */
    onBlur() {
        this.onTouched();
    }
    // ControlValueAccessor implementation
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputComponent, isStandalone: true, selector: "ui-input", inputs: { label: "label", placeholder: "placeholder", type: "type", value: "value", disabled: "disabled", error: "error", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Label -->\r\n  <label \r\n    *ngIf=\"label\" \r\n    [for]=\"inputId\" \r\n    class=\"ui-input__label\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n\r\n  <!-- Input container -->\r\n  <div class=\"ui-input__container\">\r\n    <!-- Prefix icon -->\r\n    <span \r\n      *ngIf=\"prefixIcon\" \r\n      class=\"ui-input__icon ui-input__icon--prefix\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      {{ prefixIcon }}\r\n    </span>\r\n\r\n    <!-- Input element -->\r\n    <input\r\n      [id]=\"inputId\"\r\n      [type]=\"type\"\r\n      [value]=\"value\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [attr.aria-invalid]=\"!!error\"\r\n      [attr.aria-describedby]=\"error ? inputId + '-error' : null\"\r\n      class=\"ui-input__field\"\r\n      (input)=\"onInputChange($event)\"\r\n      (blur)=\"onBlur()\"\r\n    />\r\n\r\n    <!-- Suffix icon -->\r\n    <span \r\n      *ngIf=\"suffixIcon\" \r\n      class=\"ui-input__icon ui-input__icon--suffix\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      {{ suffixIcon }}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Error message -->\r\n  <span \r\n    *ngIf=\"error\" \r\n    [id]=\"inputId + '-error'\"\r\n    class=\"ui-input__error\"\r\n    role=\"alert\"\r\n  >\r\n    {{ error }}\r\n  </span>\r\n</div>\r\n", styles: [".ui-input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-1, 4px);font-family:var(--font-family, \"Inter\", sans-serif)}.ui-input__label{font-size:var(--font-size-sm, 14px);font-weight:var(--font-weight-medium, 500);color:var(--color-text, #222);line-height:var(--line-height-normal, 1.5)}.ui-input__container{position:relative;display:flex;align-items:center;height:42px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);transition:border-color .15s ease,box-shadow .15s ease}.ui-input__container:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-input-wrapper--error .ui-input__container{border-color:var(--color-error, #ef4444)}.ui-input-wrapper--error .ui-input__container:focus-within{border-color:var(--color-error, #ef4444);box-shadow:0 0 0 2px #ef444440}.ui-input-wrapper--disabled .ui-input__container{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-input__field{flex:1;height:100%;padding:0 12px;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-input__field::placeholder{color:var(--color-secondary, #6b7280)}.ui-input__field:disabled{cursor:not-allowed}.ui-input__icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;color:var(--color-secondary, #6b7280)}.ui-input__icon--prefix{margin-left:12px}.ui-input__icon--suffix{margin-right:12px}.ui-input-wrapper--has-prefix .ui-input__field{padding-left:8px}.ui-input-wrapper--has-suffix .ui-input__field{padding-right:8px}.ui-input__error{font-size:var(--font-size-sm, 12px);color:var(--color-error, #ef4444);line-height:var(--line-height-normal, 1.5)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-input', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true
                        }
                    ], template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Label -->\r\n  <label \r\n    *ngIf=\"label\" \r\n    [for]=\"inputId\" \r\n    class=\"ui-input__label\"\r\n  >\r\n    {{ label }}\r\n  </label>\r\n\r\n  <!-- Input container -->\r\n  <div class=\"ui-input__container\">\r\n    <!-- Prefix icon -->\r\n    <span \r\n      *ngIf=\"prefixIcon\" \r\n      class=\"ui-input__icon ui-input__icon--prefix\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      {{ prefixIcon }}\r\n    </span>\r\n\r\n    <!-- Input element -->\r\n    <input\r\n      [id]=\"inputId\"\r\n      [type]=\"type\"\r\n      [value]=\"value\"\r\n      [placeholder]=\"placeholder\"\r\n      [disabled]=\"disabled\"\r\n      [attr.aria-invalid]=\"!!error\"\r\n      [attr.aria-describedby]=\"error ? inputId + '-error' : null\"\r\n      class=\"ui-input__field\"\r\n      (input)=\"onInputChange($event)\"\r\n      (blur)=\"onBlur()\"\r\n    />\r\n\r\n    <!-- Suffix icon -->\r\n    <span \r\n      *ngIf=\"suffixIcon\" \r\n      class=\"ui-input__icon ui-input__icon--suffix\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      {{ suffixIcon }}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Error message -->\r\n  <span \r\n    *ngIf=\"error\" \r\n    [id]=\"inputId + '-error'\"\r\n    class=\"ui-input__error\"\r\n    role=\"alert\"\r\n  >\r\n    {{ error }}\r\n  </span>\r\n</div>\r\n", styles: [".ui-input-wrapper{display:flex;flex-direction:column;gap:var(--spacing-1, 4px);font-family:var(--font-family, \"Inter\", sans-serif)}.ui-input__label{font-size:var(--font-size-sm, 14px);font-weight:var(--font-weight-medium, 500);color:var(--color-text, #222);line-height:var(--line-height-normal, 1.5)}.ui-input__container{position:relative;display:flex;align-items:center;height:42px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);transition:border-color .15s ease,box-shadow .15s ease}.ui-input__container:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-input-wrapper--error .ui-input__container{border-color:var(--color-error, #ef4444)}.ui-input-wrapper--error .ui-input__container:focus-within{border-color:var(--color-error, #ef4444);box-shadow:0 0 0 2px #ef444440}.ui-input-wrapper--disabled .ui-input__container{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-input__field{flex:1;height:100%;padding:0 12px;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-input__field::placeholder{color:var(--color-secondary, #6b7280)}.ui-input__field:disabled{cursor:not-allowed}.ui-input__icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:20px;color:var(--color-secondary, #6b7280)}.ui-input__icon--prefix{margin-left:12px}.ui-input__icon--suffix{margin-right:12px}.ui-input-wrapper--has-prefix .ui-input__field{padding-left:8px}.ui-input-wrapper--has-suffix .ui-input__field{padding-right:8px}.ui-input__error{font-size:var(--font-size-sm, 12px);color:var(--color-error, #ef4444);line-height:var(--line-height-normal, 1.5)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], error: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

/**
 * UI Calendar Component
 *
 * A calendar component for date selection with single and range modes.
 * Supports date constraints, time picker, and keyboard navigation.
 */
class CalendarComponent {
    cdr;
    /** Selection mode: single date or date range */
    mode = 'single';
    /** Currently selected value */
    value = null;
    /** Minimum selectable date */
    minDate = null;
    /** Maximum selectable date */
    maxDate = null;
    /** Whether to show time picker */
    showTime = false;
    /** Event emitted when value changes */
    valueChange = new EventEmitter();
    /** Current displayed month */
    currentMonth = new Date();
    /** Days of the week headers */
    weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    /** Calendar grid days */
    calendarDays = [];
    /** Currently focused date for keyboard navigation */
    focusedDate = new Date();
    /** Time values for time picker */
    selectedHours = 0;
    selectedMinutes = 0;
    /** Range selection state */
    rangeStart = null;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        this.initializeFromValue();
        this.generateCalendarDays();
    }
    /** Initialize state from input value */
    initializeFromValue() {
        if (this.value) {
            if (Array.isArray(this.value)) {
                this.currentMonth = new Date(this.value[0]);
                this.rangeStart = this.value[0];
            }
            else {
                this.currentMonth = new Date(this.value);
                this.selectedHours = this.value.getHours();
                this.selectedMinutes = this.value.getMinutes();
            }
        }
        this.focusedDate = new Date(this.currentMonth);
    }
    /** Generate calendar grid for current month */
    generateCalendarDays() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        this.calendarDays = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Generate 6 weeks (42 days)
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            this.calendarDays.push({
                date: date,
                isCurrentMonth: date.getMonth() === month,
                isToday: this.isSameDay(date, today),
                isSelected: this.isDateSelected(date),
                isInRange: this.isDateInRange(date),
                isDisabled: this.isDateDisabled(date)
            });
        }
        this.cdr.markForCheck();
    }
    /** Navigate to previous month */
    previousMonth() {
        this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
        this.generateCalendarDays();
    }
    /** Navigate to next month */
    nextMonth() {
        this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
        this.generateCalendarDays();
    }
    /** Get formatted month/year string */
    get monthYearLabel() {
        return this.currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }
    /** Handle date selection */
    selectDate(day) {
        if (day.isDisabled)
            return;
        if (this.mode === 'single') {
            const selectedDate = new Date(day.date);
            if (this.showTime) {
                selectedDate.setHours(this.selectedHours, this.selectedMinutes);
            }
            this.value = selectedDate;
            this.valueChange.emit(selectedDate);
        }
        else {
            // Range mode
            if (!this.rangeStart) {
                this.rangeStart = new Date(day.date);
            }
            else {
                const start = this.rangeStart;
                const end = new Date(day.date);
                if (end < start) {
                    this.value = [end, start];
                }
                else {
                    this.value = [start, end];
                }
                this.valueChange.emit(this.value);
                this.rangeStart = null;
            }
        }
        this.generateCalendarDays();
    }
    /** Handle keyboard navigation */
    onKeyDown(event) {
        let newDate = new Date(this.focusedDate);
        switch (event.key) {
            case 'ArrowLeft':
                newDate.setDate(newDate.getDate() - 1);
                break;
            case 'ArrowRight':
                newDate.setDate(newDate.getDate() + 1);
                break;
            case 'ArrowUp':
                newDate.setDate(newDate.getDate() - 7);
                break;
            case 'ArrowDown':
                newDate.setDate(newDate.getDate() + 7);
                break;
            case 'Enter':
            case ' ':
                const day = this.calendarDays.find(d => this.isSameDay(d.date, this.focusedDate));
                if (day && !day.isDisabled) {
                    this.selectDate(day);
                }
                event.preventDefault();
                return;
            default:
                return;
        }
        event.preventDefault();
        this.focusedDate = newDate;
        // Navigate months if needed
        if (newDate.getMonth() !== this.currentMonth.getMonth()) {
            this.currentMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
            this.generateCalendarDays();
        }
        this.cdr.markForCheck();
    }
    /** Update time values */
    onTimeChange() {
        if (this.mode === 'single' && this.value && !Array.isArray(this.value)) {
            const newDate = new Date(this.value);
            newDate.setHours(this.selectedHours, this.selectedMinutes);
            this.value = newDate;
            this.valueChange.emit(newDate);
        }
    }
    /** Check if two dates are the same day (public for template) */
    isSameDayPublic(date1, date2) {
        return this.isSameDay(date1, date2);
    }
    /** Check if two dates are the same day */
    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }
    /** Check if date is selected */
    isDateSelected(date) {
        if (!this.value)
            return false;
        if (Array.isArray(this.value)) {
            return this.isSameDay(date, this.value[0]) || this.isSameDay(date, this.value[1]);
        }
        return this.isSameDay(date, this.value);
    }
    /** Check if date is in selected range */
    isDateInRange(date) {
        if (!this.value || !Array.isArray(this.value))
            return false;
        return date > this.value[0] && date < this.value[1];
    }
    /** Check if date is disabled */
    isDateDisabled(date) {
        if (this.minDate && date < this.minDate)
            return true;
        if (this.maxDate && date > this.maxDate)
            return true;
        return false;
    }
    /** Track by function for ngFor */
    trackByDate(index, day) {
        return day.date.getTime();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CalendarComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CalendarComponent, isStandalone: true, selector: "ui-calendar", inputs: { mode: "mode", value: "value", minDate: "minDate", maxDate: "maxDate", showTime: "showTime" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div class=\"ui-calendar\" (keydown)=\"onKeyDown($event)\" tabindex=\"0\">\r\n  <!-- Header with navigation -->\r\n  <div class=\"ui-calendar__header\">\r\n    <button \r\n      type=\"button\" \r\n      class=\"ui-calendar__nav-btn\"\r\n      aria-label=\"Previous month\"\r\n      (click)=\"previousMonth()\"\r\n    >\r\n      \u2039\r\n    </button>\r\n    <span class=\"ui-calendar__month-year\">{{ monthYearLabel }}</span>\r\n    <button \r\n      type=\"button\" \r\n      class=\"ui-calendar__nav-btn\"\r\n      aria-label=\"Next month\"\r\n      (click)=\"nextMonth()\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Weekday headers -->\r\n  <div class=\"ui-calendar__weekdays\">\r\n    <span *ngFor=\"let day of weekDays\" class=\"ui-calendar__weekday\">\r\n      {{ day }}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Calendar grid -->\r\n  <div class=\"ui-calendar__grid\" role=\"grid\">\r\n    <button\r\n      *ngFor=\"let day of calendarDays; trackBy: trackByDate\"\r\n      type=\"button\"\r\n      class=\"ui-calendar__day\"\r\n      [class.ui-calendar__day--other-month]=\"!day.isCurrentMonth\"\r\n      [class.ui-calendar__day--today]=\"day.isToday\"\r\n      [class.ui-calendar__day--selected]=\"day.isSelected\"\r\n      [class.ui-calendar__day--in-range]=\"day.isInRange\"\r\n      [class.ui-calendar__day--disabled]=\"day.isDisabled\"\r\n      [class.ui-calendar__day--focused]=\"isSameDayPublic(day.date, focusedDate)\"\r\n      [disabled]=\"day.isDisabled\"\r\n      [attr.aria-selected]=\"day.isSelected\"\r\n      (click)=\"selectDate(day)\"\r\n    >\r\n      {{ day.date.getDate() }}\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Time picker -->\r\n  <div *ngIf=\"showTime\" class=\"ui-calendar__time\">\r\n    <label class=\"ui-calendar__time-label\">Time:</label>\r\n    <input\r\n      type=\"number\"\r\n      class=\"ui-calendar__time-input\"\r\n      [ngModel]=\"selectedHours\"\r\n      (ngModelChange)=\"selectedHours = $event; onTimeChange()\"\r\n      min=\"0\"\r\n      max=\"23\"\r\n      aria-label=\"Hours\"\r\n    />\r\n    <span class=\"ui-calendar__time-separator\">:</span>\r\n    <input\r\n      type=\"number\"\r\n      class=\"ui-calendar__time-input\"\r\n      [ngModel]=\"selectedMinutes\"\r\n      (ngModelChange)=\"selectedMinutes = $event; onTimeChange()\"\r\n      min=\"0\"\r\n      max=\"59\"\r\n      aria-label=\"Minutes\"\r\n    />\r\n  </div>\r\n</div>\r\n", styles: [".ui-calendar{display:inline-flex;flex-direction:column;padding:16px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-lg, 8px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif)}.ui-calendar:focus{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}.ui-calendar__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.ui-calendar__month-year{font-size:var(--font-size-base, 14px);font-weight:var(--font-weight-semibold, 600);color:var(--color-text, #222)}.ui-calendar__nav-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:var(--radius-sm, 4px);background-color:transparent;color:var(--color-text, #222);font-size:18px;cursor:pointer;transition:background-color .15s ease}.ui-calendar__nav-btn:hover{background-color:var(--color-surface, #f6f7f8)}.ui-calendar__weekdays{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:8px}.ui-calendar__weekday{display:flex;align-items:center;justify-content:center;height:32px;font-size:var(--font-size-sm, 12px);font-weight:var(--font-weight-medium, 500);color:var(--color-secondary, #6b7280)}.ui-calendar__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.ui-calendar__day{display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:none;border-radius:var(--radius-sm, 4px);background-color:transparent;color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);cursor:pointer;transition:background-color .15s ease}.ui-calendar__day:hover:not(:disabled){background-color:var(--color-surface, #f6f7f8)}.ui-calendar__day--other-month{color:var(--color-secondary, #6b7280);opacity:.5}.ui-calendar__day--today{font-weight:var(--font-weight-bold, 700);color:var(--color-primary, #3b82f6)}.ui-calendar__day--selected{background-color:var(--color-primary, #3b82f6);color:#fff}.ui-calendar__day--selected:hover{background-color:var(--color-primary, #3b82f6)}.ui-calendar__day--in-range{background-color:#3b82f61a}.ui-calendar__day--disabled{opacity:.3;cursor:not-allowed}.ui-calendar__day--focused{outline:2px solid var(--color-primary, #3b82f6);outline-offset:-2px}.ui-calendar__time{display:flex;align-items:center;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--color-border, #d1d5db)}.ui-calendar__time-label{font-size:var(--font-size-sm, 14px);color:var(--color-text, #222)}.ui-calendar__time-input{width:48px;height:32px;padding:0 8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);text-align:center}.ui-calendar__time-separator{font-size:var(--font-size-base, 14px);color:var(--color-text, #222)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2.MaxValidator, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: ["max"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-calendar', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ui-calendar\" (keydown)=\"onKeyDown($event)\" tabindex=\"0\">\r\n  <!-- Header with navigation -->\r\n  <div class=\"ui-calendar__header\">\r\n    <button \r\n      type=\"button\" \r\n      class=\"ui-calendar__nav-btn\"\r\n      aria-label=\"Previous month\"\r\n      (click)=\"previousMonth()\"\r\n    >\r\n      \u2039\r\n    </button>\r\n    <span class=\"ui-calendar__month-year\">{{ monthYearLabel }}</span>\r\n    <button \r\n      type=\"button\" \r\n      class=\"ui-calendar__nav-btn\"\r\n      aria-label=\"Next month\"\r\n      (click)=\"nextMonth()\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Weekday headers -->\r\n  <div class=\"ui-calendar__weekdays\">\r\n    <span *ngFor=\"let day of weekDays\" class=\"ui-calendar__weekday\">\r\n      {{ day }}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- Calendar grid -->\r\n  <div class=\"ui-calendar__grid\" role=\"grid\">\r\n    <button\r\n      *ngFor=\"let day of calendarDays; trackBy: trackByDate\"\r\n      type=\"button\"\r\n      class=\"ui-calendar__day\"\r\n      [class.ui-calendar__day--other-month]=\"!day.isCurrentMonth\"\r\n      [class.ui-calendar__day--today]=\"day.isToday\"\r\n      [class.ui-calendar__day--selected]=\"day.isSelected\"\r\n      [class.ui-calendar__day--in-range]=\"day.isInRange\"\r\n      [class.ui-calendar__day--disabled]=\"day.isDisabled\"\r\n      [class.ui-calendar__day--focused]=\"isSameDayPublic(day.date, focusedDate)\"\r\n      [disabled]=\"day.isDisabled\"\r\n      [attr.aria-selected]=\"day.isSelected\"\r\n      (click)=\"selectDate(day)\"\r\n    >\r\n      {{ day.date.getDate() }}\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Time picker -->\r\n  <div *ngIf=\"showTime\" class=\"ui-calendar__time\">\r\n    <label class=\"ui-calendar__time-label\">Time:</label>\r\n    <input\r\n      type=\"number\"\r\n      class=\"ui-calendar__time-input\"\r\n      [ngModel]=\"selectedHours\"\r\n      (ngModelChange)=\"selectedHours = $event; onTimeChange()\"\r\n      min=\"0\"\r\n      max=\"23\"\r\n      aria-label=\"Hours\"\r\n    />\r\n    <span class=\"ui-calendar__time-separator\">:</span>\r\n    <input\r\n      type=\"number\"\r\n      class=\"ui-calendar__time-input\"\r\n      [ngModel]=\"selectedMinutes\"\r\n      (ngModelChange)=\"selectedMinutes = $event; onTimeChange()\"\r\n      min=\"0\"\r\n      max=\"59\"\r\n      aria-label=\"Minutes\"\r\n    />\r\n  </div>\r\n</div>\r\n", styles: [".ui-calendar{display:inline-flex;flex-direction:column;padding:16px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-lg, 8px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif)}.ui-calendar:focus{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}.ui-calendar__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.ui-calendar__month-year{font-size:var(--font-size-base, 14px);font-weight:var(--font-weight-semibold, 600);color:var(--color-text, #222)}.ui-calendar__nav-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:var(--radius-sm, 4px);background-color:transparent;color:var(--color-text, #222);font-size:18px;cursor:pointer;transition:background-color .15s ease}.ui-calendar__nav-btn:hover{background-color:var(--color-surface, #f6f7f8)}.ui-calendar__weekdays{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:8px}.ui-calendar__weekday{display:flex;align-items:center;justify-content:center;height:32px;font-size:var(--font-size-sm, 12px);font-weight:var(--font-weight-medium, 500);color:var(--color-secondary, #6b7280)}.ui-calendar__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.ui-calendar__day{display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:none;border-radius:var(--radius-sm, 4px);background-color:transparent;color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);cursor:pointer;transition:background-color .15s ease}.ui-calendar__day:hover:not(:disabled){background-color:var(--color-surface, #f6f7f8)}.ui-calendar__day--other-month{color:var(--color-secondary, #6b7280);opacity:.5}.ui-calendar__day--today{font-weight:var(--font-weight-bold, 700);color:var(--color-primary, #3b82f6)}.ui-calendar__day--selected{background-color:var(--color-primary, #3b82f6);color:#fff}.ui-calendar__day--selected:hover{background-color:var(--color-primary, #3b82f6)}.ui-calendar__day--in-range{background-color:#3b82f61a}.ui-calendar__day--disabled{opacity:.3;cursor:not-allowed}.ui-calendar__day--focused{outline:2px solid var(--color-primary, #3b82f6);outline-offset:-2px}.ui-calendar__time{display:flex;align-items:center;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--color-border, #d1d5db)}.ui-calendar__time-label{font-size:var(--font-size-sm, 14px);color:var(--color-text, #222)}.ui-calendar__time-input{width:48px;height:32px;padding:0 8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);text-align:center}.ui-calendar__time-separator{font-size:var(--font-size-base, 14px);color:var(--color-text, #222)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { mode: [{
                type: Input
            }], value: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], showTime: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

/**
 * UI Search Component
 *
 * A search field component with debounce functionality.
 * Emits valueChange events after the debounce period.
 */
class SearchComponent {
    /** Placeholder text for the search input */
    placeholder = 'Search...';
    /** Current search value */
    value = '';
    /** Debounce time in milliseconds */
    debounce = DEFAULT_DEBOUNCE_MS;
    /** Whether the search input is disabled */
    disabled = false;
    /** Event emitted when value changes (after debounce) */
    valueChange = new EventEmitter();
    /** Subject for debouncing input */
    searchSubject = new Subject();
    subscription = null;
    ngOnInit() {
        this.setupDebounce();
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    /** Set up debounced value emission */
    setupDebounce() {
        this.subscription = this.searchSubject.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe(value => {
            this.valueChange.emit(value);
        });
    }
    /** Get CSS classes for the search wrapper */
    get wrapperClasses() {
        return {
            'ui-search': true,
            'ui-search--disabled': this.disabled
        };
    }
    /** Handle input value changes */
    onInputChange(event) {
        if (this.disabled)
            return;
        const target = event.target;
        this.value = target.value;
        this.searchSubject.next(this.value);
    }
    /** Handle Escape key to clear the search */
    onKeyDown(event) {
        if (event.key === 'Escape' && !this.disabled) {
            this.clearSearch();
        }
    }
    /** Clear the search value */
    clearSearch() {
        this.value = '';
        this.searchSubject.next('');
        this.valueChange.emit('');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SearchComponent, isStandalone: true, selector: "ui-search", inputs: { placeholder: "placeholder", value: "value", debounce: "debounce", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Search icon -->\r\n  <span class=\"ui-search__icon\" aria-hidden=\"true\">\r\n    \uD83D\uDD0D\r\n  </span>\r\n\r\n  <!-- Search input -->\r\n  <input\r\n    type=\"text\"\r\n    class=\"ui-search__input\"\r\n    [value]=\"value\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [attr.aria-label]=\"placeholder\"\r\n    (input)=\"onInputChange($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n\r\n  <!-- Clear button -->\r\n  <button\r\n    *ngIf=\"value && !disabled\"\r\n    type=\"button\"\r\n    class=\"ui-search__clear\"\r\n    aria-label=\"Clear search\"\r\n    (click)=\"clearSearch()\"\r\n  >\r\n    \u2715\r\n  </button>\r\n</div>\r\n", styles: [".ui-search{display:flex;align-items:center;height:42px;padding:0 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);transition:border-color .15s ease,box-shadow .15s ease}.ui-search:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-search--disabled{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-search__icon{flex-shrink:0;margin-right:8px;color:var(--color-secondary, #6b7280);font-size:14px}.ui-search__input{flex:1;height:100%;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-search__input::placeholder{color:var(--color-secondary, #6b7280)}.ui-search__input:disabled{cursor:not-allowed}.ui-search__clear{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:8px;padding:0;border:none;border-radius:50%;background-color:var(--color-surface, #f6f7f8);color:var(--color-secondary, #6b7280);font-size:12px;cursor:pointer;transition:background-color .15s ease}.ui-search__clear:hover{background-color:var(--color-border, #d1d5db)}.ui-search__clear:focus-visible{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-search', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Search icon -->\r\n  <span class=\"ui-search__icon\" aria-hidden=\"true\">\r\n    \uD83D\uDD0D\r\n  </span>\r\n\r\n  <!-- Search input -->\r\n  <input\r\n    type=\"text\"\r\n    class=\"ui-search__input\"\r\n    [value]=\"value\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [attr.aria-label]=\"placeholder\"\r\n    (input)=\"onInputChange($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n\r\n  <!-- Clear button -->\r\n  <button\r\n    *ngIf=\"value && !disabled\"\r\n    type=\"button\"\r\n    class=\"ui-search__clear\"\r\n    aria-label=\"Clear search\"\r\n    (click)=\"clearSearch()\"\r\n  >\r\n    \u2715\r\n  </button>\r\n</div>\r\n", styles: [".ui-search{display:flex;align-items:center;height:42px;padding:0 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);transition:border-color .15s ease,box-shadow .15s ease}.ui-search:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-search--disabled{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-search__icon{flex-shrink:0;margin-right:8px;color:var(--color-secondary, #6b7280);font-size:14px}.ui-search__input{flex:1;height:100%;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-search__input::placeholder{color:var(--color-secondary, #6b7280)}.ui-search__input:disabled{cursor:not-allowed}.ui-search__clear{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:8px;padding:0;border:none;border-radius:50%;background-color:var(--color-surface, #f6f7f8);color:var(--color-secondary, #6b7280);font-size:12px;cursor:pointer;transition:background-color .15s ease}.ui-search__clear:hover{background-color:var(--color-border, #d1d5db)}.ui-search__clear:focus-visible{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], debounce: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

/**
 * UI Table Component
 *
 * A dynamic table component with sorting, pagination, search, and column management.
 */
class TableComponent {
    cdr;
    /** Column configuration */
    columns = [];
    /** Table data */
    data = [];
    /** Number of items per page */
    pageSize = 10;
    /** Whether search is enabled */
    searchable = false;
    /** Whether sorting is enabled */
    sortable = false;
    /** Whether column manager is enabled */
    columnManager = false;
    /** Whether to use server-side mode */
    serverMode = false;
    /** Sort change event */
    sortChange = new EventEmitter();
    /** Page change event */
    pageChange = new EventEmitter();
    /** Search change event */
    searchChange = new EventEmitter();
    /** Column visibility change event */
    columnVisibilityChange = new EventEmitter();
    /** Row click event */
    rowClick = new EventEmitter();
    /** Available page sizes */
    pageSizes = DEFAULT_PAGE_SIZES;
    /** Current page (1-indexed) */
    currentPage = 1;
    /** Current sort state */
    sortField = null;
    sortDirection = null;
    /** Search query */
    searchQuery = '';
    /** Column manager dropdown state */
    columnManagerOpen = false;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnChanges(changes) {
        if (changes['data'] || changes['pageSize']) {
            this.currentPage = 1;
        }
    }
    /** Get visible columns */
    get visibleColumns() {
        return this.columns.filter(col => col.visible !== false);
    }
    /** Get displayed data (with pagination, sorting, filtering if not server mode) */
    get displayedData() {
        if (this.serverMode) {
            return this.data;
        }
        let result = [...this.data];
        // Apply search filter
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            result = result.filter(row => this.visibleColumns.some(col => {
                const value = row[col.field];
                return value && String(value).toLowerCase().includes(query);
            }));
        }
        // Apply sorting
        if (this.sortField && this.sortDirection) {
            result.sort((a, b) => {
                const aVal = a[this.sortField];
                const bVal = b[this.sortField];
                const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                return this.sortDirection === 'asc' ? comparison : -comparison;
            });
        }
        // Apply pagination
        const start = (this.currentPage - 1) * this.pageSize;
        return result.slice(start, start + this.pageSize);
    }
    /** Get total number of pages */
    get totalPages() {
        if (this.serverMode) {
            return Math.ceil(this.data.length / this.pageSize);
        }
        let filteredLength = this.data.length;
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filteredLength = this.data.filter(row => this.visibleColumns.some(col => {
                const value = row[col.field];
                return value && String(value).toLowerCase().includes(query);
            })).length;
        }
        return Math.ceil(filteredLength / this.pageSize);
    }
    /** Handle column header click for sorting */
    onHeaderClick(column) {
        if (!this.sortable || column.sortable === false)
            return;
        if (this.sortField === column.field) {
            // Cycle: null -> asc -> desc -> null
            if (this.sortDirection === null) {
                this.sortDirection = 'asc';
            }
            else if (this.sortDirection === 'asc') {
                this.sortDirection = 'desc';
            }
            else {
                this.sortDirection = null;
                this.sortField = null;
            }
        }
        else {
            this.sortField = column.field;
            this.sortDirection = 'asc';
        }
        this.sortChange.emit({
            field: this.sortField || column.field,
            direction: this.sortDirection
        });
        this.cdr.markForCheck();
    }
    /** Handle page change */
    goToPage(page) {
        if (page < 1 || page > this.totalPages)
            return;
        this.currentPage = page;
        this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
        this.cdr.markForCheck();
    }
    /** Handle page size change */
    onPageSizeChange(newSize) {
        this.pageSize = newSize;
        this.currentPage = 1;
        this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
        this.cdr.markForCheck();
    }
    /** Handle search input */
    onSearch(query) {
        this.searchQuery = query;
        this.currentPage = 1;
        this.searchChange.emit(query);
        this.cdr.markForCheck();
    }
    /** Toggle column visibility */
    toggleColumnVisibility(column) {
        column.visible = column.visible === false ? true : false;
        this.columnVisibilityChange.emit([...this.columns]);
        this.cdr.markForCheck();
    }
    /** Toggle column manager dropdown */
    toggleColumnManager() {
        this.columnManagerOpen = !this.columnManagerOpen;
        this.cdr.markForCheck();
    }
    /** Handle row click */
    onRowClick(row) {
        this.rowClick.emit(row);
    }
    /** Handle keyboard navigation */
    onKeyDown(event, row) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.onRowClick(row);
        }
    }
    /** Get sort indicator for column */
    getSortIndicator(column) {
        if (this.sortField !== column.field)
            return '';
        if (this.sortDirection === 'asc')
            return '↑';
        if (this.sortDirection === 'desc')
            return '↓';
        return '';
    }
    /** Track by function for rows */
    trackByIndex(index) {
        return index;
    }
    /** Track by function for columns */
    trackByField(index, column) {
        return column.field;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableComponent, isStandalone: true, selector: "ui-table", inputs: { columns: "columns", data: "data", pageSize: "pageSize", searchable: "searchable", sortable: "sortable", columnManager: "columnManager", serverMode: "serverMode" }, outputs: { sortChange: "sortChange", pageChange: "pageChange", searchChange: "searchChange", columnVisibilityChange: "columnVisibilityChange", rowClick: "rowClick" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"ui-table\">\r\n  <!-- Toolbar -->\r\n  <div class=\"ui-table__toolbar\" *ngIf=\"searchable || columnManager\">\r\n    <!-- Search -->\r\n    <ui-search\r\n      *ngIf=\"searchable\"\r\n      [value]=\"searchQuery\"\r\n      placeholder=\"Search...\"\r\n      (valueChange)=\"onSearch($event)\"\r\n    ></ui-search>\r\n\r\n    <!-- Column manager -->\r\n    <div class=\"ui-table__column-manager\" *ngIf=\"columnManager\">\r\n      <button \r\n        type=\"button\" \r\n        class=\"ui-table__column-btn\"\r\n        (click)=\"toggleColumnManager()\"\r\n        aria-label=\"Manage columns\"\r\n      >\r\n        Columns \u25BC\r\n      </button>\r\n      <div class=\"ui-table__column-dropdown\" *ngIf=\"columnManagerOpen\">\r\n        <label \r\n          *ngFor=\"let col of columns; trackBy: trackByField\" \r\n          class=\"ui-table__column-option\"\r\n        >\r\n          <input\r\n            type=\"checkbox\"\r\n            [checked]=\"col.visible !== false\"\r\n            (change)=\"toggleColumnVisibility(col)\"\r\n          />\r\n          {{ col.title }}\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <div class=\"ui-table__wrapper\">\r\n    <table class=\"ui-table__table\" role=\"grid\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            *ngFor=\"let col of visibleColumns; trackBy: trackByField\"\r\n            [style.width]=\"col.width\"\r\n            [class.ui-table__th--sortable]=\"sortable && col.sortable !== false\"\r\n            (click)=\"onHeaderClick(col)\"\r\n            [attr.aria-sort]=\"sortField === col.field ? sortDirection : null\"\r\n          >\r\n            {{ col.title }}\r\n            <span *ngIf=\"sortable && col.sortable !== false\" class=\"ui-table__sort-indicator\">\r\n              {{ getSortIndicator(col) }}\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let row of displayedData; let i = index; trackBy: trackByIndex\"\r\n          tabindex=\"0\"\r\n          (click)=\"onRowClick(row)\"\r\n          (keydown)=\"onKeyDown($event, row)\"\r\n        >\r\n          <td *ngFor=\"let col of visibleColumns; trackBy: trackByField\">\r\n            {{ row[col.field] }}\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"displayedData.length === 0\">\r\n          <td [attr.colspan]=\"visibleColumns.length\" class=\"ui-table__empty\">\r\n            No data available\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!-- Pagination -->\r\n  <div class=\"ui-table__pagination\">\r\n    <div class=\"ui-table__page-size\">\r\n      <label>\r\n        Rows per page:\r\n        <select [ngModel]=\"pageSize\" (ngModelChange)=\"onPageSizeChange($event)\">\r\n          <option *ngFor=\"let size of pageSizes\" [value]=\"size\">{{ size }}</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"ui-table__page-info\">\r\n      Page {{ currentPage }} of {{ totalPages || 1 }}\r\n    </div>\r\n\r\n    <div class=\"ui-table__page-controls\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"ui-table__page-btn\"\r\n        [disabled]=\"currentPage <= 1\"\r\n        (click)=\"goToPage(currentPage - 1)\"\r\n        aria-label=\"Previous page\"\r\n      >\r\n        \u2039\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"ui-table__page-btn\"\r\n        [disabled]=\"currentPage >= totalPages\"\r\n        (click)=\"goToPage(currentPage + 1)\"\r\n        aria-label=\"Next page\"\r\n      >\r\n        \u203A\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".ui-table{display:flex;flex-direction:column;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);overflow:hidden}.ui-table__toolbar{display:flex;align-items:center;gap:12px;padding:12px;border-bottom:1px solid var(--color-border, #d1d5db);background-color:var(--color-surface, #f6f7f8)}.ui-table__column-manager{position:relative;margin-left:auto}.ui-table__column-btn{padding:8px 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);cursor:pointer}.ui-table__column-dropdown{position:absolute;top:100%;right:0;z-index:10;min-width:150px;margin-top:4px;padding:8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);box-shadow:0 4px 6px #0000001a}.ui-table__column-option{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:var(--font-size-sm, 14px);cursor:pointer}.ui-table__wrapper{overflow-x:auto}.ui-table__table{width:100%;border-collapse:collapse}.ui-table__table th{padding:12px;text-align:left;font-size:var(--font-size-sm, 14px);font-weight:var(--font-weight-semibold, 600);color:var(--color-text, #222);background-color:var(--color-surface, #f6f7f8);border-bottom:1px solid var(--color-border, #d1d5db)}.ui-table__th--sortable{cursor:pointer;-webkit-user-select:none;user-select:none}.ui-table__th--sortable:hover{background-color:var(--color-border, #d1d5db)}.ui-table__sort-indicator{margin-left:4px;font-size:12px}.ui-table__table td{padding:12px;font-size:var(--font-size-sm, 14px);color:var(--color-text, #222);border-bottom:1px solid var(--color-border, #d1d5db)}.ui-table__table tbody tr{cursor:pointer;transition:background-color .15s ease}.ui-table__table tbody tr:hover{background-color:var(--color-hover, rgba(0, 0, 0, .05))}.ui-table__table tbody tr:focus{outline:2px solid var(--color-primary, #3b82f6);outline-offset:-2px}.ui-table__empty{text-align:center;color:var(--color-secondary, #6b7280);padding:24px!important}.ui-table__pagination{display:flex;align-items:center;justify-content:flex-end;gap:16px;padding:12px;border-top:1px solid var(--color-border, #d1d5db);background-color:var(--color-surface, #f6f7f8)}.ui-table__page-size select{margin-left:8px;padding:4px 8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px)}.ui-table__page-info{font-size:var(--font-size-sm, 14px);color:var(--color-secondary, #6b7280)}.ui-table__page-controls{display:flex;gap:4px}.ui-table__page-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:16px;cursor:pointer;transition:background-color .15s ease}.ui-table__page-btn:hover:not(:disabled){background-color:var(--color-surface, #f6f7f8)}.ui-table__page-btn:disabled{opacity:.5;cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: SearchComponent, selector: "ui-search", inputs: ["placeholder", "value", "debounce", "disabled"], outputs: ["valueChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-table', standalone: true, imports: [CommonModule, FormsModule, SearchComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ui-table\">\r\n  <!-- Toolbar -->\r\n  <div class=\"ui-table__toolbar\" *ngIf=\"searchable || columnManager\">\r\n    <!-- Search -->\r\n    <ui-search\r\n      *ngIf=\"searchable\"\r\n      [value]=\"searchQuery\"\r\n      placeholder=\"Search...\"\r\n      (valueChange)=\"onSearch($event)\"\r\n    ></ui-search>\r\n\r\n    <!-- Column manager -->\r\n    <div class=\"ui-table__column-manager\" *ngIf=\"columnManager\">\r\n      <button \r\n        type=\"button\" \r\n        class=\"ui-table__column-btn\"\r\n        (click)=\"toggleColumnManager()\"\r\n        aria-label=\"Manage columns\"\r\n      >\r\n        Columns \u25BC\r\n      </button>\r\n      <div class=\"ui-table__column-dropdown\" *ngIf=\"columnManagerOpen\">\r\n        <label \r\n          *ngFor=\"let col of columns; trackBy: trackByField\" \r\n          class=\"ui-table__column-option\"\r\n        >\r\n          <input\r\n            type=\"checkbox\"\r\n            [checked]=\"col.visible !== false\"\r\n            (change)=\"toggleColumnVisibility(col)\"\r\n          />\r\n          {{ col.title }}\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <div class=\"ui-table__wrapper\">\r\n    <table class=\"ui-table__table\" role=\"grid\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            *ngFor=\"let col of visibleColumns; trackBy: trackByField\"\r\n            [style.width]=\"col.width\"\r\n            [class.ui-table__th--sortable]=\"sortable && col.sortable !== false\"\r\n            (click)=\"onHeaderClick(col)\"\r\n            [attr.aria-sort]=\"sortField === col.field ? sortDirection : null\"\r\n          >\r\n            {{ col.title }}\r\n            <span *ngIf=\"sortable && col.sortable !== false\" class=\"ui-table__sort-indicator\">\r\n              {{ getSortIndicator(col) }}\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let row of displayedData; let i = index; trackBy: trackByIndex\"\r\n          tabindex=\"0\"\r\n          (click)=\"onRowClick(row)\"\r\n          (keydown)=\"onKeyDown($event, row)\"\r\n        >\r\n          <td *ngFor=\"let col of visibleColumns; trackBy: trackByField\">\r\n            {{ row[col.field] }}\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"displayedData.length === 0\">\r\n          <td [attr.colspan]=\"visibleColumns.length\" class=\"ui-table__empty\">\r\n            No data available\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!-- Pagination -->\r\n  <div class=\"ui-table__pagination\">\r\n    <div class=\"ui-table__page-size\">\r\n      <label>\r\n        Rows per page:\r\n        <select [ngModel]=\"pageSize\" (ngModelChange)=\"onPageSizeChange($event)\">\r\n          <option *ngFor=\"let size of pageSizes\" [value]=\"size\">{{ size }}</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"ui-table__page-info\">\r\n      Page {{ currentPage }} of {{ totalPages || 1 }}\r\n    </div>\r\n\r\n    <div class=\"ui-table__page-controls\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"ui-table__page-btn\"\r\n        [disabled]=\"currentPage <= 1\"\r\n        (click)=\"goToPage(currentPage - 1)\"\r\n        aria-label=\"Previous page\"\r\n      >\r\n        \u2039\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"ui-table__page-btn\"\r\n        [disabled]=\"currentPage >= totalPages\"\r\n        (click)=\"goToPage(currentPage + 1)\"\r\n        aria-label=\"Next page\"\r\n      >\r\n        \u203A\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".ui-table{display:flex;flex-direction:column;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);overflow:hidden}.ui-table__toolbar{display:flex;align-items:center;gap:12px;padding:12px;border-bottom:1px solid var(--color-border, #d1d5db);background-color:var(--color-surface, #f6f7f8)}.ui-table__column-manager{position:relative;margin-left:auto}.ui-table__column-btn{padding:8px 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px);cursor:pointer}.ui-table__column-dropdown{position:absolute;top:100%;right:0;z-index:10;min-width:150px;margin-top:4px;padding:8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);box-shadow:0 4px 6px #0000001a}.ui-table__column-option{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:var(--font-size-sm, 14px);cursor:pointer}.ui-table__wrapper{overflow-x:auto}.ui-table__table{width:100%;border-collapse:collapse}.ui-table__table th{padding:12px;text-align:left;font-size:var(--font-size-sm, 14px);font-weight:var(--font-weight-semibold, 600);color:var(--color-text, #222);background-color:var(--color-surface, #f6f7f8);border-bottom:1px solid var(--color-border, #d1d5db)}.ui-table__th--sortable{cursor:pointer;-webkit-user-select:none;user-select:none}.ui-table__th--sortable:hover{background-color:var(--color-border, #d1d5db)}.ui-table__sort-indicator{margin-left:4px;font-size:12px}.ui-table__table td{padding:12px;font-size:var(--font-size-sm, 14px);color:var(--color-text, #222);border-bottom:1px solid var(--color-border, #d1d5db)}.ui-table__table tbody tr{cursor:pointer;transition:background-color .15s ease}.ui-table__table tbody tr:hover{background-color:var(--color-hover, rgba(0, 0, 0, .05))}.ui-table__table tbody tr:focus{outline:2px solid var(--color-primary, #3b82f6);outline-offset:-2px}.ui-table__empty{text-align:center;color:var(--color-secondary, #6b7280);padding:24px!important}.ui-table__pagination{display:flex;align-items:center;justify-content:flex-end;gap:16px;padding:12px;border-top:1px solid var(--color-border, #d1d5db);background-color:var(--color-surface, #f6f7f8)}.ui-table__page-size select{margin-left:8px;padding:4px 8px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:var(--font-size-sm, 14px)}.ui-table__page-info{font-size:var(--font-size-sm, 14px);color:var(--color-secondary, #6b7280)}.ui-table__page-controls{display:flex;gap:4px}.ui-table__page-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-sm, 4px);background-color:var(--color-bg, #ffffff);color:var(--color-text, #222);font-size:16px;cursor:pointer;transition:background-color .15s ease}.ui-table__page-btn:hover:not(:disabled){background-color:var(--color-surface, #f6f7f8)}.ui-table__page-btn:disabled{opacity:.5;cursor:not-allowed}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { columns: [{
                type: Input
            }], data: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], searchable: [{
                type: Input
            }], sortable: [{
                type: Input
            }], columnManager: [{
                type: Input
            }], serverMode: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], pageChange: [{
                type: Output
            }], searchChange: [{
                type: Output
            }], columnVisibilityChange: [{
                type: Output
            }], rowClick: [{
                type: Output
            }] } });

/*
 * Public API Surface of ui-lib
 */
// Theme
// Note: Import 'ui-lib/styles.css' in your application to include all styles

/**
 * Generated bundle index. Do not edit.
 */

export { BUTTON_SIZES, ButtonComponent, CalendarComponent, DARK_THEME, DEFAULT_DEBOUNCE_MS, DEFAULT_PAGE_SIZES, InputComponent, LIGHT_THEME, SearchComponent, THEMES, TableComponent, ThemeService };
//# sourceMappingURL=ui-lib.mjs.map
