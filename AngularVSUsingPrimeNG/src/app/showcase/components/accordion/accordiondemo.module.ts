import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionDemo} from './accordiondemo';
import { AccordionDemoRoutingModule } from './accordiondemo-routing.module';
import { AccordionModule, 
    ButtonModule,
    TabViewModule,
    GrowlModule,
    CodeHighlighterModule
} from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		AccordionDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
        GrowlModule,
        CodeHighlighterModule
	],
	declarations: [
		AccordionDemo
	]
})
export class AccordionDemoModule {}
