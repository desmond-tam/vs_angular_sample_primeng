import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldsetDemo} from './fieldsetdemo';
import {FieldsetDemoRoutingModule} from './fieldsetdemo-routing.module';
import {FieldsetModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		FieldsetDemoRoutingModule,
        FieldsetModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		FieldsetDemo
	]
})
export class FieldsetDemoModule {}
