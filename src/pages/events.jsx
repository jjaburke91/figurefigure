/* global graphql */

import React from 'react';
import { withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';
import { showMonthDate, showDayDate } from '../components/utils';
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
      <main className="row no-gutters">
        <Helmet title={PAGE_TITLE} />
        <div ref={this.imgList} className="col-6 vh-site event-img-grid">
          {this.events.map((event, i) => (
            <div ref={event.ref} key={`event img ${i}`}>
              {event.pdf
                ? (
                  <object width="100%" height="500" type="application/pdf" data={`${withPrefix(event.pdf)}?#zoom=98&scrollbar=0&toolbar=0&navpanes=0`}>
                    <p>Insert your error message here, if the PDF cannot be displayed.</p>
                  </object>
                )
                : <img className="event-img" src={withPrefix(event.img)} alt={event.title} />
              }
              <div className="event-descr row">
                <span className="event-date col">{showMonthDate(event.date)}</span>
                <span className="event-title col">
                  {event.title}
                  <br />
                  {event.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-6 vh-site event-grid">
          <ul>
            {this.events.map((event, i) => (
              <li key={`event item ${i}`} onMouseEnter={this.showEvent.bind(this, event)}>
                <span className="event-descr">
                  <span className="event-date">{showDayDate(event.date)}</span>
                  <span className="event-title">
                    {event.title}
                    <br />
                    {event.subtitle}
                  </span>
                </span>
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
            subtitle
            date
            pdf
          }
        }
      }
    }
  }
`;
