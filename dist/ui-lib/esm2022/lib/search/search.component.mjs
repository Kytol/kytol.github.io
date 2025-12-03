import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DEFAULT_DEBOUNCE_MS } from '../shared/types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * UI Search Component
 *
 * A search field component with debounce functionality.
 * Emits valueChange events after the debounce period.
 */
export class SearchComponent {
    /** Placeholder text for the search input */
    placeholder = 'Search...';
    /** Current search value */
    value = '';
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
        this.subscription = this.searchSubject.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe(value => {
            this.valueChange.emit(value);
        });
    }
    /** Get CSS classes for the search wrapper */
    get wrapperClasses() {
        return {
            'ui-search': true,
            'ui-search--disabled': this.disabled
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
        if (event.key === 'Escape' && !this.disabled) {
            this.clearSearch();
        }
    }
    /** Clear the search value */
    clearSearch() {
        this.value = '';
        this.searchSubject.next('');
        this.valueChange.emit('');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SearchComponent, isStandalone: true, selector: "ui-search", inputs: { placeholder: "placeholder", value: "value", debounce: "debounce", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Search icon -->\r\n  <span class=\"ui-search__icon\" aria-hidden=\"true\">\r\n    \uD83D\uDD0D\r\n  </span>\r\n\r\n  <!-- Search input -->\r\n  <input\r\n    type=\"text\"\r\n    class=\"ui-search__input\"\r\n    [value]=\"value\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [attr.aria-label]=\"placeholder\"\r\n    (input)=\"onInputChange($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n\r\n  <!-- Clear button -->\r\n  <button\r\n    *ngIf=\"value && !disabled\"\r\n    type=\"button\"\r\n    class=\"ui-search__clear\"\r\n    aria-label=\"Clear search\"\r\n    (click)=\"clearSearch()\"\r\n  >\r\n    \u2715\r\n  </button>\r\n</div>\r\n", styles: [".ui-search{display:flex;align-items:center;height:42px;padding:0 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);transition:border-color .15s ease,box-shadow .15s ease}.ui-search:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-search--disabled{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-search__icon{flex-shrink:0;margin-right:8px;color:var(--color-secondary, #6b7280);font-size:14px}.ui-search__input{flex:1;height:100%;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-search__input::placeholder{color:var(--color-secondary, #6b7280)}.ui-search__input:disabled{cursor:not-allowed}.ui-search__clear{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:8px;padding:0;border:none;border-radius:50%;background-color:var(--color-surface, #f6f7f8);color:var(--color-secondary, #6b7280);font-size:12px;cursor:pointer;transition:background-color .15s ease}.ui-search__clear:hover{background-color:var(--color-border, #d1d5db)}.ui-search__clear:focus-visible{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-search', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [ngClass]=\"wrapperClasses\">\r\n  <!-- Search icon -->\r\n  <span class=\"ui-search__icon\" aria-hidden=\"true\">\r\n    \uD83D\uDD0D\r\n  </span>\r\n\r\n  <!-- Search input -->\r\n  <input\r\n    type=\"text\"\r\n    class=\"ui-search__input\"\r\n    [value]=\"value\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [attr.aria-label]=\"placeholder\"\r\n    (input)=\"onInputChange($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n\r\n  <!-- Clear button -->\r\n  <button\r\n    *ngIf=\"value && !disabled\"\r\n    type=\"button\"\r\n    class=\"ui-search__clear\"\r\n    aria-label=\"Clear search\"\r\n    (click)=\"clearSearch()\"\r\n  >\r\n    \u2715\r\n  </button>\r\n</div>\r\n", styles: [".ui-search{display:flex;align-items:center;height:42px;padding:0 12px;border:1px solid var(--color-border, #d1d5db);border-radius:var(--radius-md, 6px);background-color:var(--color-bg, #ffffff);font-family:var(--font-family, \"Inter\", sans-serif);transition:border-color .15s ease,box-shadow .15s ease}.ui-search:focus-within{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, .25))}.ui-search--disabled{background-color:var(--color-surface, #f6f7f8);opacity:.6;cursor:not-allowed}.ui-search__icon{flex-shrink:0;margin-right:8px;color:var(--color-secondary, #6b7280);font-size:14px}.ui-search__input{flex:1;height:100%;border:none;background:transparent;font-size:var(--font-size-base, 14px);color:var(--color-text, #222);outline:none}.ui-search__input::placeholder{color:var(--color-secondary, #6b7280)}.ui-search__input:disabled{cursor:not-allowed}.ui-search__clear{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;margin-left:8px;padding:0;border:none;border-radius:50%;background-color:var(--color-surface, #f6f7f8);color:var(--color-secondary, #6b7280);font-size:12px;cursor:pointer;transition:background-color .15s ease}.ui-search__clear:hover{background-color:var(--color-border, #d1d5db)}.ui-search__clear:focus-visible{outline:2px solid var(--color-primary, #3b82f6);outline-offset:2px}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], debounce: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWxpYi9zcmMvbGliL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbGliL3NyYy9saWIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXREOzs7OztHQUtHO0FBU0gsTUFBTSxPQUFPLGVBQWU7SUFDMUIsNENBQTRDO0lBQ25DLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFFbkMsMkJBQTJCO0lBQ2xCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsb0NBQW9DO0lBQzNCLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUV4QywyQ0FBMkM7SUFDbEMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUUxQix3REFBd0Q7SUFDOUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFbkQsbUNBQW1DO0lBQzNCLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBQ3RDLFlBQVksR0FBd0IsSUFBSSxDQUFDO0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFHRCxzQ0FBc0M7SUFDOUIsYUFBYTtRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN6QyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUMzQixvQkFBb0IsRUFBRSxDQUN2QixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBNkM7SUFDN0MsSUFBSSxjQUFjO1FBQ2hCLE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSTtZQUNqQixxQkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFpQztJQUNqQyxhQUFhLENBQUMsS0FBWTtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO3dHQXBFVSxlQUFlOzRGQUFmLGVBQWUsa05DOUI1Qix5dEJBNkJBLDg2Q0RKWSxZQUFZLGdPQUFFLFdBQVc7OzRGQUt4QixlQUFlO2tCQVIzQixTQUFTOytCQUNFLFdBQVcsY0FDVCxJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLG1CQUduQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUl0QyxXQUFXO3NCQUFuQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBERUZBVUxUX0RFQk9VTkNFX01TIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBVSSBTZWFyY2ggQ29tcG9uZW50XHJcbiAqIFxyXG4gKiBBIHNlYXJjaCBmaWVsZCBjb21wb25lbnQgd2l0aCBkZWJvdW5jZSBmdW5jdGlvbmFsaXR5LlxyXG4gKiBFbWl0cyB2YWx1ZUNoYW5nZSBldmVudHMgYWZ0ZXIgdGhlIGRlYm91bmNlIHBlcmlvZC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktc2VhcmNoJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIFBsYWNlaG9sZGVyIHRleHQgZm9yIHRoZSBzZWFyY2ggaW5wdXQgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xyXG5cclxuICAvKiogQ3VycmVudCBzZWFyY2ggdmFsdWUgKi9cclxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG5cclxuICAvKiogRGVib3VuY2UgdGltZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuICBASW5wdXQoKSBkZWJvdW5jZSA9IERFRkFVTFRfREVCT1VOQ0VfTVM7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWFyY2ggaW5wdXQgaXMgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKGFmdGVyIGRlYm91bmNlKSAqL1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvKiogU3ViamVjdCBmb3IgZGVib3VuY2luZyBpbnB1dCAqL1xyXG4gIHByaXZhdGUgc2VhcmNoU3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXR1cERlYm91bmNlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBTZXQgdXAgZGVib3VuY2VkIHZhbHVlIGVtaXNzaW9uICovXHJcbiAgcHJpdmF0ZSBzZXR1cERlYm91bmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnNlYXJjaFN1YmplY3QucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgQ1NTIGNsYXNzZXMgZm9yIHRoZSBzZWFyY2ggd3JhcHBlciAqL1xyXG4gIGdldCB3cmFwcGVyQ2xhc3NlcygpOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAndWktc2VhcmNoJzogdHJ1ZSxcclxuICAgICAgJ3VpLXNlYXJjaC0tZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzICovXHJcbiAgb25JbnB1dENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy52YWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2VhcmNoU3ViamVjdC5uZXh0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZSBFc2NhcGUga2V5IHRvIGNsZWFyIHRoZSBzZWFyY2ggKi9cclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJTZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDbGVhciB0aGUgc2VhcmNoIHZhbHVlICovXHJcbiAgY2xlYXJTZWFyY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLnNlYXJjaFN1YmplY3QubmV4dCgnJyk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoJycpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc2VzXCI+XHJcbiAgPCEtLSBTZWFyY2ggaWNvbiAtLT5cclxuICA8c3BhbiBjbGFzcz1cInVpLXNlYXJjaF9faWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAg8J+UjVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSBTZWFyY2ggaW5wdXQgLS0+XHJcbiAgPGlucHV0XHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICBjbGFzcz1cInVpLXNlYXJjaF9faW5wdXRcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAvPlxyXG5cclxuICA8IS0tIENsZWFyIGJ1dHRvbiAtLT5cclxuICA8YnV0dG9uXHJcbiAgICAqbmdJZj1cInZhbHVlICYmICFkaXNhYmxlZFwiXHJcbiAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgIGNsYXNzPVwidWktc2VhcmNoX19jbGVhclwiXHJcbiAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgc2VhcmNoXCJcclxuICAgIChjbGljayk9XCJjbGVhclNlYXJjaCgpXCJcclxuICA+XHJcbiAgICDinJVcclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==