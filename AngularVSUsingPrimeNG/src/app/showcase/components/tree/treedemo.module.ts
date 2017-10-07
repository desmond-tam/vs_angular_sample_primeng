import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {TreeDemo} from './treedemo';
import { TreeDemoRoutingModule } from './treedemo-routing.module';
import { TreeModule, GrowlModule, ButtonModule, ContextMenuModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeDemoRoutingModule,
        TreeModule,
        GrowlModule,
        ButtonModule,
        ContextMenuModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TreeDemo
	]
})
export class TreeDemoModule {}
