import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaptchaDemo} from './captchademo';
import {CaptchaDemoRoutingModule} from './captchademo-routing.module';
import { CaptchaModule } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		CaptchaDemoRoutingModule,
        CaptchaModule,
        TabViewModule,
        GrowlModule,
        CodeHighlighterModule
	],
	declarations: [
		CaptchaDemo
	]
})
export class CaptchaDemoModule {}
