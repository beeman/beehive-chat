import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { MessagesComponent } from './components/messages/messages.component'
import { HeaderComponent } from './components/header/header.component'
import { MessageService } from './message.service'
import { UiModule } from '@beehive-chat/ui'

const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
]
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
  declarations: [SidebarComponent, MessagesComponent, HeaderComponent],
  exports: [SidebarComponent, MessagesComponent, HeaderComponent],
  providers: [MessageService],
})
export class MessageModule {}
