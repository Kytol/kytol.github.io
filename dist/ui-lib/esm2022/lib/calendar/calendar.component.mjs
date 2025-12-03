import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
/**
 * UI Calendar Component
 *
 * A calendar component for date selection with single and range modes.
 * Supports date constraints, time picker, and keyboard navigation.
 */
export class CalendarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUc3Qzs7Ozs7R0FLRztBQVNILE1BQU0sT0FBTyxpQkFBaUI7SUFzQ1I7SUFyQ3BCLGdEQUFnRDtJQUN2QyxJQUFJLEdBQWlCLFFBQVEsQ0FBQztJQUV2QywrQkFBK0I7SUFDdEIsS0FBSyxHQUErQixJQUFJLENBQUM7SUFFbEQsOEJBQThCO0lBQ3JCLE9BQU8sR0FBZ0IsSUFBSSxDQUFDO0lBRXJDLDhCQUE4QjtJQUNyQixPQUFPLEdBQWdCLElBQUksQ0FBQztJQUVyQyxrQ0FBa0M7SUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUUxQix1Q0FBdUM7SUFDN0IsV0FBVyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBRWhFLDhCQUE4QjtJQUM5QixZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUUxQiwrQkFBK0I7SUFDL0IsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFN0QseUJBQXlCO0lBQ3pCLFlBQVksR0FBa0IsRUFBRSxD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LENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBZ0I7UUFDekMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7d0dBaFBVLGlCQUFpQjs0RkFBakIsaUJBQWlCLHdOQzNCOUIsZzRFQXlFQSxvMkZEbkRZLFlBQVksK1BBQUUsV0FBVzs7NEZBS3hCLGlCQUFpQjtrQkFSN0IsU0FBUzsrQkFDRSxhQUFhLGNBQ1gsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxtQkFHbkIsdUJBQXVCLENBQUMsTUFBTTtzRkFJdEMsSUFBSTtzQkFBWixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0csT0FBTztzQkFBZixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZGUsIENhbGVuZGFyRGF5IH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBVSSBDYWxlbmRhciBDb21wb25lbnRcclxuICogXHJcbiAqIEEgY2FsZW5kYXIgY29tcG9uZW50IGZvciBkYXRlIHNlbGVjdGlvbiB3aXRoIHNpbmdsZSBhbmQgcmFuZ2UgbW9kZXMuXHJcbiAqIFN1cHBvcnRzIGRhdGUgY29uc3RyYWludHMsIHRpbWUgcGlja2VyLCBhbmQga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktY2FsZW5kYXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIFNlbGVjdGlvbiBtb2RlOiBzaW5nbGUgZGF0ZSBvciBkYXRlIHJhbmdlICovXHJcbiAgQElucHV0KCkgbW9kZTogQ2FsZW5kYXJNb2RlID0gJ3NpbmdsZSc7XHJcblxyXG4gIC8qKiBDdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUgKi9cclxuICBASW5wdXQoKSB2YWx1ZTogRGF0ZSB8IFtEYXRlLCBEYXRlXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKiogTWluaW11bSBzZWxlY3RhYmxlIGRhdGUgKi9cclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBNYXhpbXVtIHNlbGVjdGFibGUgZGF0ZSAqL1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aW1lIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdmFsdWUgY2hhbmdlcyAqL1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IFtEYXRlLCBEYXRlXT4oKTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgZGlzcGxheWVkIG1vbnRoICovXHJcbiAgY3VycmVudE1vbnRoID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLyoqIERheXMgb2YgdGhlIHdlZWsgaGVhZGVycyAqL1xyXG4gIHdlZWtEYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcclxuXHJcbiAgLyoqIENhbGVuZGFyIGdyaWQgZGF5cyAqL1xyXG4gIGNhbGVuZGFyRGF5czogQ2FsZW5kYXJEYXlbXSA9IFtdO1xyXG5cclxuICAvKiogQ3VycmVudGx5IGZvY3VzZWQgZGF0ZSBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiAqL1xyXG4gIGZvY3VzZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLyoqIFRpbWUgdmFsdWVzIGZvciB0aW1lIHBpY2tlciAqL1xyXG4gIHNlbGVjdGVkSG91cnMgPSAwO1xyXG4gIHNlbGVjdGVkTWludXRlcyA9IDA7XHJcblxyXG4gIC8qKiBSYW5nZSBzZWxlY3Rpb24gc3RhdGUgKi9cclxuICBwcml2YXRlIHJhbmdlU3RhcnQ6IERhdGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVGcm9tVmFsdWUoKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhckRheXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplIHN0YXRlIGZyb20gaW5wdXQgdmFsdWUgKi9cclxuICBwcml2YXRlIGluaXRpYWxpemVGcm9tVmFsdWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gbmV3IERhdGUodGhpcy52YWx1ZVswXSk7XHJcbiAgICAgICAgdGhpcy5yYW5nZVN0YXJ0ID0gdGhpcy52YWx1ZVswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VycyA9IHRoaXMudmFsdWUuZ2V0SG91cnMoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWludXRlcyA9IHRoaXMudmFsdWUuZ2V0TWludXRlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzZWREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50TW9udGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdlbmVyYXRlIGNhbGVuZGFyIGdyaWQgZm9yIGN1cnJlbnQgbW9udGggKi9cclxuICBnZW5lcmF0ZUNhbGVuZGFyRGF5cygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHllYXIgPSB0aGlzLmN1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSB0aGlzLmN1cnJlbnRNb250aC5nZXRNb250aCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmaXJzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcclxuICAgIGNvbnN0IGxhc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApO1xyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZmlyc3REYXkpO1xyXG4gICAgc3RhcnREYXRlLnNldERhdGUoc3RhcnREYXRlLmdldERhdGUoKSAtIGZpcnN0RGF5LmdldERheSgpKTtcclxuXHJcbiAgICB0aGlzLmNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgNiB3ZWVrcyAoNDIgZGF5cylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICAgICAgZGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyBpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXlzLnB1c2goe1xyXG4gICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgaXNDdXJyZW50TW9udGg6IGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgsXHJcbiAgICAgICAgaXNUb2RheTogdGhpcy5pc1NhbWVEYXkoZGF0ZSwgdG9kYXkpLFxyXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHRoaXMuaXNEYXRlU2VsZWN0ZWQoZGF0ZSksXHJcbiAgICAgICAgaXNJblJhbmdlOiB0aGlzLmlzRGF0ZUluUmFuZ2UoZGF0ZSksXHJcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0RhdGVEaXNhYmxlZChkYXRlKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE5hdmlnYXRlIHRvIHByZXZpb3VzIG1vbnRoICovXHJcbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudE1vbnRoID0gbmV3IERhdGUoXHJcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoLmdldE1vbnRoKCkgLSAxLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyRGF5cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE5hdmlnYXRlIHRvIG5leHQgbW9udGggKi9cclxuICBuZXh0TW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKFxyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aC5nZXRNb250aCgpICsgMSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhckRheXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgZm9ybWF0dGVkIG1vbnRoL3llYXIgc3RyaW5nICovXHJcbiAgZ2V0IG1vbnRoWWVhckxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgXHJcbiAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICB5ZWFyOiAnbnVtZXJpYycgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKiogSGFuZGxlIGRhdGUgc2VsZWN0aW9uICovXHJcbiAgc2VsZWN0RGF0ZShkYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XHJcbiAgICBpZiAoZGF5LmlzRGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc2luZ2xlJykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZSk7XHJcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgICAgc2VsZWN0ZWREYXRlLnNldEhvdXJzKHRoaXMuc2VsZWN0ZWRIb3VycywgdGhpcy5zZWxlY3RlZE1pbnV0ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZERhdGU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChzZWxlY3RlZERhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmFuZ2UgbW9kZVxyXG4gICAgICBpZiAoIXRoaXMucmFuZ2VTdGFydCkge1xyXG4gICAgICAgIHRoaXMucmFuZ2VTdGFydCA9IG5ldyBEYXRlKGRheS5kYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMucmFuZ2VTdGFydDtcclxuICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShkYXkuZGF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gW2VuZCwgc3RhcnRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5yYW5nZVN0YXJ0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyRGF5cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZSBrZXlib2FyZCBuYXZpZ2F0aW9uICovXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9jdXNlZERhdGUpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpIC0gNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgNyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgY29uc3QgZGF5ID0gdGhpcy5jYWxlbmRhckRheXMuZmluZChkID0+IHRoaXMuaXNTYW1lRGF5KGQuZGF0ZSwgdGhpcy5mb2N1c2VkRGF0ZSkpO1xyXG4gICAgICAgIGlmIChkYXkgJiYgIWRheS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoZGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzZWREYXRlID0gbmV3RGF0ZTtcclxuICAgIFxyXG4gICAgLy8gTmF2aWdhdGUgbW9udGhzIGlmIG5lZWRlZFxyXG4gICAgaWYgKG5ld0RhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5jdXJyZW50TW9udGguZ2V0TW9udGgoKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSwgbmV3RGF0ZS5nZXRNb250aCgpLCAxKTtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyRGF5cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogVXBkYXRlIHRpbWUgdmFsdWVzICovXHJcbiAgb25UaW1lQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3NpbmdsZScgJiYgdGhpcy52YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZSk7XHJcbiAgICAgIG5ld0RhdGUuc2V0SG91cnModGhpcy5zZWxlY3RlZEhvdXJzLCB0aGlzLnNlbGVjdGVkTWludXRlcyk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdEYXRlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3RGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2hlY2sgaWYgdHdvIGRhdGVzIGFyZSB0aGUgc2FtZSBkYXkgKHB1YmxpYyBmb3IgdGVtcGxhdGUpICovXHJcbiAgaXNTYW1lRGF5UHVibGljKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lRGF5KGRhdGUxLCBkYXRlMik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2hlY2sgaWYgdHdvIGRhdGVzIGFyZSB0aGUgc2FtZSBkYXkgKi9cclxuICBwcml2YXRlIGlzU2FtZURheShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRlMS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgZGF0ZTEuZ2V0TW9udGgoKSA9PT0gZGF0ZTIuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgIGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrIGlmIGRhdGUgaXMgc2VsZWN0ZWQgKi9cclxuICBwcml2YXRlIGlzRGF0ZVNlbGVjdGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1NhbWVEYXkoZGF0ZSwgdGhpcy52YWx1ZVswXSkgfHwgdGhpcy5pc1NhbWVEYXkoZGF0ZSwgdGhpcy52YWx1ZVsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWVEYXkoZGF0ZSwgdGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2hlY2sgaWYgZGF0ZSBpcyBpbiBzZWxlY3RlZCByYW5nZSAqL1xyXG4gIHByaXZhdGUgaXNEYXRlSW5SYW5nZShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBkYXRlID4gdGhpcy52YWx1ZVswXSAmJiBkYXRlIDwgdGhpcy52YWx1ZVsxXTtcclxuICB9XHJcblxyXG4gIC8qKiBDaGVjayBpZiBkYXRlIGlzIGRpc2FibGVkICovXHJcbiAgcHJpdmF0ZSBpc0RhdGVEaXNhYmxlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5taW5EYXRlICYmIGRhdGUgPCB0aGlzLm1pbkRhdGUpIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKHRoaXMubWF4RGF0ZSAmJiBkYXRlID4gdGhpcy5tYXhEYXRlKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBUcmFjayBieSBmdW5jdGlvbiBmb3IgbmdGb3IgKi9cclxuICB0cmFja0J5RGF0ZShpbmRleDogbnVtYmVyLCBkYXk6IENhbGVuZGFyRGF5KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXkuZGF0ZS5nZXRUaW1lKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ1aS1jYWxlbmRhclwiIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgPCEtLSBIZWFkZXIgd2l0aCBuYXZpZ2F0aW9uIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJ1aS1jYWxlbmRhcl9faGVhZGVyXCI+XHJcbiAgICA8YnV0dG9uIFxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgIGNsYXNzPVwidWktY2FsZW5kYXJfX25hdi1idG5cIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgbW9udGhcIlxyXG4gICAgICAoY2xpY2spPVwicHJldmlvdXNNb250aCgpXCJcclxuICAgID5cclxuICAgICAg4oC5XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzPVwidWktY2FsZW5kYXJfX21vbnRoLXllYXJcIj57eyBtb250aFllYXJMYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxidXR0b24gXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgY2xhc3M9XCJ1aS1jYWxlbmRhcl9fbmF2LWJ0blwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IG1vbnRoXCJcclxuICAgICAgKGNsaWNrKT1cIm5leHRNb250aCgpXCJcclxuICAgID5cclxuICAgICAg4oC6XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBXZWVrZGF5IGhlYWRlcnMgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInVpLWNhbGVuZGFyX193ZWVrZGF5c1wiPlxyXG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrRGF5c1wiIGNsYXNzPVwidWktY2FsZW5kYXJfX3dlZWtkYXlcIj5cclxuICAgICAge3sgZGF5IH19XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gQ2FsZW5kYXIgZ3JpZCAtLT5cclxuICA8ZGl2IGNsYXNzPVwidWktY2FsZW5kYXJfX2dyaWRcIiByb2xlPVwiZ3JpZFwiPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGNhbGVuZGFyRGF5czsgdHJhY2tCeTogdHJhY2tCeURhdGVcIlxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJ1aS1jYWxlbmRhcl9fZGF5XCJcclxuICAgICAgW2NsYXNzLnVpLWNhbGVuZGFyX19kYXktLW90aGVyLW1vbnRoXT1cIiFkYXkuaXNDdXJyZW50TW9udGhcIlxyXG4gICAgICBbY2xhc3MudWktY2FsZW5kYXJfX2RheS0tdG9kYXldPVwiZGF5LmlzVG9kYXlcIlxyXG4gICAgICBbY2xhc3MudWktY2FsZW5kYXJfX2RheS0tc2VsZWN0ZWRdPVwiZGF5LmlzU2VsZWN0ZWRcIlxyXG4gICAgICBbY2xhc3MudWktY2FsZW5kYXJfX2RheS0taW4tcmFuZ2VdPVwiZGF5LmlzSW5SYW5nZVwiXHJcbiAgICAgIFtjbGFzcy51aS1jYWxlbmRhcl9fZGF5LS1kaXNhYmxlZF09XCJkYXkuaXNEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy51aS1jYWxlbmRhcl9fZGF5LS1mb2N1c2VkXT1cImlzU2FtZURheVB1YmxpYyhkYXkuZGF0ZSwgZm9jdXNlZERhdGUpXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRheS5pc0Rpc2FibGVkXCJcclxuICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJkYXkuaXNTZWxlY3RlZFwiXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3REYXRlKGRheSlcIlxyXG4gICAgPlxyXG4gICAgICB7eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIFRpbWUgcGlja2VyIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93VGltZVwiIGNsYXNzPVwidWktY2FsZW5kYXJfX3RpbWVcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInVpLWNhbGVuZGFyX190aW1lLWxhYmVsXCI+VGltZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICBjbGFzcz1cInVpLWNhbGVuZGFyX190aW1lLWlucHV0XCJcclxuICAgICAgW25nTW9kZWxdPVwic2VsZWN0ZWRIb3Vyc1wiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdGVkSG91cnMgPSAkZXZlbnQ7IG9uVGltZUNoYW5nZSgpXCJcclxuICAgICAgbWluPVwiMFwiXHJcbiAgICAgIG1heD1cIjIzXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIkhvdXJzXCJcclxuICAgIC8+XHJcbiAgICA8c3BhbiBjbGFzcz1cInVpLWNhbGVuZGFyX190aW1lLXNlcGFyYXRvclwiPjo8L3NwYW4+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgIGNsYXNzPVwidWktY2FsZW5kYXJfX3RpbWUtaW5wdXRcIlxyXG4gICAgICBbbmdNb2RlbF09XCJzZWxlY3RlZE1pbnV0ZXNcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZWxlY3RlZE1pbnV0ZXMgPSAkZXZlbnQ7IG9uVGltZUNoYW5nZSgpXCJcclxuICAgICAgbWluPVwiMFwiXHJcbiAgICAgIG1heD1cIjU5XCJcclxuICAgICAgYXJpYS1sYWJlbD1cIk1pbnV0ZXNcIlxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==