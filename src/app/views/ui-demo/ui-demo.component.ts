import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../projects/ui-lib/src/lib/button/button.component';
import { InputComponent } from '../../../../projects/ui-lib/src/lib/input/input.component';
import { SearchComponent } from '../../../../projects/ui-lib/src/lib/search/search.component';
import { CalendarComponent } from '../../../../projects/ui-lib/src/lib/calendar/calendar.component';
import { TableComponent } from '../../../../projects/ui-lib/src/lib/table/table.component';
import { TableColumn } from '../../../../projects/ui-lib/src/lib/shared/types';

@Component({
  selector: 'app-ui-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent, SearchComponent, CalendarComponent, TableComponent],
  template: `
    <div class="theme-wrapper" [class.theme-dark]="isDarkTheme" [class.theme-light]="!isDarkTheme">
      <div class="demo-container">
        <div class="demo-header">
          <h1>📦 UI Library Demo</h1>
          <ui-button [variant]="'outline'" (clicked)="toggleTheme()">
            {{ isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode' }}
          </ui-button>
        </div>

        <section class="demo-section">
          <h2>Button Component</h2>
          <div class="demo-label">Variants</div>
          <div class="demo-row">
            <ui-button variant="primary">Primary</ui-button>
            <ui-button variant="secondary">Secondary</ui-button>
            <ui-button variant="outline">Outline</ui-button>
          </div>
          <div class="demo-label">Sizes</div>
          <div class="demo-row">
            <ui-button size="sm">Small</ui-button>
            <ui-button size="md">Medium</ui-button>
            <ui-button size="lg">Large</ui-button>
          </div>
          <div class="demo-label">States</div>
          <div class="demo-row">
            <ui-button [disabled]="true">Disabled</ui-button>
            <ui-button [loading]="true">Loading</ui-button>
          </div>
        </section>

        <section class="demo-section">
          <h2>Input Component</h2>
          <div class="demo-row" style="flex-direction: column; max-width: 400px;">
            <ui-input label="Username" placeholder="Enter your username" [(ngModel)]="inputValue" />
            <ui-input label="Email" type="email" placeholder="Enter your email" prefixIcon="📧" />
            <ui-input label="Password" type="password" placeholder="Enter password" suffixIcon="👁️" />
            <ui-input label="With Error" placeholder="Invalid input" error="This field is required" />
            <ui-input label="Disabled" placeholder="Cannot edit" [disabled]="true" />
          </div>
        </section>

        <section class="demo-section">
          <h2>Search Component</h2>
          <div class="demo-row" style="max-width: 400px;">
            <ui-search placeholder="Search items..." [(value)]="searchValue" />
          </div>
          @if (searchValue) {
            <p style="margin-top: 8px; color: var(--color-secondary);">Searching for: "{{ searchValue }}"</p>
          }
        </section>

        <section class="demo-section">
          <h2>Calendar Component</h2>
          <div class="demo-row">
            <div>
              <div class="demo-label">Single Date Selection</div>
              <ui-calendar mode="single" (valueChange)="onDateChange($event)" />
            </div>
            <div>
              <div class="demo-label">With Time Picker</div>
              <ui-calendar mode="single" [showTime]="true" />
            </div>
          </div>
        </section>

        <section class="demo-section">
          <h2>Table Component</h2>
          <ui-table [columns]="tableColumns" [data]="tableData" [sortable]="true" [searchable]="true" [columnManager]="true" [pageSize]="5" />
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./ui-demo.component.css']
})
export class UiDemoComponent {
  isDarkTheme = true;
  inputValue = '';
  searchValue = '';
  selectedDate: Date | null = null;

  tableColumns: TableColumn[] = [
    { field: 'id', title: 'ID', width: '60px' },
    { field: 'name', title: 'Name', sortable: true },
    { field: 'email', title: 'Email', sortable: true },
    { field: 'role', title: 'Role', sortable: true }
  ];

  tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin' }
  ];

  toggleTheme(): void { this.isDarkTheme = !this.isDarkTheme; }
  onDateChange(date: Date | [Date, Date]): void { this.selectedDate = Array.isArray(date) ? date[0] : date; }
}
