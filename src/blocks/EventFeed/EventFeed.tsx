import EventCard from '@/blocks/EventCard';
import events from '@/events.json';
import { cn } from '@bem-react/classname';
import * as React from 'react';

const EventFeedCn = cn('EventFeed');

const EventFeed: React.SFC = () => {
  return (
    <div className={EventFeedCn()}>
      <h1 className={EventFeedCn('heading')}>Лента событий</h1>
      <ul className={EventFeedCn('list')}> {
        events.events.map((event, key) =>
          <EventCard
            className={EventFeedCn('item', { size: event.size })}
            payload={event}
            key={key}
          />,
        )
      } </ul>
    </div>
  );
};

export default EventFeed;
