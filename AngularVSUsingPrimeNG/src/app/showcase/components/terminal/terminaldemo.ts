import {Component,OnDestroy} from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import {Subscription}   from 'rxjs/Subscription';

@Component({
    templateUrl: './terminaldemo.html',
    providers: [TerminalService]
})
export class TerminalDemo implements OnDestroy {
    
    subscription: Subscription;
    
    constructor(private terminalService: TerminalService) {
        this.subscription = this.terminalService.commandHandler.subscribe(command => {
            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
    }
    
    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}