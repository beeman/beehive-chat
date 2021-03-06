import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'ui-header',
  template: ` <p-menubar [model]="items"></p-menubar> `,
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/home',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Chat',
      routerLink: '/chat',
      icon: 'pi pi-fw pi-inbox',
    },
    {
      label: 'About',
      routerLink: '/about',
      icon: 'pi pi-fw pi-info',
    },
  ]
}
