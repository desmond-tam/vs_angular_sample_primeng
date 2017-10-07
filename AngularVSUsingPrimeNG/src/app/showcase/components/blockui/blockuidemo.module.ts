import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockUIDemo} from './blockuidemo';
import {BlockUIDemoRoutingModule} from './blockuidemo-routing.module';
import {BlockUIModule} from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		BlockUIDemoRoutingModule,
        BlockUIModule,
        ButtonModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		BlockUIDemo
	]
})
export class BlockUIDemoModule {}
