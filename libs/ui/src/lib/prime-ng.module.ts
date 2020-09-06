import { NgModule } from '@angular/core'

import { MenubarModule } from 'primeng/menubar'

const MODULES = [MenubarModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PrimeNgModule {}
