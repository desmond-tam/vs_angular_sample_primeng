import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        GrowlModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
