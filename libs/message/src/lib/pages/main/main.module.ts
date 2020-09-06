import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main.component'
import { MessageModule } from '@beehive-chat/message'
import { UiModule } from '@beehive-chat/ui'

const routes: Routes = [{ path: '', component: MainComponent }]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    MessageModule,
  ],
})
export class MainModule {}
