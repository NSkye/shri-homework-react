declare interface SmartHouseEvent {
  type: 'info' | 'critical',
  title: string,
  source: string,
  time: string,
  description: string | null,
  icon: string,
  data?: {
    type?: string,
    values?: {
      [name: string]: [string, number][]
    }[],
    temperature?: number,
    humidity?: number,
    albumcover?: string,
    artist?: string,
    track?: {
      name: string,
      length: string
    },
    volume?: number,
    buttons?: string[],
    image?: string[]
  },
  size: 'l' | 's' | 'm'
}

declare interface SmartHouseEventsWrapped {
  events: SmartHouseEvent[]
}

declare module '@/events.json' {
  const events: SmartHouseEventsWrapped;
  export default events
}