import { Channel } from './channel'

export class Category {
  label: string
  key: string
  expanded: boolean
  children: Channel[];
  [key: string]: unknown
}
