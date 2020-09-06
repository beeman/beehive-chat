import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimeNgModule } from './prime-ng.module'

@NgModule({
  imports: [PrimeNgModule],
  exports: [PrimeNgModule],
})
export class UiModule {}
