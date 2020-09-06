import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { UiModule, LayoutComponent } from '@beehive-chat/ui'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@beehive-chat/pages').then((m) => m.PagesModule),
      },
    ],
  },
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
