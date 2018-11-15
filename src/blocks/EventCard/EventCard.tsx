import graph from '@/assets/graph.svg';
import icons from '@/assets/icons';
import robotCleaner from '@/assets/robot-cleaner.jpg';
import { cn } from '@bem-react/classname';
import * as React from 'react';

const EventCardCn = cn('EventCard');

export interface EventCardProps {
  payload: SmartHouseEvent;
  className?: string;
}

const EventCard: React.SFC<EventCardProps> = (props) => {
  const { payload } = props;
  return (
    <div className={EventCardCn({ type: payload.type, size: payload.size }) + ' ' + (props.className || '')}>
      <div role = 'button' aria-label='close' className={EventCardCn('close')} />
      <div role = 'button' aria-label='next' className={EventCardCn('next')} />
      <div className={EventCardCn('heading')}>
        <i className={EventCardCn('icon')}>
          <img src={icons[payload.icon]} alt={payload.icon}/>
        </i>
        <h2 className={EventCardCn('title')}>{ payload.title }</h2>
        <span className={EventCardCn('source')}>{ payload.source }</span>
        <span className={EventCardCn('time')}>{ payload.time }</span>
      </div>
      <div className={EventCardCn('data')}>
        { payload.description && <span className={EventCardCn('description')}>
          { payload.description }
        </span> }
        { payload.data && payload.data.volume && <span>Player</span> }
        { payload.data && payload.data.temperature && <div className={EventCardCn('climate')}>
          <span className={EventCardCn('climateItem')}>
            Темература: <strong>{ `${payload.data.temperature} C` }</strong>
          </span>
          <span className={EventCardCn('climateItem')}>
            Влажность: <strong>{ `${payload.data.humidity}%` }</strong>
          </span>
        </div> }
        { payload.data && payload.data.type === 'graph' && <div className={EventCardCn('imgContainer')}>
          <img className={EventCardCn('img')} src={graph} alt='graph'/>
        </div> }
        { payload.data && payload.data.image && <div className={EventCardCn('imgContainer')}>
          <img className={EventCardCn('img')} src={robotCleaner} alt='graph'/>
        </div> }
        { payload.data && payload.data.buttons && <div className={EventCardCn('buttons')}>
          { payload.data.buttons.map((caption: string, index: number) => {
            return <button key={index} className={EventCardCn('button')} ><strong>{ caption }</strong></button>;
          }) }
        </div> }
      </div>
    </div>
  );
};

export default EventCard;
