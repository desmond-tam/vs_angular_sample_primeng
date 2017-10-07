import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {TriStateCheckboxDemo} from './tristatecheckboxdemo';
import { TriStateCheckboxDemoRoutingModule } from './tristatecheckboxdemo-routing.module';
import { TriStateCheckboxModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TriStateCheckboxDemoRoutingModule,
        TriStateCheckboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TriStateCheckboxDemo
	]
})
export class TriStateCheckboxDemoModule {}
