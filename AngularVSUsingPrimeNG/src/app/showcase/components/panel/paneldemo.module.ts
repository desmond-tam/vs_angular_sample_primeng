import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelDemo} from './paneldemo';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';
import { PanelModule } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		PanelDemoRoutingModule,
        PanelModule,
        GrowlModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PanelDemo
	]
})
export class PanelDemoModule {}
