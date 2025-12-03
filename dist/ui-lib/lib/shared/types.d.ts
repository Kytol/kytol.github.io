/**
 * Shared types and interfaces for UI Library components
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonSizeConfig {
    padding: string;
    fontSize: string;
}
export declare const BUTTON_SIZES: Record<ButtonSize, ButtonSizeConfig>;
export type InputType = 'text' | 'number' | 'email' | 'password';
export type CalendarMode = 'single' | 'range';
export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isDisabled: boolean;
}
export interface CalendarState {
    currentMonth: Date;
    selectedDate: Date | null;
    selectedRange: [Date, Date] | null;
    focusedDate: Date;
    viewMode: 'days' | 'months' | 'years';
}
export interface TableColumn {
    field: string;
    title: string;
    sortable?: boolean;
    visible?: boolean;
    width?: string;
}
export type SortDirection = 'asc' | 'desc' | null;
export interface SortEvent {
    field: string;
    direction: SortDirection;
}
export interface PageEvent {
    page: number;
    pageSize: number;
}
export interface TableState {
    currentPage: number;
    pageSize: number;
    sortField: string | null;
    sortDirection: SortDirection;
    searchQuery: string;
    visibleColumns: string[];
}
export declare const DEFAULT_PAGE_SIZES: number[];
export declare const DEFAULT_DEBOUNCE_MS = 300;
