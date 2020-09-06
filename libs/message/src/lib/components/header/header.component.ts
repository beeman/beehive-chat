import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'message-header',
  template: ` Channel: {{ title }} `,
})
export class HeaderComponent implements OnInit {
  @Input() title: string
  constructor() {}

  ngOnInit(): void {}
}
