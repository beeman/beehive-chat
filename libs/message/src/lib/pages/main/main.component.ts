import { Component, OnInit } from '@angular/core'
import { TreeNode } from 'primeng/api'

@Component({
  selector: 'message-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  channels: TreeNode[] = [
    {
      label: 'General',
      data: 'General Chat',
      expanded: true,
      children: [
        {
          label: '# rules',
          icon: 'pi pi-file',
          data: 'Rules Channel',
        },
        {
          label: '# suggestions',
          icon: 'pi pi-file',
          data: 'Rules Channel',
        },
        {
          label: '# watercooler',
          icon: 'pi pi-file',
          data: 'Rules Channel',
        },
      ],
    },
  ]
  selectedChannel: TreeNode
  constructor() {}

  ngOnInit(): void {}

  selectChannel(channel: TreeNode) {
    this.selectedChannel = channel
  }
}
