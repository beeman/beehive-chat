import { Component } from '@angular/core'

@Component({
  selector: 'ui-layout',
  template: `
    <ui-header></ui-header>
    <router-outlet></router-outlet>
    <ui-footer></ui-footer>
  `,
})
export class LayoutComponent {}
