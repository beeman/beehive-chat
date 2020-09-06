import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TreeNode } from 'primeng/api'

@Component({
  selector: 'message-sidebar',
  template: `
    <p-tree
      [value]="channels"
      selectionMode="single"
      (selectionChange)="selectItem($event)"
    ></p-tree>
  `,
  styles: [],
})
export class SidebarComponent {
  @Output() selectChannel = new EventEmitter<TreeNode>()
  @Input() channels: TreeNode[] = []

  selectItem(item: any) {
    this.selectChannel.emit(item)
  }
}
