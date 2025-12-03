import {
  DEFAULT_DEBOUNCE_MS,
  FormsModule
} from "./chunk-JV73OLQQ.js";
import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-YID5YRT4.js";

// projects/ui-lib/src/lib/search/search.component.ts
function SearchComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function SearchComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
var SearchComponent = class _SearchComponent {
  /** Placeholder text for the search input */
  placeholder = "Search...";
  /** Current search value */
  value = "";
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
    this.subscription = this.searchSubject.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe((value) => {
      this.valueChange.emit(value);
    });
  }
  /** Get CSS classes for the search wrapper */
  get wrapperClasses() {
    return {
      "ui-search": true,
      "ui-search--disabled": this.disabled
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
    if (event.key === "Escape" && !this.disabled) {
      this.clearSearch();
    }
  }
  /** Clear the search value */
  clearSearch() {
    this.value = "";
    this.searchSubject.next("");
    this.valueChange.emit("");
  }
  static \u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["ui-search"]], inputs: { placeholder: "placeholder", value: "value", debounce: "debounce", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 6, consts: [[3, "ngClass"], ["aria-hidden", "true", 1, "ui-search__icon"], ["type", "text", 1, "ui-search__input", 3, "input", "keydown", "value", "placeholder", "disabled"], ["type", "button", "class", "ui-search__clear", "aria-label", "Clear search", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Clear search", 1, "ui-search__clear", 3, "click"]], template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, " \u{1F50D} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 2);
      \u0275\u0275listener("input", function SearchComponent_Template_input_input_3_listener($event) {
        return ctx.onInputChange($event);
      })("keydown", function SearchComponent_Template_input_keydown_3_listener($event) {
        return ctx.onKeyDown($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SearchComponent_button_4_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.wrapperClasses);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.value)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-label", ctx.placeholder);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.value && !ctx.disabled);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule], styles: ['\n\n.ui-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  padding: 0 12px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-md, 6px);\n  background-color: var(--color-bg, #ffffff);\n  font-family: var(--font-family, "Inter", sans-serif);\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n}\n.ui-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-primary, #3b82f6);\n  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.25));\n}\n.ui-search--disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-surface, #f6f7f8);\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ui-search__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-right: 8px;\n  color: var(--color-secondary, #6b7280);\n  font-size: 14px;\n}\n.ui-search__input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  border: none;\n  background: transparent;\n  font-size: var(--font-size-base, 14px);\n  color: var(--color-text, #222);\n  outline: none;\n}\n.ui-search__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-secondary, #6b7280);\n}\n.ui-search__input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.ui-search__clear[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-left: 8px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: var(--color-surface, #f6f7f8);\n  color: var(--color-secondary, #6b7280);\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.ui-search__clear[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-border, #d1d5db);\n}\n.ui-search__clear[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary, #3b82f6);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=search.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "projects\\ui-lib\\src\\lib\\search\\search.component.ts", lineNumber: 31 });
})();

export {
  SearchComponent
};
//# sourceMappingURL=chunk-JJWZPSGC.js.map
