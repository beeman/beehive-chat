import { NgModule } from '@angular/core'

import { BreadcrumbModule } from 'primeng/breadcrumb'
import { MenubarModule } from 'primeng/menubar'
import { MessagesModule } from 'primeng/messages'
import { TreeModule } from 'primeng/tree'
import { VirtualScrollerModule } from 'primeng/virtualscroller'

const MODULES = [
  BreadcrumbModule,
  MenubarModule,
  MessagesModule,
  TreeModule,
  VirtualScrollerModule,
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PrimeNgModule {}
