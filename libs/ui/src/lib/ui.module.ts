import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimeNgModule } from './prime-ng.module'
import { LayoutComponent } from './layout/layout.component'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  imports: [PrimeNgModule, RouterModule],
  exports: [PrimeNgModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class UiModule {}
