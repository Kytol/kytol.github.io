import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_SIZES } from '../shared/types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * UI Button Component
 *
 * A reusable button component with variants, sizes, and states.
 * Supports icons, loading state, and full keyboard accessibility.
 */
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCx1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBNkIsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUUxRTs7Ozs7R0FLRztBQVNILE1BQU0sT0FBTyxlQUFlO0lBeUJOO0lBeEJwQiw0QkFBNEI7SUFDbkIsT0FBTyxHQUFrQixTQUFTLENBQUM7SUFFNUMsa0JBQWtCO0lBQ1QsSUFBSSxHQUFlLElBQUksQ0FBQztJQUVqQyxxQ0FBcUM7SUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUUxQiw2Q0FBNkM7SUFDcEMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUV6Qix1Q0FBdUM7SUFDOUIsUUFBUSxHQUFrQixJQUFJLENBQUM7SUFFeEMsd0NBQXdDO0lBQy9CLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0lBRXpDLDBCQUEwQjtJQUNoQixPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVuRCxxRUFBcUU7SUFDckUsY0FBYyxHQUFHLElBQUksQ0FBQztJQUV0QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5QywwQ0FBMEM7SUFDMUMsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FB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S0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixPQUFPO1lBQ1QsQ0FBQztZQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQztJQUNILENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsaUJBQWlCLENBQUMsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7SUFDbkMsQ0FBQzt3R0FqSFUsZUFBZTs0RkFBZixlQUFlLDBTQzNCNUIsbTVDQTZDQSx1bUZEdkJZLFlBQVk7OzRGQUtYLGVBQWU7a0JBUjNCLFNBQVM7K0JBQ0UsV0FBVyxjQUNULElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNOytFQUl0QyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0csSUFBSTtzQkFBWixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csT0FBTztzQkFBZixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHSSxPQUFPO3NCQUFoQixNQUFNO2dCQVNILFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LCBcclxuICBJbnB1dCwgXHJcbiAgT3V0cHV0LCBcclxuICBFdmVudEVtaXR0ZXIsIFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCdXR0b25WYXJpYW50LCBCdXR0b25TaXplLCBCVVRUT05fU0laRVMgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIFVJIEJ1dHRvbiBDb21wb25lbnRcclxuICogXHJcbiAqIEEgcmV1c2FibGUgYnV0dG9uIGNvbXBvbmVudCB3aXRoIHZhcmlhbnRzLCBzaXplcywgYW5kIHN0YXRlcy5cclxuICogU3VwcG9ydHMgaWNvbnMsIGxvYWRpbmcgc3RhdGUsIGFuZCBmdWxsIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLWJ1dHRvbicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICAvKiogQnV0dG9uIHZpc3VhbCB2YXJpYW50ICovXHJcbiAgQElucHV0KCkgdmFyaWFudDogQnV0dG9uVmFyaWFudCA9ICdwcmltYXJ5JztcclxuICBcclxuICAvKiogQnV0dG9uIHNpemUgKi9cclxuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplID0gJ21kJztcclxuICBcclxuICAvKiogV2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBcclxuICAvKiogV2hldGhlciB0aGUgYnV0dG9uIGlzIGluIGxvYWRpbmcgc3RhdGUgKi9cclxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgXHJcbiAgLyoqIEljb24gdG8gZGlzcGxheSBvbiB0aGUgbGVmdCBzaWRlICovXHJcbiAgQElucHV0KCkgaWNvbkxlZnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIFxyXG4gIC8qKiBJY29uIHRvIGRpc3BsYXkgb24gdGhlIHJpZ2h0IHNpZGUgKi9cclxuICBASW5wdXQoKSBpY29uUmlnaHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIFxyXG4gIC8qKiBDbGljayBldmVudCBlbWl0dGVyICovXHJcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKiBUcmFjayBpZiB0aGVyZSdzIHRleHQgY29udGVudCAtIHdpbGwgYmUgc2V0IGFmdGVyIGNvbnRlbnQgaW5pdCAqL1xyXG4gIGhhc1RleHRDb250ZW50ID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICAvKiogSG9zdCBiaW5kaW5nIGZvciBkaXNhYmxlZCBhdHRyaWJ1dGUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZyA/IHRydWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBDU1MgY2xhc3NlcyBiYXNlZCBvbiB2YXJpYW50IGFuZCBzaXplICovXHJcbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKTogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ3VpLWJ1dHRvbic6IHRydWUsXHJcbiAgICAgIFtgdWktYnV0dG9uLS0ke3RoaXMudmFyaWFudH1gXTogdHJ1ZSxcclxuICAgICAgW2B1aS1idXR0b24tLSR7dGhpcy5zaXplfWBdOiB0cnVlLFxyXG4gICAgICAndWktYnV0dG9uLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgICd1aS1idXR0b24tLWxvYWRpbmcnOiB0aGlzLmxvYWRpbmcsXHJcbiAgICAgICd1aS1idXR0b24tLWljb24tb25seSc6IHRoaXMuaXNJY29uT25seVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKiBDaGVjayBpZiBidXR0b24gaXMgaWNvbi1vbmx5IChoYXMgaWNvbiBidXQgbm8gdGV4dCBjb250ZW50IHByb2plY3RlZCkgKi9cclxuICBnZXQgaXNJY29uT25seSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5pY29uTGVmdCAhPT0gbnVsbCB8fCB0aGlzLmljb25SaWdodCAhPT0gbnVsbCkgJiYgIXRoaXMuaGFzVGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHBhZGRpbmcgc3R5bGUgYmFzZWQgb24gc2l6ZSAqL1xyXG4gIGdldCBwYWRkaW5nU3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIEZvciBpY29uLW9ubHkgYnV0dG9ucywgdXNlIGVxdWFsIHBhZGRpbmdcclxuICAgIGlmICh0aGlzLmlzSWNvbk9ubHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SWNvbk9ubHlQYWRkaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQlVUVE9OX1NJWkVTW3RoaXMuc2l6ZV0/LnBhZGRpbmcgfHwgQlVUVE9OX1NJWkVTLm1kLnBhZGRpbmc7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGljb24tb25seSBwYWRkaW5nIGJhc2VkIG9uIHNpemUgKi9cclxuICBwcml2YXRlIGdldEljb25Pbmx5UGFkZGluZygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcclxuICAgICAgY2FzZSAnc20nOiByZXR1cm4gJzRweCc7XHJcbiAgICAgIGNhc2UgJ2xnJzogcmV0dXJuICcxMHB4JztcclxuICAgICAgY2FzZSAnbWQnOlxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gJzZweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IGZvbnQgc2l6ZSBzdHlsZSBiYXNlZCBvbiBzaXplICovXHJcbiAgZ2V0IGZvbnRTaXplU3R5bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBCVVRUT05fU0laRVNbdGhpcy5zaXplXT8uZm9udFNpemUgfHwgQlVUVE9OX1NJWkVTLm1kLmZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrIGZvciB0ZXh0IGNvbnRlbnQgYWZ0ZXIgY29udGVudCBpcyBpbml0aWFsaXplZCAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tUZXh0Q29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrIGlmIHRoZXJlJ3MgbWVhbmluZ2Z1bCB0ZXh0IGNvbnRlbnQgaW4gdGhlIHByb2plY3RlZCBjb250ZW50ICovXHJcbiAgcHJpdmF0ZSBjaGVja1RleHRDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWktYnV0dG9uX19jb250ZW50Jyk7XHJcbiAgICBpZiAoY29udGVudEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBjb250ZW50RWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnO1xyXG4gICAgICB0aGlzLmhhc1RleHRDb250ZW50ID0gdGV4dENvbnRlbnQubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGUgY2xpY2sgZXZlbnRzICovXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsaWNrZWQuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgYWNjZXNzaWJpbGl0eSAoRW50ZXIgYW5kIFNwYWNlIGtleXMpICovXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMubG9hZGluZykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVXBkYXRlIHRleHQgY29udGVudCBzdGF0dXMgLSBjYW4gYmUgY2FsbGVkIGZyb20gdGVtcGxhdGUgKi9cclxuICB1cGRhdGVUZXh0Q29udGVudChoYXNDb250ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhc1RleHRDb250ZW50ID0gaGFzQ29udGVudDtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxyXG4gIFtzdHlsZS5wYWRkaW5nXT1cInBhZGRpbmdTdHlsZVwiXHJcbiAgW3N0eWxlLmZvbnRTaXplXT1cImZvbnRTaXplU3R5bGVcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxyXG4gIFthdHRyLmFyaWEtYnVzeV09XCJsb2FkaW5nXCJcclxuICBbYXR0ci50YWJpbmRleF09XCJkaXNhYmxlZCA/IC0xIDogMFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4+XHJcbiAgPCEtLSBMb2FkaW5nIHNwaW5uZXIgb3ZlcmxheSAtLT5cclxuICA8c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInVpLWJ1dHRvbl9fc3Bpbm5lclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgPHN2ZyBjbGFzcz1cInVpLWJ1dHRvbl9fc3Bpbm5lci1pY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIzXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1kYXNoYXJyYXk9XCIzMS40IDMxLjRcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIExlZnQgaWNvbiAtLT5cclxuICA8c3BhbiBcclxuICAgICpuZ0lmPVwiaWNvbkxlZnRcIiBcclxuICAgIGNsYXNzPVwidWktYnV0dG9uX19pY29uIHVpLWJ1dHRvbl9faWNvbi0tbGVmdFwiXHJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgcm9sZT1cImltZ1wiXHJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImljb25MZWZ0XCJcclxuICA+XHJcbiAgICB7eyBpY29uTGVmdCB9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSBCdXR0b24gY29udGVudCAtLT5cclxuICA8c3BhbiBjbGFzcz1cInVpLWJ1dHRvbl9fY29udGVudFwiIFtjbGFzcy51aS1idXR0b25fX2NvbnRlbnQtLWhpZGRlbl09XCJsb2FkaW5nXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIFJpZ2h0IGljb24gLS0+XHJcbiAgPHNwYW4gXHJcbiAgICAqbmdJZj1cImljb25SaWdodFwiIFxyXG4gICAgY2xhc3M9XCJ1aS1idXR0b25fX2ljb24gdWktYnV0dG9uX19pY29uLS1yaWdodFwiXHJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgcm9sZT1cImltZ1wiXHJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImljb25SaWdodFwiXHJcbiAgPlxyXG4gICAge3sgaWNvblJpZ2h0IH19XHJcbiAgPC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19