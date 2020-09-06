import { Injectable } from '@angular/core'
import { Category } from './models/category'
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs'
import { Channel } from './models/channel'
import { delay, startWith, switchMap, tap } from 'rxjs/operators'
import { Message } from './models/message'

const defaultCategories: Category[] = [
  {
    label: 'General',
    key: 'general',
    expanded: true,
    children: [
      {
        key: 'rules',
        label: '# rules',
      },
      {
        key: 'suggestions',
        label: '# suggestions',
      },
      {
        key: 'watercooler',
        label: '# watercooler',
      },
    ],
  },
]

@Injectable()
export class MessageService {
  private categoriesSub = new BehaviorSubject<Category[]>(null)
  private selectedChannelSub = new BehaviorSubject<Channel>(null)

  public categories$ = this.categoriesSub.asObservable()
  public selectedChannel$ = this.selectedChannelSub.asObservable()
  public message$ = this.selectedChannel$.pipe(
    delay(300),
    switchMap((channel) => this.getMessages(channel.key)),
  )

  constructor() {
    this.categoriesSub.next(defaultCategories)
  }

  getMessages(channelId: string): Observable<Message[]> {
    function msg(count: number) {
      return {
        id: `message-${count}`,
        text: `Message ${count} for channel ${channelId}`,
        createdAt: new Date(),
      }
    }
    return of([msg(1), msg(2), msg(3), msg(4), msg(5), msg(6)])
  }
  selectChannel(channel: Channel) {
    this.selectedChannelSub.next(channel)
  }
}
