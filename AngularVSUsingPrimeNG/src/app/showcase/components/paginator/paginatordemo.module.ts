import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorDemo} from './paginatordemo';
import {PaginatorDemoRoutingModule} from './paginatordemo-routing.module';
import { PaginatorModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
        PaginatorModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule {}
