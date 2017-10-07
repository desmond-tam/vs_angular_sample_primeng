import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayPanelDemo} from './overlaypaneldemo';
import {OverlayPanelDemoRoutingModule} from './overlaypaneldemo-routing.module';
import { OverlayPanelModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		OverlayPanelDemoRoutingModule,
        OverlayPanelModule,
        ButtonModule,
        DataTableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OverlayPanelDemo
	]
})
export class OverlayPanelDemoModule {}
