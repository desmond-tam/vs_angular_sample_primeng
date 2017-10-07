import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDemo} from './carouseldemo';
import {CarouselDemoRoutingModule} from './carouseldemo-routing.module';
import { CarouselModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
        CarouselDemoRoutingModule,
        CarouselModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CarouselDemo
	]
})
export class CarouselDemoModule {}
