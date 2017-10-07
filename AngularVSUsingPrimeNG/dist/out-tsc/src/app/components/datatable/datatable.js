var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Component, ElementRef, Input, ViewContainerRef, ViewChild, IterableDiffers, Output, EventEmitter, ContentChild, ContentChildren, Renderer2, QueryList, TemplateRef, ChangeDetectorRef, Inject, forwardRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared';
import { PaginatorModule } from '../paginator/paginator';
import { Column, Header, Footer, HeaderColumnGroup, FooterColumnGroup, PrimeTemplate } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
let DTRadioButton = class DTRadioButton {
    constructor() {
        this.onClick = new EventEmitter();
    }
    handleClick(event) {
        this.onClick.emit(event);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DTRadioButton.prototype, "checked", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DTRadioButton.prototype, "onClick", void 0);
DTRadioButton = __decorate([
    Component({
        selector: 'p-dtRadioButton',
        template: `
        <div class="ui-radiobutton ui-widget">
            <div class="ui-helper-hidden-accessible">
                <input type="radio" [checked]="checked">
            </div>
            <div class="ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default" (click)="handleClick($event)"
                        (mouseenter)="hover=true" (mouseleave)="hover=false"
                        [ngClass]="{'ui-state-hover':hover,'ui-state-active':checked}">
                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{'fa fa-circle':checked}"></span>
            </div>
        </div>
    `
    })
], DTRadioButton);
export { DTRadioButton };
let DTCheckbox = class DTCheckbox {
    constructor() {
        this.onChange = new EventEmitter();
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onChange.emit({ originalEvent: event, checked: !this.checked });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DTCheckbox.prototype, "checked", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DTCheckbox.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DTCheckbox.prototype, "onChange", void 0);
DTCheckbox = __decorate([
    Component({
        selector: 'p-dtCheckbox',
        template: `
        <div class="ui-chkbox ui-widget">
            <div class="ui-helper-hidden-accessible">
                <input type="checkbox" [checked]="checked">
            </div>
            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" (click)="handleClick($event)"
                        (mouseover)="hover=true" (mouseout)="hover=false" 
                        [ngClass]="{'ui-state-hover':hover&&!disabled,'ui-state-active':checked&&!disabled,'ui-state-disabled':disabled}">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="{'fa fa-check':checked}"></span>
            </div>
        </div>
    `
    })
], DTCheckbox);
export { DTCheckbox };
let RowExpansionLoader = class RowExpansionLoader {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.template, {
            '\$implicit': this.rowData,
            'rowIndex': this.rowIndex
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], RowExpansionLoader.prototype, "template", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RowExpansionLoader.prototype, "rowData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RowExpansionLoader.prototype, "rowIndex", void 0);
RowExpansionLoader = __decorate([
    Component({
        selector: 'p-rowExpansionLoader',
        template: ``
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], RowExpansionLoader);
export { RowExpansionLoader };
let ColumnHeaders = class ColumnHeaders {
    constructor(dt) {
        this.dt = dt;
    }
};
__decorate([
    Input("pColumnHeaders"),
    __metadata("design:type", Array)
], ColumnHeaders.prototype, "columns", void 0);
ColumnHeaders = __decorate([
    Component({
        selector: '[pColumnHeaders]',
        template: `
        <ng-template ngFor let-col [ngForOf]="columns" let-lastCol="last">
            <th #headerCell [attr.id]="col.colId" [ngStyle]="col.style" [class]="col.styleClass" (click)="dt.sort($event,col)" [attr.colspan]="col.colspan" [attr.rowspan]="col.rowspan"
                [ngClass]="{'ui-state-default ui-unselectable-text':true, 'ui-sortable-column': col.sortable, 'ui-state-active': dt.isSorted(col), 'ui-resizable-column': dt.resizableColumns, 'ui-selection-column':col.selectionMode,
                            'ui-helper-hidden': col.hidden}" 
                (dragstart)="dt.onColumnDragStart($event)" (dragleave)="dt.onColumnDragleave($event)" (drop)="dt.onColumnDrop($event)" (mousedown)="dt.onHeaderMousedown($event,headerCell)"
                [attr.tabindex]="col.sortable ? tabindex : null" (keydown)="dt.onHeaderKeydown($event,col)">
                <span class="ui-column-resizer ui-clickable" *ngIf="dt.resizableColumns && ((dt.columnResizeMode == 'fit' && !lastCol) || dt.columnResizeMode == 'expand')" (mousedown)="dt.initColumnResize($event)"></span>
                <span class="ui-column-title" *ngIf="!col.selectionMode&&!col.headerTemplate">{{col.header}}</span>
                <span class="ui-column-title" *ngIf="col.headerTemplate">
                    <p-columnHeaderTemplateLoader [column]="col"></p-columnHeaderTemplateLoader>
                </span>
                <span class="ui-sortable-column-icon fa fa-fw fa-sort" *ngIf="col.sortable"
                     [ngClass]="{'fa-sort-desc': (dt.getSortOrder(col) == -1),'fa-sort-asc': (dt.getSortOrder(col) == 1)}"></span>
                <input [attr.type]="col.filterType" class="ui-column-filter ui-inputtext ui-widget ui-state-default ui-corner-all" [attr.maxlength]="col.filterMaxlength" [attr.placeholder]="col.filterPlaceholder" *ngIf="col.filter&&!col.filterTemplate" [value]="dt.filters[col.filterField||col.field] ? dt.filters[col.filterField||col.field].value : ''" 
                    (click)="dt.onFilterInputClick($event)" (input)="dt.onFilterKeyup($event.target.value, col.filterField||col.field, col.filterMatchMode)"/>
                <p-columnFilterTemplateLoader [column]="col" *ngIf="col.filterTemplate"></p-columnFilterTemplateLoader>
                <p-dtCheckbox *ngIf="col.selectionMode=='multiple'" (onChange)="dt.toggleRowsWithCheckbox($event)" [checked]="dt.allSelected" [disabled]="dt.isEmpty()"></p-dtCheckbox>
            </th>
        </ng-template>
    `
    }),
    __param(0, Inject(forwardRef(() => DataTable))),
    __metadata("design:paramtypes", [DataTable])
], ColumnHeaders);
export { ColumnHeaders };
let ColumnFooters = class ColumnFooters {
    constructor(dt) {
        this.dt = dt;
    }
};
__decorate([
    Input("pColumnFooters"),
    __metadata("design:type", Array)
], ColumnFooters.prototype, "columns", void 0);
ColumnFooters = __decorate([
    Component({
        selector: '[pColumnFooters]',
        template: `
        <td *ngFor="let col of columns" [ngStyle]="col.style" [class]="col.styleClass"
            [attr.colspan]="col.colspan" [attr.rowspan]="col.rowspan"
            [ngClass]="{'ui-state-default':true, 'ui-helper-hidden': col.hidden}">
            <span class="ui-column-footer" *ngIf="!col.footerTemplate">{{col.footer}}</span>
            <span class="ui-column-footer" *ngIf="col.footerTemplate">
                <p-columnFooterTemplateLoader [column]="col"></p-columnFooterTemplateLoader>
            </span>
        </td>
    `
    }),
    __param(0, Inject(forwardRef(() => DataTable))),
    __metadata("design:paramtypes", [DataTable])
], ColumnFooters);
export { ColumnFooters };
let TableBody = class TableBody {
    constructor(dt) {
        this.dt = dt;
    }
    visibleColumns() {
        return this.columns ? this.columns.filter(c => !c.hidden) : [];
    }
};
__decorate([
    Input("pTableBody"),
    __metadata("design:type", Array)
], TableBody.prototype, "columns", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableBody.prototype, "data", void 0);
TableBody = __decorate([
    Component({
        selector: '[pTableBody]',
        template: `
        <ng-template ngFor let-rowData [ngForOf]="data" let-even="even" let-odd="odd" let-rowIndex="index" [ngForTrackBy]="dt.rowTrackBy">
            <tr #rowGroupElement class="ui-widget-header ui-rowgroup-header" 
                *ngIf="dt.rowGroupMode=='subheader' && (rowIndex === 0||(dt.resolveFieldData(rowData,dt.groupField) !== dt.resolveFieldData(dt.dataToRender[rowIndex - 1], dt.groupField)))"
                (click)="dt.onRowGroupClick($event)" [ngStyle]="{'cursor': dt.sortableRowGroup ? 'pointer' : 'auto'}">
                <td [attr.colspan]="dt.visibleColumns().length">
                    <a href="#" *ngIf="dt.expandableRowGroups" (click)="dt.toggleRowGroup($event,rowData)">
                        <span class="fa fa-fw" [ngClass]="dt.isRowGroupExpanded(rowData) ? dt.expandedIcon : dt.collapsedIcon"></span>
                    </a>
                    <span class="ui-rowgroup-header-name">
                        <p-templateLoader [template]="dt.rowGroupHeaderTemplate" [data]="rowData"></p-templateLoader>
                    </span>
                </td>
            </tr>
            <tr #rowElement *ngIf="!dt.expandableRowGroups||dt.isRowGroupExpanded(rowData)"
                    (click)="dt.handleRowClick($event, rowData, rowIndex)" (dblclick)="dt.rowDblclick($event,rowData)" (contextmenu)="dt.onRowRightClick($event,rowData)" (touchend)="dt.handleRowTouchEnd($event)"
                    [ngClass]="[even&&dt.rowGroupMode!='rowspan'? 'ui-datatable-even':'',
                                odd&&dt.rowGroupMode!='rowspan'?'ui-datatable-odd':'',
                                dt.isSelected(rowData)? 'ui-state-highlight': '', 
                                dt.getRowStyleClass(rowData,rowIndex)]">
                <ng-template ngFor let-col [ngForOf]="columns" let-colIndex="index">
                    <td #cell *ngIf="!dt.rowGroupMode || (dt.rowGroupMode == 'subheader') ||
                        (dt.rowGroupMode=='rowspan' && ((dt.sortField==col.field && dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].index == rowIndex) || (dt.sortField!=col.field)))"
                        [ngStyle]="col.style" [class]="col.styleClass" (click)="dt.switchCellToEditMode(cell,col,rowData)"
                        [ngClass]="{'ui-editable-column':col.editable,'ui-selection-column':col.selectionMode, 'ui-helper-hidden': col.hidden}"
                        [attr.rowspan]="(dt.rowGroupMode=='rowspan' && dt.sortField == col.field && dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].index == rowIndex) ? dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].size : null">
                        <span class="ui-column-title" *ngIf="dt.responsive">{{col.header}}</span>
                        <span class="ui-cell-data" *ngIf="!col.bodyTemplate && !col.expander && !col.selectionMode">{{dt.resolveFieldData(rowData,col.field)}}</span>
                        <span class="ui-cell-data" *ngIf="col.bodyTemplate">
                            <p-columnBodyTemplateLoader [column]="col" [rowData]="rowData" [rowIndex]="rowIndex + dt.first"></p-columnBodyTemplateLoader>
                        </span>
                        <div class="ui-cell-editor" *ngIf="col.editable">
                            <input *ngIf="!col.editorTemplate" type="text" [(ngModel)]="rowData[col.field]" required="true"
                                (keydown)="dt.onCellEditorKeydown($event, col, rowData, rowIndex)" class="ui-inputtext ui-widget ui-state-default ui-corner-all"/>
                            <a *ngIf="col.editorTemplate" class="ui-cell-editor-proxy-focus" href="#" (focus)="dt.onCustomEditorFocusPrev($event, colIndex)"></a>
                            <p-columnEditorTemplateLoader *ngIf="col.editorTemplate" [column]="col" [rowData]="rowData" [rowIndex]="rowIndex"></p-columnEditorTemplateLoader>
                            <a *ngIf="col.editorTemplate" class="ui-cell-editor-proxy-focus" href="#" (focus)="dt.onCustomEditorFocusNext($event, colIndex)"></a>
                        </div>
                        <a href="#" *ngIf="col.expander" (click)="dt.toggleRow(rowData,$event)">
                            <span class="ui-row-toggler fa fa-fw ui-clickable" [ngClass]="dt.isRowExpanded(rowData) ? dt.expandedIcon : dt.collapsedIcon"></span>
                        </a>
                        <p-dtRadioButton *ngIf="col.selectionMode=='single'" (onClick)="dt.selectRowWithRadio($event, rowData)" [checked]="dt.isSelected(rowData)"></p-dtRadioButton>
                        <p-dtCheckbox *ngIf="col.selectionMode=='multiple'" (onChange)="dt.toggleRowWithCheckbox($event,rowData)" [checked]="dt.isSelected(rowData)"></p-dtCheckbox>
                    </td>
                </ng-template>
            </tr>
            <tr class="ui-widget-header" *ngIf="dt.rowGroupFooterTemplate && dt.rowGroupMode=='subheader' && ((rowIndex === dt.dataToRender.length - 1)||(dt.resolveFieldData(rowData,dt.groupField) !== dt.resolveFieldData(dt.dataToRender[rowIndex + 1],dt.groupField))) && (!dt.expandableRowGroups || dt.isRowGroupExpanded(rowData))">
                <p-templateLoader class="ui-helper-hidden" [data]="rowData" [template]="dt.rowGroupFooterTemplate"></p-templateLoader>
            </tr>
            <tr *ngIf="dt.expandableRows && dt.isRowExpanded(rowData)">
                <td [attr.colspan]="dt.visibleColumns().length">
                    <p-rowExpansionLoader [rowData]="rowData" [rowIndex]="rowIndex" [template]="dt.rowExpansionTemplate"></p-rowExpansionLoader>
                </td>
            </tr>
        </ng-template>

        <tr *ngIf="dt.isEmpty()" class="ui-widget-content ui-datatable-emptymessage-row">
            <td [attr.colspan]="dt.visibleColumns().length" class="ui-datatable-emptymessage">
                <span *ngIf="!dt.emptyMessageTemplate">{{dt.emptyMessage}}</span>
                <p-templateLoader [template]="dt.emptyMessageTemplate"></p-templateLoader>
            </td>
        </tr>
    `
    }),
    __param(0, Inject(forwardRef(() => DataTable))),
    __metadata("design:paramtypes", [DataTable])
], TableBody);
export { TableBody };
let ScrollableView = class ScrollableView {
    constructor(dt, domHandler, el, renderer, zone) {
        this.dt = dt;
        this.domHandler = domHandler;
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.onVirtualScroll = new EventEmitter();
    }
    ngAfterViewInit() {
        this.initScrolling();
    }
    ngAfterViewChecked() {
        if (this.virtualScroll && !this.rowHeight) {
            let row = this.domHandler.findSingle(this.scrollTable, 'tr.ui-widget-content:not(.ui-datatable-emptymessage-row)');
            if (row) {
                this.rowHeight = this.domHandler.getOuterHeight(row);
            }
        }
        if (!this.frozen) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.alignScrollBar();
                }, 1);
            });
        }
    }
    initScrolling() {
        this.scrollHeader = this.scrollHeaderViewChild.nativeElement;
        this.scrollHeaderBox = this.scrollHeaderBoxViewChild.nativeElement;
        this.scrollBody = this.scrollBodyViewChild.nativeElement;
        this.scrollTable = this.scrollTableViewChild.nativeElement;
        this.scrollTableWrapper = this.scrollTableWrapperViewChild.nativeElement;
        this.scrollFooter = this.scrollFooterViewChild ? this.scrollFooterViewChild.nativeElement : null;
        this.scrollFooterBox = this.scrollFooterBoxViewChild ? this.scrollFooterBoxViewChild.nativeElement : null;
        if (!this.frozen) {
            this.zone.runOutsideAngular(() => {
                this.scrollHeader.addEventListener('scroll', this.onHeaderScroll.bind(this));
                this.scrollBody.addEventListener('scroll', this.onBodyScroll.bind(this));
            });
        }
        if (!this.frozen)
            this.alignScrollBar();
        else
            this.scrollBody.style.paddingBottom = this.domHandler.calculateScrollbarWidth() + 'px';
    }
    onBodyScroll(event) {
        let frozenView = this.el.nativeElement.previousElementSibling;
        if (frozenView) {
            var frozenScrollBody = this.domHandler.findSingle(frozenView, '.ui-datatable-scrollable-body');
        }
        this.scrollHeaderBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        if (this.scrollFooterBox) {
            this.scrollFooterBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        }
        if (frozenScrollBody) {
            frozenScrollBody.scrollTop = this.scrollBody.scrollTop;
        }
        if (this.virtualScroll) {
            let viewport = this.domHandler.getOuterHeight(this.scrollBody);
            let tableHeight = this.domHandler.getOuterHeight(this.scrollTable);
            let pageHeight = this.rowHeight * this.dt.rows;
            let virtualTableHeight = this.domHandler.getOuterHeight(this.scrollTableWrapper);
            let pageCount = (virtualTableHeight / pageHeight) || 1;
            if (this.scrollBody.scrollTop + viewport > parseFloat(this.scrollTable.style.top) + tableHeight || this.scrollBody.scrollTop < parseFloat(this.scrollTable.style.top)) {
                let page = Math.floor((this.scrollBody.scrollTop * pageCount) / (this.scrollBody.scrollHeight)) + 1;
                this.onVirtualScroll.emit({
                    page: page
                });
                this.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
            }
        }
    }
    onHeaderScroll(event) {
        this.scrollHeader.scrollLeft = 0;
    }
    hasVerticalOverflow() {
        return this.domHandler.getOuterHeight(this.scrollTable) > this.domHandler.getOuterHeight(this.scrollBody);
    }
    alignScrollBar() {
        let scrollBarWidth = this.hasVerticalOverflow() ? this.domHandler.calculateScrollbarWidth() : 0;
        this.scrollHeaderBox.style.marginRight = scrollBarWidth + 'px';
        if (this.scrollFooterBox) {
            this.scrollFooterBox.style.marginRight = scrollBarWidth + 'px';
        }
    }
    ngOnDestroy() {
        this.scrollHeader.removeEventListener('scroll', this.onHeaderScroll);
        this.scrollBody.removeEventListener('scroll', this.onBodyScroll);
    }
};
__decorate([
    Input("pScrollableView"),
    __metadata("design:type", Array)
], ScrollableView.prototype, "columns", void 0);
__decorate([
    ViewChild('scrollHeader'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
__decorate([
    ViewChild('scrollHeaderBox'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
__decorate([
    ViewChild('scrollBody'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollBodyViewChild", void 0);
__decorate([
    ViewChild('scrollTable'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollTableViewChild", void 0);
__decorate([
    ViewChild('scrollTableWrapper'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollTableWrapperViewChild", void 0);
__decorate([
    ViewChild('scrollFooter'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollFooterViewChild", void 0);
__decorate([
    ViewChild('scrollFooterBox'),
    __metadata("design:type", ElementRef)
], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ScrollableView.prototype, "frozen", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ScrollableView.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ScrollableView.prototype, "virtualScroll", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ScrollableView.prototype, "onVirtualScroll", void 0);
ScrollableView = __decorate([
    Component({
        selector: '[pScrollableView]',
        template: `
        <div #scrollHeader class="ui-widget-header ui-datatable-scrollable-header" [ngStyle]="{'width': width}">
            <div #scrollHeaderBox  class="ui-datatable-scrollable-header-box">
                <table [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <thead class="ui-datatable-thead">
                        <tr *ngIf="!dt.headerColumnGroup" class="ui-state-default" [pColumnHeaders]="columns"></tr>
                        <ng-template [ngIf]="dt.headerColumnGroup">
                            <tr *ngFor="let headerRow of dt.headerColumnGroup.rows" class="ui-state-default" [pColumnHeaders]="headerRow.columns"></tr>
                        </ng-template>
                    </thead>
                    <tbody *ngIf="dt.frozenValue" [ngClass]="{'ui-datatable-data ui-widget-content': true, 'ui-datatable-hoverable-rows': (dt.rowHover||dt.selectionMode)}" [pTableBody]="columns" [data]="dt.frozenValue"></tbody>
                </table>
            </div>
        </div>
        <div #scrollBody class="ui-datatable-scrollable-body" [ngStyle]="{'width': width,'max-height':dt.scrollHeight}">
            <div #scrollTableWrapper class="ui-datatable-scrollable-table-wrapper" style="position:relative">
                <table #scrollTable [class]="dt.tableStyleClass" [ngStyle]="dt.tableStyle" [ngClass]="{'ui-datatable-virtual-table':virtualScroll}" style="top:0px">
                    <colgroup class="ui-datatable-scrollable-colgroup">
                        <col *ngFor="let col of columns" [ngStyle]="col.style" [ngClass]="{'ui-helper-hidden': col.hidden}"/>
                    </colgroup>
                    <tbody [ngClass]="{'ui-datatable-data ui-widget-content': true, 'ui-datatable-hoverable-rows': (dt.rowHover||dt.selectionMode)}" [pTableBody]="columns" [data]="dt.dataToRender"></tbody>
                </table>
            </div>
        </div>
        <div #scrollFooter class="ui-widget-header ui-datatable-scrollable-footer" [ngStyle]="{'width': width}" *ngIf="dt.hasFooter()">
            <div #scrollFooterBox  class="ui-datatable-scrollable-footer-box">
                <table [ngClass]="dt.tableStyleClass" [ngStyle]="dt.tableStyle">
                    <tfoot class="ui-datatable-tfoot">
                        <tr *ngIf="!dt.footerColumnGroup" [pColumnFooters]="columns" class="ui-state-default"></tr>
                        <ng-template [ngIf]="dt.footerColumnGroup">
                            <tr *ngFor="let footerRow of dt.footerColumnGroup.rows" class="ui-state-default" [pColumnFooters]="footerRow.columns"></tr>
                        </ng-template>
                    </tfoot>
                </table>
            </div>
        </div>
    `
    }),
    __param(0, Inject(forwardRef(() => DataTable))),
    __metadata("design:paramtypes", [DataTable, DomHandler, ElementRef, Renderer2, NgZone])
], ScrollableView);
export { ScrollableView };
let DataTable = class DataTable {
    constructor(el, domHandler, differs, renderer, changeDetector, objectUtils, zone) {
        this.el = el;
        this.domHandler = domHandler;
        this.differs = differs;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.pageLinks = 5;
        this.selectionChange = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onRowSelect = new EventEmitter();
        this.onRowUnselect = new EventEmitter();
        this.onRowDblclick = new EventEmitter();
        this.onHeaderCheckboxToggle = new EventEmitter();
        this.onContextMenuSelect = new EventEmitter();
        this.filterDelay = 300;
        this.onLazyLoad = new EventEmitter();
        this.columnResizeMode = 'fit';
        this.onColResize = new EventEmitter();
        this.onColReorder = new EventEmitter();
        this.sortMode = 'single';
        this.sortOrder = 1;
        this.defaultSortOrder = 1;
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.emptyMessage = 'No records found';
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.metaKeySelection = true;
        this.rowTrackBy = (index, item) => item;
        this.immutable = true;
        this.compareSelectionBy = 'deepEquals';
        this.onEditInit = new EventEmitter();
        this.onEditComplete = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onEditCancel = new EventEmitter();
        this.onPage = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.rowExpandMode = 'multiple';
        this.expandedIcon = 'fa-chevron-circle-down';
        this.collapsedIcon = 'fa-chevron-circle-right';
        this.tabindex = 1;
        this.sortableRowGroup = true;
        this.filters = {};
        this.loadingIcon = 'fa-circle-o-notch';
        this.virtualScrollDelay = 500;
        this.valueChange = new EventEmitter();
        this.firstChange = new EventEmitter();
        this.onRowExpand = new EventEmitter();
        this.onRowCollapse = new EventEmitter();
        this.onRowGroupExpand = new EventEmitter();
        this.onRowGroupCollapse = new EventEmitter();
        this.page = 0;
        this.columnsChanged = false;
        this._first = 0;
        this.filterConstraints = {
            startsWith(value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                let filterValue = filter.toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith(value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                let filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            notEquals(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return false;
                }
                if (value === undefined || value === null) {
                    return true;
                }
                return value.toString().toLowerCase() != filter.toString().toLowerCase();
            },
            in(value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (let i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            }
        };
        this.differ = differs.find([]).create(null);
    }
    ngOnInit() {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
    }
    ngAfterContentInit() {
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(_ => {
            this.initColumns();
            this.changeDetector.markForCheck();
        });
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'rowexpansion':
                    this.rowExpansionTemplate = item.template;
                    break;
                case 'rowgroupheader':
                    this.rowGroupHeaderTemplate = item.template;
                    break;
                case 'rowgroupfooter':
                    this.rowGroupFooterTemplate = item.template;
                    break;
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewChecked() {
        if (this.columnsChanged && this.el.nativeElement.offsetParent) {
            if (this.resizableColumns) {
                this.initResizableColumns();
            }
            if (this.reorderableColumns) {
                this.initColumnReordering();
            }
            this.columnsChanged = false;
        }
        if (this.totalRecordsChanged && this.virtualScroll) {
            let scrollableTable = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-datatable-scrollable-table-wrapper');
            let row = this.domHandler.findSingle(scrollableTable, 'tr.ui-widget-content');
            let rowHeight = this.domHandler.getOuterHeight(row);
            this.virtualTableHeight = this._totalRecords * rowHeight;
            scrollableTable.style.height = this.virtualTableHeight + 'px';
            this.totalRecordsChanged = false;
        }
    }
    ngAfterViewInit() {
        if (this.globalFilter) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', () => {
                if (this.filterTimeout) {
                    clearTimeout(this.filterTimeout);
                }
                this.filterTimeout = setTimeout(() => {
                    this._filter();
                    this.filterTimeout = null;
                }, this.filterDelay);
            });
        }
        this.initialized = true;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (this.immutable) {
            this._value = val ? [...val] : null;
            this.handleDataChange();
        }
        else {
            this._value = val;
        }
        this.valueChange.emit(this.value);
    }
    get first() {
        return this._first;
    }
    set first(val) {
        let shouldPaginate = this.initialized && this._first !== val;
        this._first = val;
        if (shouldPaginate) {
            this.paginate();
        }
    }
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.totalRecordsChanged = true;
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
        if (this.dataKey && !this.preventSelectionKeysPropagation) {
            this.selectionKeys = {};
            if (this._selection) {
                for (let data of this._selection) {
                    this.selectionKeys[String(this.objectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
        }
        this.preventSelectionKeysPropagation = false;
    }
    ngDoCheck() {
        if (!this.immutable) {
            let changes = this.differ.diff(this.value);
            if (changes) {
                this.handleDataChange();
            }
        }
    }
    handleDataChange() {
        this.loading = false;
        if (this.paginator) {
            this.updatePaginator();
        }
        if (!this.lazy) {
            if (this.hasFilter()) {
                this._filter();
            }
            if (this.preventSortPropagation) {
                this.preventSortPropagation = false;
            }
            else if (this.sortField || this.multiSortMeta) {
                if (!this.sortColumn && this.columns) {
                    this.sortColumn = this.columns.find(col => col.field === this.sortField && col.sortable === 'custom');
                }
                if (this.sortMode == 'single')
                    this.sortSingle();
                else if (this.sortMode == 'multiple')
                    this.sortMultiple();
            }
        }
        this.updateDataToRender(this.filteredValue || this.value);
    }
    initColumns() {
        this.columns = this.cols.toArray();
        if (this.scrollable) {
            this.scrollableColumns = [];
            this.frozenColumns = [];
            this.cols.forEach((col) => {
                if (col.frozen) {
                    this.frozenColumns.push(col);
                }
                else {
                    this.scrollableColumns.push(col);
                }
            });
        }
        this.columnsChanged = true;
    }
    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    updateRowGroupMetadata() {
        this.rowGroupMetadata = {};
        if (this.dataToRender) {
            for (let i = 0; i < this.dataToRender.length; i++) {
                let rowData = this.dataToRender[i];
                let group = this.resolveFieldData(rowData, this.sortField);
                if (i == 0) {
                    this.rowGroupMetadata[group] = { index: 0, size: 1 };
                }
                else {
                    let previousRowData = this.dataToRender[i - 1];
                    let previousRowGroup = this.resolveFieldData(previousRowData, this.sortField);
                    if (group === previousRowGroup) {
                        this.rowGroupMetadata[group].size++;
                    }
                    else {
                        this.rowGroupMetadata[group] = { index: i, size: 1 };
                    }
                }
            }
        }
    }
    updatePaginator() {
        //total records
        this.updateTotalRecords();
        //first
        if (this.totalRecords && this.first >= this.totalRecords) {
            let numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this._first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    }
    updateTotalRecords() {
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
    }
    onPageChange(event) {
        this._first = event.first;
        this.firstChange.emit(this.first);
        this.rows = event.rows;
        this.paginate();
    }
    paginate() {
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.updateDataToRender(this.filteredValue || this.value);
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    }
    updateDataToRender(datasource) {
        if ((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            let startIndex = this.lazy ? 0 : this.first;
            let endIndex = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;
            for (let i = startIndex; i < endIndex; i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
        if (this.rowGroupMode) {
            this.updateRowGroupMetadata();
        }
    }
    onVirtualScroll(event) {
        this._first = (event.page - 1) * this.rows;
        this.zone.run(() => {
            if (this.virtualScrollTimer) {
                clearTimeout(this.virtualScrollTimer);
            }
            this.virtualScrollTimer = setTimeout(() => {
                if (this.lazy)
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                else
                    this.updateDataToRender(this.filteredValue || this.value);
            }, this.virtualScrollDelay);
        });
    }
    onHeaderKeydown(event, column) {
        if (event.keyCode == 13) {
            this.sort(event, column);
            event.preventDefault();
        }
    }
    onHeaderMousedown(event, header) {
        if (this.reorderableColumns) {
            if (event.target.nodeName !== 'INPUT') {
                header.draggable = true;
            }
            else if (event.target.nodeName === 'INPUT') {
                header.draggable = false;
            }
        }
    }
    sort(event, column) {
        if (!column.sortable) {
            return;
        }
        let targetNode = event.target.nodeName;
        if ((targetNode == 'TH' && this.domHandler.hasClass(event.target, 'ui-sortable-column')) || ((targetNode == 'SPAN' || targetNode == 'DIV') && !this.domHandler.hasClass(event.target, 'ui-clickable'))) {
            if (!this.immutable) {
                this.preventSortPropagation = true;
            }
            let columnSortField = column.sortField || column.field;
            this.sortOrder = (this.sortField === columnSortField) ? this.sortOrder * -1 : this.defaultSortOrder;
            this.sortField = columnSortField;
            this.sortColumn = column;
            let metaKey = event.metaKey || event.ctrlKey;
            if (this.sortMode == 'multiple') {
                if (!this.multiSortMeta || !metaKey) {
                    this.multiSortMeta = [];
                }
                this.addSortMeta({ field: this.sortField, order: this.sortOrder });
            }
            if (this.lazy) {
                this._first = 0;
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                if (this.sortMode == 'multiple')
                    this.sortMultiple();
                else
                    this.sortSingle();
            }
            this.onSort.emit({
                field: this.sortField,
                order: this.sortOrder,
                multisortmeta: this.multiSortMeta
            });
        }
        this.updateDataToRender(this.filteredValue || this.value);
    }
    sortSingle() {
        if (this.value) {
            if (this.sortColumn && this.sortColumn.sortable === 'custom') {
                this.preventSortPropagation = true;
                this.sortColumn.sortFunction.emit({
                    field: this.sortField,
                    order: this.sortOrder
                });
            }
            else {
                this.value.sort((data1, data2) => {
                    let value1 = this.resolveFieldData(data1, this.sortField);
                    let value2 = this.resolveFieldData(data2, this.sortField);
                    let result = null;
                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2);
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    return (this.sortOrder * result);
                });
            }
            this._first = 0;
            if (this.hasFilter()) {
                this._filter();
            }
        }
    }
    sortMultiple() {
        if (this.value) {
            this.value.sort((data1, data2) => {
                return this.multisortField(data1, data2, this.multiSortMeta, 0);
            });
            if (this.hasFilter()) {
                this._filter();
            }
        }
    }
    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = this.resolveFieldData(data1, multiSortMeta[index].field);
        let value2 = this.resolveFieldData(data2, multiSortMeta[index].field);
        let result = null;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    }
    addSortMeta(meta) {
        var index = -1;
        for (var i = 0; i < this.multiSortMeta.length; i++) {
            if (this.multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }
        if (index >= 0)
            this.multiSortMeta[index] = meta;
        else
            this.multiSortMeta.push(meta);
    }
    isSorted(column) {
        if (!column.sortable) {
            return false;
        }
        let columnSortField = column.sortField || column.field;
        if (this.sortMode === 'single') {
            return (this.sortField && columnSortField === this.sortField);
        }
        else if (this.sortMode === 'multiple') {
            let sorted = false;
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == columnSortField) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    }
    getSortOrder(column) {
        let order = 0;
        let columnSortField = column.sortField || column.field;
        if (this.sortMode === 'single') {
            if (this.sortField && columnSortField === this.sortField) {
                order = this.sortOrder;
            }
        }
        else if (this.sortMode === 'multiple') {
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == columnSortField) {
                        order = this.multiSortMeta[i].order;
                        break;
                    }
                }
            }
        }
        return order;
    }
    onRowGroupClick(event) {
        if (this.rowGroupToggleClick) {
            this.rowGroupToggleClick = false;
            return;
        }
        if (this.sortableRowGroup) {
            let targetNode = event.target.nodeName;
            if ((targetNode == 'TD' || (targetNode == 'SPAN' && !this.domHandler.hasClass(event.target, 'ui-clickable')))) {
                if (this.sortField != this.groupField) {
                    this.sortField = this.groupField;
                    this.sortSingle();
                }
                else {
                    this.sortOrder = -1 * this.sortOrder;
                    this.sortSingle();
                }
            }
        }
    }
    clearSelectionRange() {
        let rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.dataToRender[i];
            let selectionIndex = this.findIndexInSelection(rangeRowData);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            let dataKeyValue = this.dataKey ? String(this.resolveFieldData(rangeRowData, this.dataKey)) : null;
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
            this.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        }
    }
    selectRange(rowIndex) {
        let rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            let rangeRowData = this.dataToRender[i];
            this._selection = [...this.selection, rangeRowData];
            this.selectionChange.emit(this.selection);
            let dataKeyValue = this.dataKey ? String(this.resolveFieldData(rangeRowData, this.dataKey)) : null;
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
            this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        }
    }
    handleRowClick(event, rowData, index) {
        if (this.preventRowClickPropagation) {
            this.preventRowClickPropagation = false;
            return;
        }
        let targetNode = event.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (this.domHandler.hasClass(event.target, 'ui-clickable'))) {
            return;
        }
        this.onRowClick.next({ originalEvent: event, data: rowData });
        if (this.selectionMode) {
            if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
                this.domHandler.clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange();
                }
                this.rangeRowIndex = index;
                this.selectRange(index);
            }
            else {
                let selected = this.isSelected(rowData);
                let metaSelection = this.rowTouched ? false : this.metaKeySelection;
                let dataKeyValue = this.dataKey ? String(this.resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = index;
                this.rangeRowIndex = index;
                if (metaSelection) {
                    let metaKey = event.metaKey || event.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = [...this.selection, rowData];
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                        }
                        else {
                            this._selection = rowData;
                            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else {
                        if (selected) {
                            let selectionIndex = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter((val, i) => i != selectionIndex);
                            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = [...this.selection || [], rowData];
                            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
            this.preventSelectionKeysPropagation = true;
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    selectRowWithRadio(event, rowData) {
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(this.resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
        }
        this.preventSelectionKeysPropagation = true;
        this.preventRowClickPropagation = true;
    }
    toggleRowWithCheckbox(event, rowData) {
        let selectionIndex = this.findIndexInSelection(rowData);
        this.selection = this.selection || [];
        let dataKeyValue = this.dataKey ? String(this.resolveFieldData(rowData, this.dataKey)) : null;
        if (selectionIndex != -1) {
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = [...this.selection, rowData];
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.selectionChange.emit(this.selection);
        this.preventSelectionKeysPropagation = true;
        this.preventRowClickPropagation = true;
    }
    toggleRowsWithCheckbox(event) {
        if (event.checked)
            this.selection = this.headerCheckboxToggleAllPages ? this.value.slice() : this.dataToRender.slice();
        else
            this.selection = [];
        this.selectionChange.emit(this.selection);
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: event.checked });
    }
    onRowRightClick(event, rowData) {
        if (this.contextMenu) {
            let selectionIndex = this.findIndexInSelection(rowData);
            let selected = selectionIndex != -1;
            let dataKeyValue = this.dataKey ? String(this.resolveFieldData(rowData, this.dataKey)) : null;
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = rowData;
                    this.selectionChange.emit(rowData);
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [rowData];
                    this.selectionChange.emit(this.selection);
                }
                if (this.dataKey) {
                    this.selectionKeys[String(this.resolveFieldData(rowData, this.dataKey))] = 1;
                }
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, data: rowData });
        }
        this.preventSelectionKeysPropagation = true;
    }
    rowDblclick(event, rowData) {
        this.onRowDblclick.emit({ originalEvent: event, data: rowData });
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    findIndexInSelection(rowData) {
        let index = -1;
        if (this.selection) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isSelected(rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[this.objectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    }
    equals(data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : this.objectUtils.equals(data1, data2, this.dataKey);
    }
    get allSelected() {
        if (this.headerCheckboxToggleAllPages) {
            return this.selection && this.value && this.selection.length === this.value.length;
        }
        else {
            let val = true;
            if (this.dataToRender && this.selection && (this.dataToRender.length <= this.selection.length)) {
                for (let data of this.dataToRender) {
                    if (!this.isSelected(data)) {
                        val = false;
                        break;
                    }
                }
            }
            else {
                val = false;
            }
            return val;
        }
    }
    onFilterKeyup(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        this.filterTimeout = setTimeout(() => {
            this.filter(value, field, matchMode);
            this.filterTimeout = null;
        }, this.filterDelay);
    }
    filter(value, field, matchMode) {
        if (!this.isFilterBlank(value))
            this.filters[field] = { value: value, matchMode: matchMode };
        else if (this.filters[field])
            delete this.filters[field];
        this._filter();
    }
    isFilterBlank(filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    }
    _filter() {
        this._first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.filteredValue = [];
            for (let i = 0; i < this.value.length; i++) {
                let localMatch = true;
                let globalMatch = false;
                for (let j = 0; j < this.columns.length; j++) {
                    let col = this.columns[j], filterMeta = this.filters[col.filterField || col.field];
                    //local
                    if (filterMeta) {
                        let filterValue = filterMeta.value, filterField = col.filterField || col.field, filterMatchMode = filterMeta.matchMode || 'startsWith', dataFieldValue = this.resolveFieldData(this.value[i], filterField);
                        let filterConstraint = this.filterConstraints[filterMatchMode];
                        if (!filterConstraint(dataFieldValue, filterValue)) {
                            localMatch = false;
                        }
                        if (!localMatch) {
                            break;
                        }
                    }
                    //global
                    if (this.globalFilter && !globalMatch) {
                        globalMatch = this.filterConstraints['contains'](this.resolveFieldData(this.value[i], col.filterField || col.field), this.globalFilter.value);
                    }
                }
                let matches = localMatch;
                if (this.globalFilter) {
                    matches = localMatch && globalMatch;
                }
                if (matches) {
                    this.filteredValue.push(this.value[i]);
                }
            }
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
            this.updateDataToRender(this.filteredValue || this.value);
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
    }
    hasFilter() {
        let empty = true;
        for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty || (this.globalFilter && this.globalFilter.value && this.globalFilter.value.trim().length);
    }
    onFilterInputClick(event) {
        event.stopPropagation();
    }
    switchCellToEditMode(cell, column, rowData) {
        if (!this.selectionMode && this.editable && column.editable) {
            this.editorClick = true;
            this.bindDocumentEditListener();
            if (cell != this.editingCell) {
                if (this.editingCell && this.domHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length == 0) {
                    this.domHandler.removeClass(this.editingCell, 'ui-cell-editing');
                }
                this.editingCell = cell;
                this.onEditInit.emit({ column: column, data: rowData });
                this.domHandler.addClass(cell, 'ui-cell-editing');
                let focusable = this.domHandler.findSingle(cell, '.ui-cell-editor input');
                if (focusable) {
                    setTimeout(() => this.domHandler.invokeElementMethod(focusable, 'focus'), 50);
                }
            }
        }
    }
    switchCellToViewMode(element) {
        this.editingCell = null;
        let cell = this.findCell(element);
        this.domHandler.removeClass(cell, 'ui-cell-editing');
        this.unbindDocumentEditListener();
    }
    closeCell() {
        if (this.editingCell) {
            this.domHandler.removeClass(this.editingCell, 'ui-cell-editing');
            this.editingCell = null;
            this.unbindDocumentEditListener();
        }
    }
    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = this.renderer.listen('document', 'click', (event) => {
                if (!this.editorClick) {
                    this.closeCell();
                }
                this.editorClick = false;
            });
        }
    }
    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            this.documentEditListener();
            this.documentEditListener = null;
        }
    }
    onCellEditorKeydown(event, column, rowData, rowIndex) {
        if (this.editable) {
            this.onEdit.emit({ originalEvent: event, column: column, data: rowData, index: rowIndex });
            //enter
            if (event.keyCode == 13) {
                this.onEditComplete.emit({ column: column, data: rowData, index: rowIndex });
                this.domHandler.invokeElementMethod(event.target, 'blur');
                this.switchCellToViewMode(event.target);
                event.preventDefault();
            }
            else if (event.keyCode == 27) {
                this.onEditCancel.emit({ column: column, data: rowData, index: rowIndex });
                this.domHandler.invokeElementMethod(event.target, 'blur');
                this.switchCellToViewMode(event.target);
                event.preventDefault();
            }
            else if (event.keyCode == 9) {
                this.onEditComplete.emit({ column: column, data: rowData, index: rowIndex });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    }
    moveToPreviousCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (this.domHandler.hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }
    findNextEditableColumn(cell) {
        let nextCell = cell.nextElementSibling;
        if (!nextCell) {
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (this.domHandler.hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    onCustomEditorFocusPrev(event) {
        this.moveToPreviousCell(event);
    }
    onCustomEditorFocusNext(event) {
        this.moveToNextCell(event);
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && cell.tagName != 'TD') {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    }
    initResizableColumns() {
        this.tbody = this.domHandler.findSingle(this.el.nativeElement, 'tbody.ui-datatable-data');
        this.resizerHelper = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-column-resizer-helper');
        this.fixColumnWidths();
    }
    onDocumentMouseMove(event) {
        if (this.columnResizing) {
            this.onColumnResize(event);
        }
    }
    onDocumentMouseUp(event) {
        if (this.columnResizing) {
            this.columnResizing = false;
            this.onColumnResizeEnd(event);
        }
    }
    bindColumnResizeEvents() {
        this.zone.runOutsideAngular(() => {
            window.document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this));
        });
        this.documentColumnResizeEndListener = this.renderer.listen('document', 'mouseup', (event) => {
            if (this.columnResizing) {
                this.columnResizing = false;
                this.onColumnResizeEnd(event);
            }
        });
    }
    unbindColumnResizeEvents() {
        window.document.removeEventListener('mousemove', this.onDocumentMouseMove);
        if (this.documentColumnResizeEndListener) {
            this.documentColumnResizeEndListener();
            this.documentColumnResizeEndListener = null;
        }
    }
    initColumnResize(event) {
        this.bindColumnResizeEvents();
        let container = this.el.nativeElement.children[0];
        let containerLeft = this.domHandler.getOffset(container).left;
        this.resizeColumn = event.target.parentElement;
        this.columnResizing = true;
        this.lastResizerHelperX = (event.pageX - containerLeft + container.scrollLeft);
    }
    onColumnResize(event) {
        let container = this.el.nativeElement.children[0];
        let containerLeft = this.domHandler.getOffset(container).left;
        this.domHandler.addClass(container, 'ui-unselectable-text');
        this.resizerHelper.style.height = container.offsetHeight + 'px';
        this.resizerHelper.style.top = 0 + 'px';
        this.resizerHelper.style.left = (event.pageX - containerLeft + container.scrollLeft) + 'px';
        this.resizerHelper.style.display = 'block';
    }
    onColumnResizeEnd(event) {
        let delta = this.resizerHelper.offsetLeft - this.lastResizerHelperX;
        let columnWidth = this.resizeColumn.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = this.resizeColumn.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                let nextColumn = this.resizeColumn.nextElementSibling;
                let nextColumnWidth = nextColumn.offsetWidth - delta;
                if (newColumnWidth > 15 && nextColumnWidth > 15) {
                    this.resizeColumn.style.width = newColumnWidth + 'px';
                    if (nextColumn) {
                        nextColumn.style.width = nextColumnWidth + 'px';
                    }
                    if (this.scrollable) {
                        let colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                        let resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                        colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                        if (nextColumn) {
                            colGroup.children[resizeColumnIndex + 1].style.width = nextColumnWidth + 'px';
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                this.tbody.parentElement.style.width = this.tbody.parentElement.offsetWidth + delta + 'px';
                this.resizeColumn.style.width = newColumnWidth + 'px';
                let containerWidth = this.tbody.parentElement.style.width;
                if (this.scrollable) {
                    this.domHandler.findSingle(this.el.nativeElement, '.ui-datatable-scrollable-header-box').children[0].style.width = containerWidth;
                    let colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                    let resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                    colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                }
                else {
                    this.el.nativeElement.children[0].style.width = containerWidth;
                }
            }
            this.onColResize.emit({
                element: this.resizeColumn,
                delta: delta
            });
        }
        this.resizerHelper.style.display = 'none';
        this.resizeColumn = null;
        this.domHandler.removeClass(this.el.nativeElement.children[0], 'ui-unselectable-text');
        this.unbindColumnResizeEvents();
    }
    fixColumnWidths() {
        let columns = this.domHandler.find(this.el.nativeElement, 'th.ui-resizable-column');
        let bodyCols;
        for (let i = 0; i < columns.length; i++) {
            columns[i].style.width = columns[i].offsetWidth + 'px';
        }
        if (this.scrollable) {
            let colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
            bodyCols = colGroup.children;
            if (bodyCols) {
                for (let i = 0; i < columns.length; i++) {
                    bodyCols[i].style.width = columns[i].offsetWidth + 'px';
                }
            }
        }
    }
    onColumnDragStart(event) {
        if (this.columnResizing) {
            event.preventDefault();
            return;
        }
        this.draggedColumn = this.findParentHeader(event.target);
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
        this.zone.runOutsideAngular(() => {
            window.document.addEventListener('dragover', this.onColumnDragover.bind(this));
        });
    }
    onColumnDragover(event) {
        let dropHeader = this.findParentHeader(event.target);
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let container = this.el.nativeElement.children[0];
            let containerOffset = this.domHandler.getOffset(container);
            let dropHeaderOffset = this.domHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                let targetTop = containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.iconHeight - 1) + 'px';
                this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUp.style.display = 'block';
                this.reorderIndicatorDown.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    onColumnDragleave(event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
            window.document.removeEventListener('dragover', this.onColumnDragover);
        }
    }
    onColumnDrop(event) {
        event.preventDefault();
        if (this.draggedColumn) {
            let dragIndex = this.domHandler.index(this.draggedColumn);
            let dropIndex = this.domHandler.index(this.findParentHeader(event.target));
            let allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop) {
                this.objectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    initColumnReordering() {
        this.reorderIndicatorUp = this.domHandler.findSingle(this.el.nativeElement.children[0], 'span.ui-datatable-reorder-indicator-up');
        this.reorderIndicatorDown = this.domHandler.findSingle(this.el.nativeElement.children[0], 'span.ui-datatable-reorder-indicator-down');
        this.iconWidth = this.domHandler.getHiddenElementOuterWidth(this.reorderIndicatorUp);
        this.iconHeight = this.domHandler.getHiddenElementOuterHeight(this.reorderIndicatorUp);
    }
    findParentHeader(element) {
        if (element.nodeName == 'TH') {
            return element;
        }
        else {
            let parent = element.parentElement;
            while (parent.nodeName != 'TH') {
                parent = parent.parentElement;
                if (!parent)
                    break;
            }
            return parent;
        }
    }
    hasFooter() {
        if (this.footerColumnGroup) {
            return true;
        }
        else {
            if (this.columns) {
                for (let i = 0; i < this.columns.length; i++) {
                    if (this.columns[i].footer || this.columns[i].footerTemplate) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    isEmpty() {
        return !this.dataToRender || (this.dataToRender.length == 0);
    }
    createLazyLoadMetadata() {
        this.loading = true;
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.globalFilter ? this.globalFilter.value : null,
            multiSortMeta: this.multiSortMeta
        };
    }
    toggleRow(row, event) {
        if (!this.expandedRows) {
            this.expandedRows = [];
        }
        let expandedRowIndex = this.findExpandedRowIndex(row);
        if (expandedRowIndex != -1) {
            this.expandedRows.splice(expandedRowIndex, 1);
            this.onRowCollapse.emit({
                originalEvent: event,
                data: row
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRows = [];
            }
            this.expandedRows.push(row);
            this.onRowExpand.emit({
                originalEvent: event,
                data: row
            });
        }
        if (event) {
            event.preventDefault();
        }
    }
    findExpandedRowIndex(row) {
        let index = -1;
        if (this.expandedRows) {
            for (let i = 0; i < this.expandedRows.length; i++) {
                if (this.expandedRows[i] == row) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isRowExpanded(row) {
        return this.findExpandedRowIndex(row) != -1;
    }
    findExpandedRowGroupIndex(row) {
        let index = -1;
        if (this.expandedRowsGroups && this.expandedRowsGroups.length) {
            for (let i = 0; i < this.expandedRowsGroups.length; i++) {
                let group = this.expandedRowsGroups[i];
                let rowGroupField = this.resolveFieldData(row, this.groupField);
                if (rowGroupField === group) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isRowGroupExpanded(row) {
        return this.findExpandedRowGroupIndex(row) != -1;
    }
    toggleRowGroup(event, row) {
        this.rowGroupToggleClick = true;
        let index = this.findExpandedRowGroupIndex(row);
        let rowGroupField = this.resolveFieldData(row, this.groupField);
        if (index >= 0) {
            this.expandedRowsGroups.splice(index, 1);
            this.onRowGroupCollapse.emit({
                originalEvent: event,
                group: rowGroupField
            });
        }
        else {
            this.expandedRowsGroups = this.expandedRowsGroups || [];
            this.expandedRowsGroups.push(rowGroupField);
            this.onRowGroupExpand.emit({
                originalEvent: event,
                group: rowGroupField
            });
        }
        event.preventDefault();
    }
    reset() {
        this.sortField = null;
        this.sortOrder = 1;
        this.filteredValue = null;
        this.filters = {};
        this._first = 0;
        this.firstChange.emit(this._first);
        this.updateTotalRecords();
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.updateDataToRender(this.value);
    }
    exportCSV() {
        let data = this.filteredValue || this.value;
        let csv = '\ufeff';
        //headers
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].field) {
                csv += '"' + (this.columns[i].header || this.columns[i].field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body        
        data.forEach((record, i) => {
            csv += '\n';
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field) {
                    csv += '"' + this.resolveFieldData(record, this.columns[i].field) + '"';
                    if (i < (this.columns.length - 1)) {
                        csv += this.csvSeparator;
                    }
                }
            }
        });
        let blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            let link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    getRowStyleClass(rowData, rowIndex) {
        let styleClass = 'ui-widget-content';
        if (this.rowStyleClass) {
            let rowClass = this.rowStyleClass.call(this, rowData, rowIndex);
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        else if (this.rowStyleMap && this.dataKey) {
            let rowClass = this.rowStyleMap[rowData[this.dataKey]];
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        return styleClass;
    }
    visibleColumns() {
        return this.columns ? this.columns.filter(c => !c.hidden) : [];
    }
    get containerWidth() {
        if (this.scrollable) {
            if (this.scrollWidth) {
                return this.scrollWidth;
            }
            else if (this.frozenWidth && this.unfrozenWidth) {
                return parseFloat(this.frozenWidth) + parseFloat(this.unfrozenWidth) + 'px';
            }
        }
        else {
            return this.style ? this.style.width : null;
        }
    }
    hasFrozenColumns() {
        return this.frozenColumns && this.frozenColumns.length > 0;
    }
    ngOnDestroy() {
        //remove event listener
        if (this.globalFilterFunction) {
            this.globalFilterFunction();
        }
        if (this.resizableColumns) {
            this.unbindColumnResizeEvents();
        }
        this.unbindDocumentEditListener();
        if (this.columnsSubscription) {
            this.columnsSubscription.unsubscribe();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "paginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "pageLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "rowsPerPageOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "stacked", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "selectionMode", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "selectionChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "editable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowUnselect", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowDblclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onHeaderCheckboxToggle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "headerCheckboxToggleAllPages", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onContextMenuSelect", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "filterDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "lazy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onLazyLoad", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "resizableColumns", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "columnResizeMode", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onColResize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "reorderableColumns", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onColReorder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "scrollable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "virtualScroll", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "scrollWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "frozenWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "unfrozenWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "styleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "tableStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "tableStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "globalFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "sortOrder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "defaultSortOrder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "groupField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "multiSortMeta", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "contextMenu", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "csvSeparator", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "exportFilename", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "emptyMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "paginatorPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "alwaysShowPaginator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "metaKeySelection", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], DataTable.prototype, "rowTrackBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "immutable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "frozenValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "compareSelectionBy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onEditInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onEditComplete", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onEdit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onEditCancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onPage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onSort", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onFilter", void 0);
__decorate([
    ContentChild(Header),
    __metadata("design:type", Object)
], DataTable.prototype, "header", void 0);
__decorate([
    ContentChild(Footer),
    __metadata("design:type", Object)
], DataTable.prototype, "footer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "expandableRows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "expandedRows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "expandableRowGroups", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "rowExpandMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "expandedRowsGroups", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "expandedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "collapsedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], DataTable.prototype, "rowStyleClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "rowStyleMap", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "rowGroupMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "sortableRowGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortFile", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "rowHover", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "filters", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "dataKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "loading", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DataTable.prototype, "loadingIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "virtualScrollDelay", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "valueChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "firstChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowGroupExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DataTable.prototype, "onRowGroupCollapse", void 0);
__decorate([
    ContentChildren(PrimeTemplate),
    __metadata("design:type", QueryList)
], DataTable.prototype, "templates", void 0);
__decorate([
    ContentChildren(Column),
    __metadata("design:type", QueryList)
], DataTable.prototype, "cols", void 0);
__decorate([
    ContentChild(HeaderColumnGroup),
    __metadata("design:type", HeaderColumnGroup)
], DataTable.prototype, "headerColumnGroup", void 0);
__decorate([
    ContentChild(FooterColumnGroup),
    __metadata("design:type", FooterColumnGroup)
], DataTable.prototype, "footerColumnGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataTable.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DataTable.prototype, "first", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DataTable.prototype, "totalRecords", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DataTable.prototype, "selection", null);
DataTable = __decorate([
    Component({
        selector: 'p-dataTable',
        template: `
        <div [ngStyle]="style" [class]="styleClass" [style.width]="containerWidth"
            [ngClass]="{'ui-datatable ui-widget':true,'ui-datatable-reflow':responsive,'ui-datatable-stacked':stacked,'ui-datatable-resizable':resizableColumns,'ui-datatable-scrollable':scrollable}">
            <div class="ui-datatable-loading ui-widget-overlay" *ngIf="loading"></div>
            <div class="ui-datatable-loading-content" *ngIf="loading">
                <i [class]="'fa fa-spin fa-2x ' + loadingIcon"></i>
            </div>
            <div class="ui-datatable-header ui-widget-header" *ngIf="header">
                <ng-content select="p-header"></ng-content>
            </div>
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-top" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && paginatorPosition =='top' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datatable-tablewrapper" *ngIf="!scrollable">
                <table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <thead class="ui-datatable-thead">
                        <tr *ngIf="!headerColumnGroup" class="ui-state-default" [pColumnHeaders]="columns"></tr>
                        <ng-template [ngIf]="headerColumnGroup">
                            <tr *ngFor="let headerRow of headerColumnGroup.rows" class="ui-state-default" [pColumnHeaders]="headerRow.columns"></tr>
                        </ng-template>
                    </thead>
                    <tfoot *ngIf="hasFooter()" class="ui-datatable-tfoot">
                        <tr *ngIf="!footerColumnGroup" class="ui-state-default" [pColumnFooters]="columns"></tr>
                        <ng-template [ngIf]="footerColumnGroup">
                            <tr *ngFor="let footerRow of footerColumnGroup.rows" class="ui-state-default" [pColumnFooters]="footerRow.columns"></tr>
                        </ng-template>
                    </tfoot>
                    <tbody [ngClass]="{'ui-datatable-data ui-widget-content': true, 'ui-datatable-hoverable-rows': (rowHover||selectionMode)}" [pTableBody]="columns" [data]="dataToRender"></tbody>
                </table>
            </div>
            
            <ng-template [ngIf]="scrollable">
                <div class="ui-datatable-scrollable-wrapper ui-helper-clearfix" [ngClass]="{'max-height':scrollHeight}">
                    <div *ngIf="hasFrozenColumns()" [pScrollableView]="frozenColumns" frozen="true" 
                        [ngStyle]="{'width':this.frozenWidth}" class="ui-datatable-scrollable-view ui-datatable-frozen-view"></div>
                    <div [pScrollableView]="scrollableColumns" [ngStyle]="{'width':this.unfrozenWidth, 'left': this.frozenWidth}"
                        class="ui-datatable-scrollable-view" [virtualScroll]="virtualScroll" (onVirtualScroll)="onVirtualScroll($event)"
                        [ngClass]="{'ui-datatable-unfrozen-view': hasFrozenColumns()}"></div>
                </div>
            </ng-template>
            
            <p-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-bottom" [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator && paginatorPosition =='bottom' || paginatorPosition =='both'"></p-paginator>
            <div class="ui-datatable-footer ui-widget-header" *ngIf="footer">
                <ng-content select="p-footer"></ng-content>
            </div>
            
            <div class="ui-column-resizer-helper ui-state-highlight" style="display:none"></div>
            <span class="fa fa-arrow-down ui-datatable-reorder-indicator-up" style="position: absolute; display: none;"></span>
            <span class="fa fa-arrow-up ui-datatable-reorder-indicator-down" style="position: absolute; display: none;"></span>
        </div>
    `,
        providers: [DomHandler, ObjectUtils]
    }),
    __metadata("design:paramtypes", [ElementRef, DomHandler, IterableDiffers,
        Renderer2, ChangeDetectorRef, ObjectUtils,
        NgZone])
], DataTable);
export { DataTable };
let DataTableModule = class DataTableModule {
};
DataTableModule = __decorate([
    NgModule({
        imports: [CommonModule, SharedModule, PaginatorModule, FormsModule],
        exports: [DataTable, SharedModule],
        declarations: [DataTable, DTRadioButton, DTCheckbox, ColumnHeaders, ColumnFooters, TableBody, ScrollableView, RowExpansionLoader]
    })
], DataTableModule);
export { DataTableModule };
//# sourceMappingURL=datatable.js.map