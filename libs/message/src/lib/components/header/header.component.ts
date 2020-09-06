import { Component, Input } from '@angular/core'
import { Channel } from '../../models/channel'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'message-header',
  template: ` <p-breadcrumb [model]="items" [home]="home"></p-breadcrumb> `,
})
export class HeaderComponent {
  @Input() channel: Channel
  home = { icon: 'pi pi-home', routerLink: '/' }

  get items(): MenuItem[] {
    return [{ label: this.channel?.label }]
  }
}
