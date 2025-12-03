import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/** Unique ID counter for input elements */
let inputIdCounter = 0;
/**
 * UI Input Component
 *
 * A reusable input field component with labels, validation states, and icons.
 * Supports reactive forms via ControlValueAccessor.
 */
export class InputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHdEYsMkNBQTJDO0FBQzNDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUV2Qjs7Ozs7R0FLRztBQWdCSCxNQUFNLE9BQU8sY0FBYztJQUN6QiwyQ0FBMkM7SUFDbEMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixxQ0FBcUM7SUFDNUIsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUUxQixpREFBaUQ7SUFDeEMsSUFBSSxHQUFjLE1BQU0sQ0FBQztJQUVsQywwQkFBMEI7SUFDakIsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixvQ0FBb0M7SUFDM0IsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUUxQiwrQkFBK0I7SUFDdEIsS0FBSyxHQUFrQixJQUFJLENBQUM7SUFFckMsZ0RBQWdEO0lBQ3ZDLFVBQVUsR0FBa0IsSUFBSSxDQUFDO0lBRTFDLGlEQUFpRDtJQUN4QyxVQUFVLEdBQWtCLElBQUksQ0FBQztJQUUxQyx1Q0FBdUM7SUFDN0IsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFbkQsc0NBQXNDO0lBQzdCLE9BQU8sR0FBRyxZQUFZLEVBQUUsY0FBYyxFQUFFLENBQUM7SUFFbEQscUNBQXFDO0lBQzdCLFFBQVEsR0FBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQzdDLFNBQVMsR0FBZSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFHekMsNENBQTRDO0lBQzVDLElBQUksY0FBYztRQUNoQixPQUFPO1lBQ0wsa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qiw0QkFBNEIsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUMzQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ2pELDhCQUE4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFpQztJQUNqQyxhQUFhLENBQUMsS0FBWTtRQUN4QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUNoRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzt3R0E1RVUsY0FBYzs0RkFBZCxjQUFjLGdSQVJkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNsQ0gsNnpDQXVEQSw4MEREL0JZLFlBQVksZ09BQUUsV0FBVzs7NEZBWXhCLGNBQWM7a0JBZjFCLFNBQVM7K0JBQ0UsVUFBVSxjQUNSLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsbUJBR25CLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBR0csV0FBVztzQkFBbkIsS0FBSztnQkFHRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUdHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBR0csVUFBVTtzQkFBbEIsS0FBSztnQkFHSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0VHlwZSB9IGZyb20gJy4uL3NoYXJlZC90eXBlcyc7XHJcblxyXG4vKiogVW5pcXVlIElEIGNvdW50ZXIgZm9yIGlucHV0IGVsZW1lbnRzICovXHJcbmxldCBpbnB1dElkQ291bnRlciA9IDA7XHJcblxyXG4vKipcclxuICogVUkgSW5wdXQgQ29tcG9uZW50XHJcbiAqIFxyXG4gKiBBIHJldXNhYmxlIGlucHV0IGZpZWxkIGNvbXBvbmVudCB3aXRoIGxhYmVscywgdmFsaWRhdGlvbiBzdGF0ZXMsIGFuZCBpY29ucy5cclxuICogU3VwcG9ydHMgcmVhY3RpdmUgZm9ybXMgdmlhIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1aS1pbnB1dCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqIExhYmVsIHRleHQgZGlzcGxheWVkIGFib3ZlIHRoZSBpbnB1dCAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcblxyXG4gIC8qKiBQbGFjZWhvbGRlciB0ZXh0IGZvciB0aGUgaW5wdXQgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG5cclxuICAvKiogSW5wdXQgdHlwZSAodGV4dCwgbnVtYmVyLCBlbWFpbCwgcGFzc3dvcmQpICovXHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xyXG5cclxuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgKi9cclxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBJY29uIHRvIGRpc3BsYXkgb24gdGhlIGxlZnQgc2lkZSAocHJlZml4KSAqL1xyXG4gIEBJbnB1dCgpIHByZWZpeEljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKiogSWNvbiB0byBkaXNwbGF5IG9uIHRoZSByaWdodCBzaWRlIChzdWZmaXgpICovXHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdmFsdWUgY2hhbmdlcyAqL1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogVW5pcXVlIElEIGZvciB0aGUgaW5wdXQgZWxlbWVudCAqL1xyXG4gIHJlYWRvbmx5IGlucHV0SWQgPSBgdWktaW5wdXQtJHsrK2lucHV0SWRDb3VudGVyfWA7XHJcblxyXG4gIC8qKiBDb250cm9sVmFsdWVBY2Nlc3NvciBjYWxsYmFja3MgKi9cclxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG5cclxuICAvKiogR2V0IENTUyBjbGFzc2VzIGZvciB0aGUgaW5wdXQgd3JhcHBlciAqL1xyXG4gIGdldCB3cmFwcGVyQ2xhc3NlcygpOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAndWktaW5wdXQtd3JhcHBlcic6IHRydWUsXHJcbiAgICAgICd1aS1pbnB1dC13cmFwcGVyLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgICd1aS1pbnB1dC13cmFwcGVyLS1lcnJvcic6ICEhdGhpcy5lcnJvcixcclxuICAgICAgJ3VpLWlucHV0LXdyYXBwZXItLWhhcy1wcmVmaXgnOiAhIXRoaXMucHJlZml4SWNvbixcclxuICAgICAgJ3VpLWlucHV0LXdyYXBwZXItLWhhcy1zdWZmaXgnOiAhIXRoaXMuc3VmZml4SWNvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGUgaW5wdXQgdmFsdWUgY2hhbmdlcyAqL1xyXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZSBpbnB1dCBibHVyICovXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc2VzXCI+XHJcbiAgPCEtLSBMYWJlbCAtLT5cclxuICA8bGFiZWwgXHJcbiAgICAqbmdJZj1cImxhYmVsXCIgXHJcbiAgICBbZm9yXT1cImlucHV0SWRcIiBcclxuICAgIGNsYXNzPVwidWktaW5wdXRfX2xhYmVsXCJcclxuICA+XHJcbiAgICB7eyBsYWJlbCB9fVxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gSW5wdXQgY29udGFpbmVyIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJ1aS1pbnB1dF9fY29udGFpbmVyXCI+XHJcbiAgICA8IS0tIFByZWZpeCBpY29uIC0tPlxyXG4gICAgPHNwYW4gXHJcbiAgICAgICpuZ0lmPVwicHJlZml4SWNvblwiIFxyXG4gICAgICBjbGFzcz1cInVpLWlucHV0X19pY29uIHVpLWlucHV0X19pY29uLS1wcmVmaXhcIlxyXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgPlxyXG4gICAgICB7eyBwcmVmaXhJY29uIH19XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPCEtLSBJbnB1dCBlbGVtZW50IC0tPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJpbnB1dElkXCJcclxuICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XCIhIWVycm9yXCJcclxuICAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJlcnJvciA/IGlucHV0SWQgKyAnLWVycm9yJyA6IG51bGxcIlxyXG4gICAgICBjbGFzcz1cInVpLWlucHV0X19maWVsZFwiXHJcbiAgICAgIChpbnB1dCk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXHJcbiAgICAvPlxyXG5cclxuICAgIDwhLS0gU3VmZml4IGljb24gLS0+XHJcbiAgICA8c3BhbiBcclxuICAgICAgKm5nSWY9XCJzdWZmaXhJY29uXCIgXHJcbiAgICAgIGNsYXNzPVwidWktaW5wdXRfX2ljb24gdWktaW5wdXRfX2ljb24tLXN1ZmZpeFwiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICA+XHJcbiAgICAgIHt7IHN1ZmZpeEljb24gfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBFcnJvciBtZXNzYWdlIC0tPlxyXG4gIDxzcGFuIFxyXG4gICAgKm5nSWY9XCJlcnJvclwiIFxyXG4gICAgW2lkXT1cImlucHV0SWQgKyAnLWVycm9yJ1wiXHJcbiAgICBjbGFzcz1cInVpLWlucHV0X19lcnJvclwiXHJcbiAgICByb2xlPVwiYWxlcnRcIlxyXG4gID5cclxuICAgIHt7IGVycm9yIH19XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19