/* global graphql */

import React from 'react';
import { withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';
import { showDayDate } from '../components/utils';
import './event.scss';

const PAGE_TITLE = 'Archives | Figure Figure';

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data.allDataJson.edges[0].node;
    data.events.forEach((event) => {
      event.date = new Date(event.date);
      event.ref = React.createRef();
    });
    this.events = data.events.sort((a, b) => b.date - a.date);
    this.currentEvent = this.events.length ? this.events[this.events.length - 1] : undefined;
  }

  showEvent(event) {
    this.scroll(event.ref);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  getImage(event) {
    const img = <img className="event-img" src={withPrefix(event.img)} alt={event.title} />;
    return event.pdf ? <a href={withPrefix(event.pdf)}>{img}</a> : img;
  }

  getItem(event, i) {
    const content = (
      <span className="event-descr">
        <span className="event-date">{showDayDate(event.date)}</span>
        <span className="event-title">
          {event.title}
          <br />
          {event.subtitle.toUpperCase()} | Télécharger
        </span>
      </span>
    );

    return (
      <li key={`event item ${i}`} onMouseEnter={this.showEvent.bind(this, event)}>
        {event.pdf ? <a href={withPrefix(event.pdf)}>{content}</a> : content}
      </li>
    );
  }

  render() {
    return (
      <main className="row no-gutters">
        <Helmet title={PAGE_TITLE} />
        <div ref={this.imgList} className="col-md-6 vh-site event-img-grid">
          {this.events.map((event, i) => (
            <div ref={event.ref} key={`event img ${i}`}>
              {this.getImage(event)}
            </div>
          ))}
        </div>
        <div className="col-md-6 vh-site event-grid">
          <ul>
            {this.events.map((event, i) => this.getItem(event, i))}
          </ul>
        </div>
      </main>
    );
  }
}

export default EventsPage;

export const pageQuery = graphql`
  query EventQuery {
    allDataJson {
      edges {
        node {
          events {
            title
            subtitle
            date
            img
            pdf
          }
        }
      }
    }
  }
`;
