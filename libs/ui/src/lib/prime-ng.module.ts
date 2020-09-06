import { NgModule } from '@angular/core'

import { MenubarModule } from 'primeng/menubar'
import { TreeModule } from 'primeng/tree'

const MODULES = [MenubarModule, TreeModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PrimeNgModule {}
