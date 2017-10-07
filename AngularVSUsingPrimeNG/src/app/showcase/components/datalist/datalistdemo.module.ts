import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataListDemo} from './datalistdemo';
import {DataListDemoRoutingModule} from './datalistdemo-routing.module';
import {DataListModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DataListDemoRoutingModule,
        DataListModule,
        DialogModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataListDemo
	]
})
export class DataListDemoModule {}
