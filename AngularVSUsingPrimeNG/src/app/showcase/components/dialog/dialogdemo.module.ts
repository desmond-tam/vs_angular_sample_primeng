import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogDemo} from './dialogdemo';
import {DialogDemoRoutingModule} from './dialogdemo-routing.module';
import {DialogModule} from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DialogDemoRoutingModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DialogDemo
	]
})
export class DialogDemoModule {}
