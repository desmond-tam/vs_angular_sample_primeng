import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {DropdownDemo} from './dropdowndemo';
import {DropdownDemoRoutingModule} from './dropdowndemo-routing.module';
import {DropdownModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		DropdownDemoRoutingModule,
        DropdownModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DropdownDemo
	]
})
export class DropdownDemoModule {}
