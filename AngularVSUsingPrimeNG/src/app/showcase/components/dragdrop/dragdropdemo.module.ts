import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        DataTableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
