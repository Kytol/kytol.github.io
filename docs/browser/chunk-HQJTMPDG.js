import {
  CalendarComponent,
  InputComponent
} from "./chunk-M377R3FB.js";
import {
  SearchComponent
} from "./chunk-JJWZPSGC.js";
import {
  ButtonComponent,
  DEFAULT_PAGE_SIZES,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JV73OLQQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YID5YRT4.js";

// projects/ui-lib/src/lib/table/table.component.ts
function TableComponent_div_1_ui_search_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ui-search", 18);
    \u0275\u0275listener("valueChange", function TableComponent_div_1_ui_search_1_Template_ui_search_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.searchQuery);
  }
}
function TableComponent_div_1_div_2_div_3_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24)(1, "input", 25);
    \u0275\u0275listener("change", function TableComponent_div_1_div_2_div_3_label_1_Template_input_change_1_listener() {
      const col_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleColumnVisibility(col_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", col_r5.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r5.title, " ");
  }
}
function TableComponent_div_1_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, TableComponent_div_1_div_2_div_3_label_1_Template, 3, 2, "label", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns)("ngForTrackBy", ctx_r1.trackByField);
  }
}
function TableComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275listener("click", function TableComponent_div_1_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleColumnManager());
    });
    \u0275\u0275text(2, " Columns \u25BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TableComponent_div_1_div_2_div_3_Template, 2, 2, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.columnManagerOpen);
  }
}
function TableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TableComponent_div_1_ui_search_1_Template, 1, 1, "ui-search", 16)(2, TableComponent_div_1_div_2_Template, 4, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.columnManager);
  }
}
function TableComponent_th_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSortIndicator(col_r7), " ");
  }
}
function TableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275listener("click", function TableComponent_th_6_Template_th_click_0_listener() {
      const col_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHeaderClick(col_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, TableComponent_th_6_span_2_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", col_r7.width);
    \u0275\u0275classProp("ui-table__th--sortable", ctx_r1.sortable && col_r7.sortable !== false);
    \u0275\u0275attribute("aria-sort", ctx_r1.sortField === col_r7.field ? ctx_r1.sortDirection : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r7.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortable && col_r7.sortable !== false);
  }
}
function TableComponent_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9[col_r10.field], " ");
  }
}
function TableComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function TableComponent_tr_8_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowClick(row_r9));
    })("keydown", function TableComponent_tr_8_Template_tr_keydown_0_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event, row_r9));
    });
    \u0275\u0275template(1, TableComponent_tr_8_td_1_Template, 2, 1, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visibleColumns)("ngForTrackBy", ctx_r1.trackByField);
  }
}
function TableComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, " No data available ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.visibleColumns.length);
  }
}
function TableComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r11 = ctx.$implicit;
    \u0275\u0275property("value", size_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r11);
  }
}
var TableComponent = class _TableComponent {
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
  searchQuery = "";
  /** Column manager dropdown state */
  columnManagerOpen = false;
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnChanges(changes) {
    if (changes["data"] || changes["pageSize"]) {
      this.currentPage = 1;
    }
  }
  /** Get visible columns */
  get visibleColumns() {
    return this.columns.filter((col) => col.visible !== false);
  }
  /** Get displayed data (with pagination, sorting, filtering if not server mode) */
  get displayedData() {
    if (this.serverMode) {
      return this.data;
    }
    let result = [...this.data];
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter((row) => this.visibleColumns.some((col) => {
        const value = row[col.field];
        return value && String(value).toLowerCase().includes(query);
      }));
    }
    if (this.sortField && this.sortDirection) {
      result.sort((a, b) => {
        const aVal = a[this.sortField];
        const bVal = b[this.sortField];
        const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return this.sortDirection === "asc" ? comparison : -comparison;
      });
    }
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
      filteredLength = this.data.filter((row) => this.visibleColumns.some((col) => {
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
      if (this.sortDirection === null) {
        this.sortDirection = "asc";
      } else if (this.sortDirection === "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = null;
        this.sortField = null;
      }
    } else {
      this.sortField = column.field;
      this.sortDirection = "asc";
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
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.onRowClick(row);
    }
  }
  /** Get sort indicator for column */
  getSortIndicator(column) {
    if (this.sortField !== column.field)
      return "";
    if (this.sortDirection === "asc")
      return "\u2191";
    if (this.sortDirection === "desc")
      return "\u2193";
    return "";
  }
  /** Track by function for rows */
  trackByIndex(index) {
    return index;
  }
  /** Track by function for columns */
  trackByField(index, column) {
    return column.field;
  }
  static \u0275fac = function TableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableComponent, selectors: [["ui-table"]], inputs: { columns: "columns", data: "data", pageSize: "pageSize", searchable: "searchable", sortable: "sortable", columnManager: "columnManager", serverMode: "serverMode" }, outputs: { sortChange: "sortChange", pageChange: "pageChange", searchChange: "searchChange", columnVisibilityChange: "columnVisibilityChange", rowClick: "rowClick" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 23, vars: 12, consts: [[1, "ui-table"], ["class", "ui-table__toolbar", 4, "ngIf"], [1, "ui-table__wrapper"], ["role", "grid", 1, "ui-table__table"], [3, "width", "ui-table__th--sortable", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", 3, "click", "keydown", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "ui-table__pagination"], [1, "ui-table__page-size"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ui-table__page-info"], [1, "ui-table__page-controls"], ["type", "button", "aria-label", "Previous page", 1, "ui-table__page-btn", 3, "click", "disabled"], ["type", "button", "aria-label", "Next page", 1, "ui-table__page-btn", 3, "click", "disabled"], [1, "ui-table__toolbar"], ["placeholder", "Search...", 3, "value", "valueChange", 4, "ngIf"], ["class", "ui-table__column-manager", 4, "ngIf"], ["placeholder", "Search...", 3, "valueChange", "value"], [1, "ui-table__column-manager"], ["type", "button", "aria-label", "Manage columns", 1, "ui-table__column-btn", 3, "click"], ["class", "ui-table__column-dropdown", 4, "ngIf"], [1, "ui-table__column-dropdown"], ["class", "ui-table__column-option", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ui-table__column-option"], ["type", "checkbox", 3, "change", "checked"], [3, "click"], ["class", "ui-table__sort-indicator", 4, "ngIf"], [1, "ui-table__sort-indicator"], ["tabindex", "0", 3, "click", "keydown"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ui-table__empty"], [3, "value"]], template: function TableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TableComponent_div_1_Template, 3, 2, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr");
      \u0275\u0275template(6, TableComponent_th_6_Template, 3, 7, "th", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "tbody");
      \u0275\u0275template(8, TableComponent_tr_8_Template, 2, 2, "tr", 5)(9, TableComponent_tr_9_Template, 3, 1, "tr", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "label");
      \u0275\u0275text(13, " Rows per page: ");
      \u0275\u0275elementStart(14, "select", 9);
      \u0275\u0275listener("ngModelChange", function TableComponent_Template_select_ngModelChange_14_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275template(15, TableComponent_option_15_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "button", 13);
      \u0275\u0275listener("click", function TableComponent_Template_button_click_19_listener() {
        return ctx.goToPage(ctx.currentPage - 1);
      });
      \u0275\u0275text(20, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function TableComponent_Template_button_click_21_listener() {
        return ctx.goToPage(ctx.currentPage + 1);
      });
      \u0275\u0275text(22, " \u203A ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchable || ctx.columnManager);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.visibleColumns)("ngForTrackBy", ctx.trackByField);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.displayedData)("ngForTrackBy", ctx.trackByIndex);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayedData.length === 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.pageSize);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.pageSizes);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" Page ", ctx.currentPage, " of ", ctx.totalPages || 1, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage <= 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage >= ctx.totalPages);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, SearchComponent], styles: ['\n\n.ui-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-md, 6px);\n  background-color: var(--color-bg, #ffffff);\n  font-family: var(--font-family, "Inter", sans-serif);\n  overflow: hidden;\n}\n.ui-table__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-bottom: 1px solid var(--color-border, #d1d5db);\n  background-color: var(--color-surface, #f6f7f8);\n}\n.ui-table__column-manager[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: auto;\n}\n.ui-table__column-btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-sm, 4px);\n  background-color: var(--color-bg, #ffffff);\n  color: var(--color-text, #222);\n  font-size: var(--font-size-sm, 14px);\n  cursor: pointer;\n}\n.ui-table__column-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 10;\n  min-width: 150px;\n  margin-top: 4px;\n  padding: 8px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-sm, 4px);\n  background-color: var(--color-bg, #ffffff);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.ui-table__column-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 0;\n  font-size: var(--font-size-sm, 14px);\n  cursor: pointer;\n}\n.ui-table__wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ui-table__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ui-table__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-size: var(--font-size-sm, 14px);\n  font-weight: var(--font-weight-semibold, 600);\n  color: var(--color-text, #222);\n  background-color: var(--color-surface, #f6f7f8);\n  border-bottom: 1px solid var(--color-border, #d1d5db);\n}\n.ui-table__th--sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ui-table__th--sortable[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-border, #d1d5db);\n}\n.ui-table__sort-indicator[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 12px;\n}\n.ui-table__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: var(--font-size-sm, 14px);\n  color: var(--color-text, #222);\n  border-bottom: 1px solid var(--color-border, #d1d5db);\n}\n.ui-table__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.ui-table__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-hover, rgba(0, 0, 0, 0.05));\n}\n.ui-table__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary, #3b82f6);\n  outline-offset: -2px;\n}\n.ui-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-secondary, #6b7280);\n  padding: 24px !important;\n}\n.ui-table__pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 12px;\n  border-top: 1px solid var(--color-border, #d1d5db);\n  background-color: var(--color-surface, #f6f7f8);\n}\n.ui-table__page-size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  padding: 4px 8px;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-sm, 4px);\n  background-color: var(--color-bg, #ffffff);\n  color: var(--color-text, #222);\n  font-size: var(--font-size-sm, 14px);\n}\n.ui-table__page-info[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm, 14px);\n  color: var(--color-secondary, #6b7280);\n}\n.ui-table__page-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ui-table__page-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: 1px solid var(--color-border, #d1d5db);\n  border-radius: var(--radius-sm, 4px);\n  background-color: var(--color-bg, #ffffff);\n  color: var(--color-text, #222);\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.ui-table__page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--color-surface, #f6f7f8);\n}\n.ui-table__page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=table.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableComponent, { className: "TableComponent", filePath: "projects\\ui-lib\\src\\lib\\table\\table.component.ts", lineNumber: 35 });
})();

// src/app/views/ui-demo/ui-demo.component.ts
function UiDemoComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Searching for: "', ctx_r0.searchValue, '"');
  }
}
var UiDemoComponent = class _UiDemoComponent {
  isDarkTheme = true;
  inputValue = "";
  searchValue = "";
  selectedDate = null;
  tableColumns = [
    { field: "id", title: "ID", width: "60px" },
    { field: "name", title: "Name", sortable: true },
    { field: "email", title: "Email", sortable: true },
    { field: "role", title: "Role", sortable: true }
  ];
  tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin" }
  ];
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
  onDateChange(date) {
    this.selectedDate = Array.isArray(date) ? date[0] : date;
  }
  static \u0275fac = function UiDemoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiDemoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiDemoComponent, selectors: [["app-ui-demo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 19, consts: [[1, "theme-wrapper"], [1, "demo-container"], [1, "demo-header"], [3, "clicked", "variant"], [1, "demo-section"], [1, "demo-label"], [1, "demo-row"], ["variant", "primary"], ["variant", "secondary"], ["variant", "outline"], ["size", "sm"], ["size", "md"], ["size", "lg"], [3, "disabled"], [3, "loading"], [1, "demo-row", 2, "flex-direction", "column", "max-width", "400px"], ["label", "Username", "placeholder", "Enter your username", 3, "ngModelChange", "ngModel"], ["label", "Email", "type", "email", "placeholder", "Enter your email", "prefixIcon", "\u{1F4E7}"], ["label", "Password", "type", "password", "placeholder", "Enter password", "suffixIcon", "\u{1F441}\uFE0F"], ["label", "With Error", "placeholder", "Invalid input", "error", "This field is required"], ["label", "Disabled", "placeholder", "Cannot edit", 3, "disabled"], [1, "demo-row", 2, "max-width", "400px"], ["placeholder", "Search items...", 3, "valueChange", "value"], [2, "margin-top", "8px", "color", "var(--color-secondary)"], ["mode", "single", 3, "valueChange"], ["mode", "single", 3, "showTime"], [3, "columns", "data", "sortable", "searchable", "columnManager", "pageSize"]], template: function UiDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F4E6} UI Library Demo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ui-button", 3);
      \u0275\u0275listener("clicked", function UiDemoComponent_Template_ui_button_clicked_5_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "section", 4)(8, "h2");
      \u0275\u0275text(9, "Button Component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275text(11, "Variants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "ui-button", 7);
      \u0275\u0275text(14, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ui-button", 8);
      \u0275\u0275text(16, "Secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ui-button", 9);
      \u0275\u0275text(18, "Outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275text(20, "Sizes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 6)(22, "ui-button", 10);
      \u0275\u0275text(23, "Small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ui-button", 11);
      \u0275\u0275text(25, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ui-button", 12);
      \u0275\u0275text(27, "Large");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 5);
      \u0275\u0275text(29, "States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 6)(31, "ui-button", 13);
      \u0275\u0275text(32, "Disabled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "ui-button", 14);
      \u0275\u0275text(34, "Loading");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "section", 4)(36, "h2");
      \u0275\u0275text(37, "Input Component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "ui-input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function UiDemoComponent_Template_ui_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.inputValue, $event) || (ctx.inputValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "ui-input", 17)(41, "ui-input", 18)(42, "ui-input", 19)(43, "ui-input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "section", 4)(45, "h2");
      \u0275\u0275text(46, "Search Component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 21)(48, "ui-search", 22);
      \u0275\u0275twoWayListener("valueChange", function UiDemoComponent_Template_ui_search_valueChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, UiDemoComponent_Conditional_49_Template, 2, 1, "p", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "section", 4)(51, "h2");
      \u0275\u0275text(52, "Calendar Component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 6)(54, "div")(55, "div", 5);
      \u0275\u0275text(56, "Single Date Selection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ui-calendar", 24);
      \u0275\u0275listener("valueChange", function UiDemoComponent_Template_ui_calendar_valueChange_57_listener($event) {
        return ctx.onDateChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div")(59, "div", 5);
      \u0275\u0275text(60, "With Time Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "ui-calendar", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "section", 4)(63, "h2");
      \u0275\u0275text(64, "Table Component");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "ui-table", 26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("theme-dark", ctx.isDarkTheme)("theme-light", !ctx.isDarkTheme);
      \u0275\u0275advance(5);
      \u0275\u0275property("variant", "outline");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isDarkTheme ? "\u2600\uFE0F Light Mode" : "\u{1F319} Dark Mode", " ");
      \u0275\u0275advance(25);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", true);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.inputValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("value", ctx.searchValue);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchValue ? 49 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275property("showTime", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("columns", ctx.tableColumns)("data", ctx.tableData)("sortable", true)("searchable", true)("columnManager", true)("pageSize", 5);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonComponent, InputComponent, SearchComponent, CalendarComponent, TableComponent], styles: ["\n\n.theme-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  transition: background-color 0.3s, color 0.3s;\n}\n.theme-dark[_ngcontent-%COMP%] {\n  --bg-primary: #0a0a0a;\n  --bg-secondary: #1a1a1a;\n  --text-primary: #ffffff;\n  --text-secondary: #a0a0a0;\n  --border-color: #333;\n  --color-secondary: #888;\n  background-color: var(--bg-primary);\n  color: var(--text-primary);\n}\n.theme-light[_ngcontent-%COMP%] {\n  --bg-primary: #f5f5f5;\n  --bg-secondary: #ffffff;\n  --text-primary: #1a1a1a;\n  --text-secondary: #666;\n  --border-color: #ddd;\n  --color-secondary: #666;\n  background-color: var(--bg-primary);\n  color: var(--text-primary);\n}\n.demo-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.demo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.demo-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n  color: #ffd700;\n}\n.demo-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding: 24px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n}\n.demo-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 1.25rem;\n  color: var(--text-primary);\n}\n.demo-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  margin-top: 16px;\n}\n.demo-label[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.demo-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=ui-demo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiDemoComponent, { className: "UiDemoComponent", filePath: "src\\app\\views\\ui-demo\\ui-demo.component.ts", lineNumber: 90 });
})();
export {
  UiDemoComponent
};
//# sourceMappingURL=chunk-HQJTMPDG.js.map
