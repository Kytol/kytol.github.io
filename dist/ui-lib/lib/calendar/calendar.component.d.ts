import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarMode, CalendarDay } from '../shared/types';
import * as i0 from "@angular/core";
/**
 * UI Calendar Component
 *
 * A calendar component for date selection with single and range modes.
 * Supports date constraints, time picker, and keyboard navigation.
 */
export declare class CalendarComponent implements OnInit {
    private cdr;
    /** Selection mode: single date or date range */
    mode: CalendarMode;
    /** Currently selected value */
    value: Date | [Date, Date] | null;
    /** Minimum selectable date */
    minDate: Date | null;
    /** Maximum selectable date */
    maxDate: Date | null;
    /** Whether to show time picker */
    showTime: boolean;
    /** Event emitted when value changes */
    valueChange: EventEmitter<Date | [Date, Date]>;
    /** Current displayed month */
    currentMonth: Date;
    /** Days of the week headers */
    weekDays: string[];
    /** Calendar grid days */
    calendarDays: CalendarDay[];
    /** Currently focused date for keyboard navigation */
    focusedDate: Date;
    /** Time values for time picker */
    selectedHours: number;
    selectedMinutes: number;
    /** Range selection state */
    private rangeStart;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    /** Initialize state from input value */
    private initializeFromValue;
    /** Generate calendar grid for current month */
    generateCalendarDays(): void;
    /** Navigate to previous month */
    previousMonth(): void;
    /** Navigate to next month */
    nextMonth(): void;
    /** Get formatted month/year string */
    get monthYearLabel(): string;
    /** Handle date selection */
    selectDate(day: CalendarDay): void;
    /** Handle keyboard navigation */
    onKeyDown(event: KeyboardEvent): void;
    /** Update time values */
    onTimeChange(): void;
    /** Check if two dates are the same day (public for template) */
    isSameDayPublic(date1: Date, date2: Date): boolean;
    /** Check if two dates are the same day */
    private isSameDay;
    /** Check if date is selected */
    private isDateSelected;
    /** Check if date is in selected range */
    private isDateInRange;
    /** Check if date is disabled */
    private isDateDisabled;
    /** Track by function for ngFor */
    trackByDate(index: number, day: CalendarDay): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarComponent, "ui-calendar", never, { "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "showTime": { "alias": "showTime"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
