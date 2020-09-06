import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main.component'
import { MessageModule } from '@beehive-chat/message'

const routes: Routes = [{ path: '', component: MainComponent }]

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MessageModule],
})
export class MainModule {}
