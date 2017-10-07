import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataScrollerDemo} from './datascrollerdemo';
import {DataScrollerSubMenu} from './datascrollersubmenu';
import {DataScrollerInfiniteDemo} from './datascrollerinfinitedemo';
import {DataScrollerInlineDemo} from './datascrollerinlinedemo';
import {DataScrollerLoaderDemo} from './datascrollerloaderdemo';
import {DatascrollerDemoRoutingModule} from './datascrollerdemo-routing.module';
import {DataScrollerModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DatascrollerDemoRoutingModule,
        DataScrollerModule,
        DialogModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataScrollerDemo,
        DataScrollerInfiniteDemo,
        DataScrollerInlineDemo,
        DataScrollerLoaderDemo,
        DataScrollerSubMenu
	]
})
export class DataScrollerDemoModule {}
