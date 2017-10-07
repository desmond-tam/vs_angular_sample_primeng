import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {TreeTableDemo} from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableModule, GrowlModule, TabViewModule, ContextMenuModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeTableDemoRoutingModule,
        TreeTableModule,
        GrowlModule,
        TabViewModule,
        ContextMenuModule,
        CodeHighlighterModule
	],
	declarations: [
		TreeTableDemo
	]
})
export class TreeTableDemoModule {}
