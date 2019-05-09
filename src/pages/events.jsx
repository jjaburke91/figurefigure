/* global graphql */

import React from 'react';
import { withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';
import { showMonthDate } from '../components/utils';
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
    //this.imgList = React.createRef();
  }

  showEvent(event) {
    //this.bg.current.src = withPrefix(issue.archive_img);
    //this.bg.current.alt = issue.title;
    //ref.current.scrollIntoView({behavior: 'smooth'});
    this.scroll(event.ref);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <main className="row">
        <Helmet title={PAGE_TITLE} />
        <div ref={this.imgList} className="col-6 vh-site event-img-grid">
          {this.events.map((event, i) => (
            <div ref={event.ref} key={`event img ${i}`}>
              <img className="event-img" src={withPrefix(event.img)} alt={event.title} />
              <div className="event-descr">
                <span className="event-date">{showMonthDate(event.date)}</span>
                <span className="event-title">{event.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-6 vh-site event-grid">
          <ul>
            {this.events.map((event, i) => (
              <li key={`event item ${i}`} onMouseEnter={this.showEvent.bind(this, event)}>
              <div className="event-descr">
                <span className="event-date">{showMonthDate(event.date)}</span>
                <span className="event-title">{event.title}</span>
              </div>
              </li>
            ))}
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
            date
            img
          }
        }
      }
    }
  }
`;
