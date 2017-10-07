import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridDemo} from './datagriddemo';
import {DataGridDemoRoutingModule} from './datagriddemo-routing.module';
import {DataGridModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DataGridDemoRoutingModule,
        DataGridModule,
        PanelModule,
        DialogModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataGridDemo
	]
})
export class DataGridDemoModule {}
