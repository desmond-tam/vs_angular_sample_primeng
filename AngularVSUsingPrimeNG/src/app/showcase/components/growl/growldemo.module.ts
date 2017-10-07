import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {GrowlDemo} from './growldemo';
import {GrowlDemoRoutingModule} from './growldemo-routing.module';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		GrowlDemoRoutingModule,
        GrowlModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GrowlDemo
	]
})
export class GrowlDemoModule {}
