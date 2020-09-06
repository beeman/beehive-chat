import { Component, Input } from '@angular/core'
import { Message } from '../../models/message'

@Component({
  selector: 'message-messages',
  template: `
    <p-virtualScroller
      [value]="messages"
      [itemSize]="60"
      [lazy]="true"
      scrollHeight="500px"
    >
      <ng-template let-message pTemplate="item" let-i="index">
        {{ message.text }}
      </ng-template>

      <ng-template let-car pTemplate="loadingItem">
        LOADING....
      </ng-template>
    </p-virtualScroller>
  `,
})
export class MessagesComponent {
  @Input() messages: Message[] = []
}
