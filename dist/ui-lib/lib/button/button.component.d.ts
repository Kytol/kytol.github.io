import { EventEmitter, AfterContentInit, ElementRef } from '@angular/core';
import { ButtonVariant, ButtonSize } from '../shared/types';
import * as i0 from "@angular/core";
/**
 * UI Button Component
 *
 * A reusable button component with variants, sizes, and states.
 * Supports icons, loading state, and full keyboard accessibility.
 */
export declare class ButtonComponent implements AfterContentInit {
    private elementRef;
    /** Button visual variant */
    variant: ButtonVariant;
    /** Button size */
    size: ButtonSize;
    /** Whether the button is disabled */
    disabled: boolean;
    /** Whether the button is in loading state */
    loading: boolean;
    /** Icon to display on the left side */
    iconLeft: string | null;
    /** Icon to display on the right side */
    iconRight: string | null;
    /** Click event emitter */
    clicked: EventEmitter<MouseEvent>;
    /** Track if there's text content - will be set after content init */
    hasTextContent: boolean;
    constructor(elementRef: ElementRef);
    /** Host binding for disabled attribute */
    get isDisabled(): boolean | null;
    /** Get CSS classes based on variant and size */
    get buttonClasses(): Record<string, boolean>;
    /** Check if button is icon-only (has icon but no text content projected) */
    get isIconOnly(): boolean;
    /** Get padding style based on size */
    get paddingStyle(): string;
    /** Get icon-only padding based on size */
    private getIconOnlyPadding;
    /** Get font size style based on size */
    get fontSizeStyle(): string;
    /** Check for text content after content is initialized */
    ngAfterContentInit(): void;
    /** Check if there's meaningful text content in the projected content */
    private checkTextContent;
    /** Handle click events */
    onClick(event: MouseEvent): void;
    /** Handle keyboard events for accessibility (Enter and Space keys) */
    onKeyDown(event: KeyboardEvent): void;
    /** Update text content status - can be called from template */
    updateTextContent(hasContent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ui-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "iconLeft": { "alias": "iconLeft"; "required": false; }; "iconRight": { "alias": "iconRight"; "required": false; }; }, { "clicked": "clicked"; }, never, ["*"], true, never>;
}
