import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {MultiSelectDemo} from './multiselectdemo';
import {MultiSelectDemoRoutingModule} from './multiselectdemo-routing.module';
import { MultiSelectModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		MultiSelectDemoRoutingModule,
        MultiSelectModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MultiSelectDemo
	]
})
export class MultiSelectDemoModule {}
