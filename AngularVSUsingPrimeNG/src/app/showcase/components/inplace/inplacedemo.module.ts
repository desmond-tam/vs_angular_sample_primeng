import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {InplaceDemo} from './inplacedemo';
import {InplaceDemoRoutingModule} from './inplacedemo-routing.module';
import {InplaceModule} from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		InplaceDemoRoutingModule,
        InplaceModule,
        InputTextModule,
        DataTableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InplaceDemo
	]
})
export class InplaceDemoModule {}
