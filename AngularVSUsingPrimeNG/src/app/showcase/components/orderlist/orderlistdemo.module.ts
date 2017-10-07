import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListDemo} from './orderlistdemo';
import {OrderListDemoRoutingModule} from './orderlistdemo-routing.module';
import { OrderListModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		OrderListDemoRoutingModule,
        OrderListModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OrderListDemo
	]
})
export class OrderListDemoModule {}
