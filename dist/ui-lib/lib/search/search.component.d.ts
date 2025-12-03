import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * UI Search Component
 *
 * A search field component with debounce functionality.
 * Emits valueChange events after the debounce period.
 */
export declare class SearchComponent implements OnInit, OnDestroy {
    /** Placeholder text for the search input */
    placeholder: string;
    /** Current search value */
    value: string;
    /** Debounce time in milliseconds */
    debounce: number;
    /** Whether the search input is disabled */
    disabled: boolean;
    /** Event emitted when value changes (after debounce) */
    valueChange: EventEmitter<string>;
    /** Subject for debouncing input */
    private searchSubject;
    private subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Set up debounced value emission */
    private setupDebounce;
    /** Get CSS classes for the search wrapper */
    get wrapperClasses(): Record<string, boolean>;
    /** Handle input value changes */
    onInputChange(event: Event): void;
    /** Handle Escape key to clear the search */
    onKeyDown(event: KeyboardEvent): void;
    /** Clear the search value */
    clearSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchComponent, "ui-search", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "debounce": { "alias": "debounce"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
