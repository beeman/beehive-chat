import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Channel } from '../../models/channel'
import { Category } from '../../models/category'

@Component({
  selector: 'message-sidebar',
  template: `
    <p-tree
      [value]="categories"
      selectionMode="single"
      (selectionChange)="selectItem($event)"
    ></p-tree>
  `,
  styles: [],
})
export class SidebarComponent {
  @Output() selectChannel = new EventEmitter<Channel>()
  @Input() categories: Category[] = []

  selectItem(item: any) {
    this.selectChannel.emit(item)
  }
}
