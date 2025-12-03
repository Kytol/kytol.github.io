import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputType } from '../shared/types';
import * as i0 from "@angular/core";
/**
 * UI Input Component
 *
 * A reusable input field component with labels, validation states, and icons.
 * Supports reactive forms via ControlValueAccessor.
 */
export declare class InputComponent implements ControlValueAccessor {
    /** Label text displayed above the input */
    label: string;
    /** Placeholder text for the input */
    placeholder: string;
    /** Input type (text, number, email, password) */
    type: InputType;
    /** Current input value */
    value: string;
    /** Whether the input is disabled */
    disabled: boolean;
    /** Error message to display */
    error: string | null;
    /** Icon to display on the left side (prefix) */
    prefixIcon: string | null;
    /** Icon to display on the right side (suffix) */
    suffixIcon: string | null;
    /** Event emitted when value changes */
    valueChange: EventEmitter<string>;
    /** Unique ID for the input element */
    readonly inputId: string;
    /** ControlValueAccessor callbacks */
    private onChange;
    private onTouched;
    /** Get CSS classes for the input wrapper */
    get wrapperClasses(): Record<string, boolean>;
    /** Handle input value changes */
    onInputChange(event: Event): void;
    /** Handle input blur */
    onBlur(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ui-input", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "error": { "alias": "error"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
