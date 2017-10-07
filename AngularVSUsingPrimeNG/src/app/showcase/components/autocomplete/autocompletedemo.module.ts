import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {AutoCompleteDemo} from './autocompletedemo';
import {AutoCompleteDemoRoutingModule} from './autocompletedemo-routing.module';
import {AutoCompleteModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		AutoCompleteDemoRoutingModule,
        AutoCompleteModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		AutoCompleteDemo
	]
})
export class AutoCompleteDemoModule {}
