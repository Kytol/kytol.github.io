import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-JV73OLQQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YID5YRT4.js";

// projects/ui-lib/src/lib/input/input.component.ts
function InputComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("for", ctx_r0.inputId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function InputComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.prefixIcon, " ");
  }
}
function InputComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.suffixIcon, " ");
  }
}
function InputComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.inputId + "-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
var inputIdCounter = 0;
var InputComponent = class _InputComponent {
  /** Label text displayed above the input */
  label = "";
  /** Placeholder text for the input */
  placeholder = "";
  /** Input type (text, number, email, password) */
  type = "text";
  /** Current input value */
  value = "";
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
  onChange = () => {
  };
  onTouched = () => {
  };
  /** Get CSS classes for the input wrapper */
  get wrapperClasses() {
    return {
      "ui-input-wrapper": true,
      "ui-input-wrapper--disabled": this.disabled,
      "ui-input-wrapper--error": !!this.error,
      "ui-input-wrapper--has-prefix": !!this.prefixIcon,
      "ui-input-wrapper--has-suffix": !!this.suffixIcon
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
    this.value = value || "";
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
  static \u0275fac = function InputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["ui-input"]], inputs: { label: "label", placeholder: "placeholder", type: "type", value: "value", disabled: "disabled", error: "error", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _InputComponent),
      multi: true
    }
  ]), \u0275\u0275StandaloneFeature], decls: 7, vars: 12, consts: [[3, "ngClass"], ["class", "ui-input__label", 3, "for", 4, "ngIf"], [1, "ui-input__container"], ["class", "ui-input__icon ui-input__icon--prefix", "aria-hidden", "true", 4, "ngIf"], [1, "ui-input__field", 3, "input", "blur", "id", "type", "value", "placeholder", "disabled"], ["class", "ui-input__icon ui-input__icon--suffix", "aria-hidden", "true", 4, "ngIf"], ["class", "ui-input__error", "role", "alert", 3, "id", 4, "ngIf"], [1, "ui-input__label", 3, "for"], ["aria-hidden", "true", 1, "ui-input__icon", "ui-input__icon--prefix"], ["aria-hidden", "true", 1, "ui-input__icon", "ui-input__icon--suffix"], ["role", "alert", 1, "ui-input__error", 3, "id"]], template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InputComponent_label_1_Template, 2, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, InputComponent_span_3_Template, 2, 1, "span", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("input", function InputComponent_Template_input_input_4_listener($event) {
        return ctx.onInputChange($event);
      })("blur", function InputComponent_Template_input_blur_4_listener() {
        return ctx.onBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InputComponent_span_5_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, InputComponent_span_6_Template, 2, 2, "span", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.wrapperClasses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.prefixIcon);
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.inputId)("type", ctx.type)("value", ctx.value)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-invalid", !!ctx.error)("aria-describedby", ctx.error ? ctx.inputId + "-error" : null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.suffixIcon);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule], styles: ['\n\n.ui-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-1, 4px);\n  font-family: var(--font-family, "Inter", sans-serif);\n}\n.ui-input__label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm, 14px);\n  font-weight: var(--font-weight-medium, 500);\n  color: var(--color-text, #222);\n  line-height: var(--line-height-normal, 1.5);\n}\n.ui-input__container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 42px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-md, 6px);\n  background-color: var(--color-bg, #ffffff);\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n}\n.ui-input__container[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-primary, #3b82f6);\n  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.25));\n}\n.ui-input-wrapper--error[_ngcontent-%COMP%]   .ui-input__container[_ngcontent-%COMP%] {\n  border-color: var(--color-error, #ef4444);\n}\n.ui-input-wrapper--error[_ngcontent-%COMP%]   .ui-input__container[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-error, #ef4444);\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.25);\n}\n.ui-input-wrapper--disabled[_ngcontent-%COMP%]   .ui-input__container[_ngcontent-%COMP%] {\n  background-color: var(--color-surface, #f6f7f8);\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ui-input__field[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  padding: 0 12px;\n  border: none;\n  background: transparent;\n  font-size: var(--font-size-base, 14px);\n  color: var(--color-text, #222);\n  outline: none;\n}\n.ui-input__field[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-secondary, #6b7280);\n}\n.ui-input__field[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.ui-input__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 20px;\n  color: var(--color-secondary, #6b7280);\n}\n.ui-input__icon--prefix[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ui-input__icon--suffix[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ui-input-wrapper--has-prefix[_ngcontent-%COMP%]   .ui-input__field[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.ui-input-wrapper--has-suffix[_ngcontent-%COMP%]   .ui-input__field[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n.ui-input__error[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm, 12px);\n  color: var(--color-error, #ef4444);\n  line-height: var(--line-height-normal, 1.5);\n}\n/*# sourceMappingURL=input.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "projects\\ui-lib\\src\\lib\\input\\input.component.ts", lineNumber: 37 });
})();

// projects/ui-lib/src/lib/calendar/calendar.component.ts
function CalendarComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r1, " ");
  }
}
function CalendarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function CalendarComponent_button_11_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDate(day_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ui-calendar__day--other-month", !day_r3.isCurrentMonth)("ui-calendar__day--today", day_r3.isToday)("ui-calendar__day--selected", day_r3.isSelected)("ui-calendar__day--in-range", day_r3.isInRange)("ui-calendar__day--disabled", day_r3.isDisabled)("ui-calendar__day--focused", ctx_r3.isSameDayPublic(day_r3.date, ctx_r3.focusedDate));
    \u0275\u0275property("disabled", day_r3.isDisabled);
    \u0275\u0275attribute("aria-selected", day_r3.isSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r3.date.getDate(), " ");
  }
}
function CalendarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2, "Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275listener("ngModelChange", function CalendarComponent_div_12_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedHours = $event;
      return \u0275\u0275resetView(ctx_r3.onTimeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 16);
    \u0275\u0275listener("ngModelChange", function CalendarComponent_div_12_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedMinutes = $event;
      return \u0275\u0275resetView(ctx_r3.onTimeChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.selectedHours);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.selectedMinutes);
  }
}
var CalendarComponent = class _CalendarComponent {
  cdr;
  /** Selection mode: single date or date range */
  mode = "single";
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
  currentMonth = /* @__PURE__ */ new Date();
  /** Days of the week headers */
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  /** Calendar grid days */
  calendarDays = [];
  /** Currently focused date for keyboard navigation */
  focusedDate = /* @__PURE__ */ new Date();
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
      } else {
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
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      this.calendarDays.push({
        date,
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
    return this.currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
  }
  /** Handle date selection */
  selectDate(day) {
    if (day.isDisabled)
      return;
    if (this.mode === "single") {
      const selectedDate = new Date(day.date);
      if (this.showTime) {
        selectedDate.setHours(this.selectedHours, this.selectedMinutes);
      }
      this.value = selectedDate;
      this.valueChange.emit(selectedDate);
    } else {
      if (!this.rangeStart) {
        this.rangeStart = new Date(day.date);
      } else {
        const start = this.rangeStart;
        const end = new Date(day.date);
        if (end < start) {
          this.value = [end, start];
        } else {
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
      case "ArrowLeft":
        newDate.setDate(newDate.getDate() - 1);
        break;
      case "ArrowRight":
        newDate.setDate(newDate.getDate() + 1);
        break;
      case "ArrowUp":
        newDate.setDate(newDate.getDate() - 7);
        break;
      case "ArrowDown":
        newDate.setDate(newDate.getDate() + 7);
        break;
      case "Enter":
      case " ":
        const day = this.calendarDays.find((d) => this.isSameDay(d.date, this.focusedDate));
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
    if (newDate.getMonth() !== this.currentMonth.getMonth()) {
      this.currentMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
      this.generateCalendarDays();
    }
    this.cdr.markForCheck();
  }
  /** Update time values */
  onTimeChange() {
    if (this.mode === "single" && this.value && !Array.isArray(this.value)) {
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
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
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
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["ui-calendar"]], inputs: { mode: "mode", value: "value", minDate: "minDate", maxDate: "maxDate", showTime: "showTime" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [["tabindex", "0", 1, "ui-calendar", 3, "keydown"], [1, "ui-calendar__header"], ["type", "button", "aria-label", "Previous month", 1, "ui-calendar__nav-btn", 3, "click"], [1, "ui-calendar__month-year"], ["type", "button", "aria-label", "Next month", 1, "ui-calendar__nav-btn", 3, "click"], [1, "ui-calendar__weekdays"], ["class", "ui-calendar__weekday", 4, "ngFor", "ngForOf"], ["role", "grid", 1, "ui-calendar__grid"], ["type", "button", "class", "ui-calendar__day", 3, "ui-calendar__day--other-month", "ui-calendar__day--today", "ui-calendar__day--selected", "ui-calendar__day--in-range", "ui-calendar__day--disabled", "ui-calendar__day--focused", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ui-calendar__time", 4, "ngIf"], [1, "ui-calendar__weekday"], ["type", "button", 1, "ui-calendar__day", 3, "click", "disabled"], [1, "ui-calendar__time"], [1, "ui-calendar__time-label"], ["type", "number", "min", "0", "max", "23", "aria-label", "Hours", 1, "ui-calendar__time-input", 3, "ngModelChange", "ngModel"], [1, "ui-calendar__time-separator"], ["type", "number", "min", "0", "max", "59", "aria-label", "Minutes", 1, "ui-calendar__time-input", 3, "ngModelChange", "ngModel"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("keydown", function CalendarComponent_Template_div_keydown_0_listener($event) {
        return ctx.onKeyDown($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_2_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275text(3, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_6_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275text(7, " \u203A ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, CalendarComponent_span_9_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, CalendarComponent_button_11_Template, 2, 15, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CalendarComponent_div_12_Template, 7, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.monthYearLabel);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.weekDays);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.calendarDays)("ngForTrackBy", ctx.trackByDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTime);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n.ui-calendar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  padding: 16px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-lg, 8px);\n  background-color: var(--color-bg, #ffffff);\n  font-family: var(--font-family, "Inter", sans-serif);\n}\n.ui-calendar[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary, #3b82f6);\n  outline-offset: 2px;\n}\n.ui-calendar__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.ui-calendar__month-year[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base, 14px);\n  font-weight: var(--font-weight-semibold, 600);\n  color: var(--color-text, #222);\n}\n.ui-calendar__nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: var(--radius-sm, 4px);\n  background-color: transparent;\n  color: var(--color-text, #222);\n  font-size: 18px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.ui-calendar__nav-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-surface, #f6f7f8);\n}\n.ui-calendar__weekdays[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.ui-calendar__weekday[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  font-size: var(--font-size-sm, 12px);\n  font-weight: var(--font-weight-medium, 500);\n  color: var(--color-secondary, #6b7280);\n}\n.ui-calendar__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.ui-calendar__day[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: none;\n  border-radius: var(--radius-sm, 4px);\n  background-color: transparent;\n  color: var(--color-text, #222);\n  font-size: var(--font-size-sm, 14px);\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.ui-calendar__day[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--color-surface, #f6f7f8);\n}\n.ui-calendar__day--other-month[_ngcontent-%COMP%] {\n  color: var(--color-secondary, #6b7280);\n  opacity: 0.5;\n}\n.ui-calendar__day--today[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold, 700);\n  color: var(--color-primary, #3b82f6);\n}\n.ui-calendar__day--selected[_ngcontent-%COMP%] {\n  background-color: var(--color-primary, #3b82f6);\n  color: #ffffff;\n}\n.ui-calendar__day--selected[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary, #3b82f6);\n}\n.ui-calendar__day--in-range[_ngcontent-%COMP%] {\n  background-color: rgba(59, 130, 246, 0.1);\n}\n.ui-calendar__day--disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.ui-calendar__day--focused[_ngcontent-%COMP%] {\n  outline: 2px solid var(--color-primary, #3b82f6);\n  outline-offset: -2px;\n}\n.ui-calendar__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--color-border, #d1d5db);\n}\n.ui-calendar__time-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm, 14px);\n  color: var(--color-text, #222);\n}\n.ui-calendar__time-input[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n  padding: 0 8px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-sm, 4px);\n  background-color: var(--color-bg, #ffffff);\n  color: var(--color-text, #222);\n  font-size: var(--font-size-sm, 14px);\n  text-align: center;\n}\n.ui-calendar__time-separator[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base, 14px);\n  color: var(--color-text, #222);\n}\n/*# sourceMappingURL=calendar.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "projects\\ui-lib\\src\\lib\\calendar\\calendar.component.ts", lineNumber: 28 });
})();

export {
  InputComponent,
  CalendarComponent
};
//# sourceMappingURL=chunk-M377R3FB.js.map
