import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {RTLDemo} from './rtldemo';
import {RTLDemoRoutingModule} from './rtldemo-routing.module';
import {DialogModule} from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		RTLDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RTLDemo
	]
})
export class RTLDemoModule {}
