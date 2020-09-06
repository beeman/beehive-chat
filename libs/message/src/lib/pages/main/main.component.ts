import { Component, OnInit } from '@angular/core'
import { Category } from '../../models/category'
import { Channel } from '../../models/channel'
import { MessageService } from '../../message.service'
import { Observable } from 'rxjs'
import { Message } from '../../models/message'

@Component({
  selector: 'message-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  categories$: Observable<Category[]>
  message$: Observable<Message[]>
  selectedChannel$: Observable<Channel>

  constructor(private readonly service: MessageService) {
    this.categories$ = this.service.categories$
    this.message$ = this.service.message$
    this.selectedChannel$ = this.service.selectedChannel$
  }

  ngOnInit(): void {}

  selectChannel(channel: Channel) {
    this.service.selectChannel(channel)
  }
}
