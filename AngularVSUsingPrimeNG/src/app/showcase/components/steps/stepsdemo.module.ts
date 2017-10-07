import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule, GrowlModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		StepsDemo
	]
})
export class StepsDemoModule {}
