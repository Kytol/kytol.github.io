import { EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { TableColumn, SortEvent, PageEvent, SortDirection } from '../shared/types';
import * as i0 from "@angular/core";
/**
 * UI Table Component
 *
 * A dynamic table component with sorting, pagination, search, and column management.
 */
export declare class TableComponent implements OnChanges {
    private cdr;
    /** Column configuration */
    columns: TableColumn[];
    /** Table data */
    data: any[];
    /** Number of items per page */
    pageSize: number;
    /** Whether search is enabled */
    searchable: boolean;
    /** Whether sorting is enabled */
    sortable: boolean;
    /** Whether column manager is enabled */
    columnManager: boolean;
    /** Whether to use server-side mode */
    serverMode: boolean;
    /** Sort change event */
    sortChange: EventEmitter<SortEvent>;
    /** Page change event */
    pageChange: EventEmitter<PageEvent>;
    /** Search change event */
    searchChange: EventEmitter<string>;
    /** Column visibility change event */
    columnVisibilityChange: EventEmitter<TableColumn[]>;
    /** Row click event */
    rowClick: EventEmitter<any>;
    /** Available page sizes */
    pageSizes: number[];
    /** Current page (1-indexed) */
    currentPage: number;
    /** Current sort state */
    sortField: string | null;
    sortDirection: SortDirection;
    /** Search query */
    searchQuery: string;
    /** Column manager dropdown state */
    columnManagerOpen: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /** Get visible columns */
    get visibleColumns(): TableColumn[];
    /** Get displayed data (with pagination, sorting, filtering if not server mode) */
    get displayedData(): any[];
    /** Get total number of pages */
    get totalPages(): number;
    /** Handle column header click for sorting */
    onHeaderClick(column: TableColumn): void;
    /** Handle page change */
    goToPage(page: number): void;
    /** Handle page size change */
    onPageSizeChange(newSize: number): void;
    /** Handle search input */
    onSearch(query: string): void;
    /** Toggle column visibility */
    toggleColumnVisibility(column: TableColumn): void;
    /** Toggle column manager dropdown */
    toggleColumnManager(): void;
    /** Handle row click */
    onRowClick(row: any): void;
    /** Handle keyboard navigation */
    onKeyDown(event: KeyboardEvent, row: any): void;
    /** Get sort indicator for column */
    getSortIndicator(column: TableColumn): string;
    /** Track by function for rows */
    trackByIndex(index: number): number;
    /** Track by function for columns */
    trackByField(index: number, column: TableColumn): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "ui-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "searchable": { "alias": "searchable"; "required": false; }; "sortable": { "alias": "sortable"; "required": false; }; "columnManager": { "alias": "columnManager"; "required": false; }; "serverMode": { "alias": "serverMode"; "required": false; }; }, { "sortChange": "sortChange"; "pageChange": "pageChange"; "searchChange": "searchChange"; "columnVisibilityChange": "columnVisibilityChange"; "rowClick": "rowClick"; }, never, never, true, never>;
}
