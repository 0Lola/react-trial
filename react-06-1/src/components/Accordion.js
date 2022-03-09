
import React from 'react';

const Accordion = (props) => {

    const accordions = props.results.map((e, i) => {
        return <React.Fragment key={e.pageid}>
            <div className="title active">
                <i className="dropdown icon"></i>{e.title}
            </div>
            <div className="content active">
                <span dangerouslySetInnerHTML={{ __html: e.snippet }}></span>
                <div style={{ marginTop: '10px' }}>
                    <a className="ui mini button"
                        target="blank"
                        href={`https://en.wikipedia.org?curid=${e.pageid}`}>
                        Go
                        </a>
                </div>
            </div>

        </React.Fragment>

    });

    return <div className="ui styled accordion" style={{ margin: 'auto' }}>{accordions}</div>
}

export default Accordion;