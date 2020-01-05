import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    collapsed = true; //может и не нужно, надо дальше посмотреть!
}