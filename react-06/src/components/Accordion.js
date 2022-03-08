
import React, { useState } from 'react';

const Accordion = (props) => {

    // init
    const [index, setIndex] = useState(null);

    const onActive = (i) => {
        if (i == index) {
            // close 
            setIndex(null)
        }
        else {
            // open
            setIndex(i)
        }
    }

    const accordions = props.items.map((e, i) => {
        const active = i == index ? ' active' : ''
        return <React.Fragment key={`${e.title}-${i}`}>
            <div className={"title" + active} onClick={() => onActive(i)}>
                <i className="dropdown icon"></i>{e.title}
            </div>
            <div className={"content" + active}>
                {e.content}
            </div>
        </React.Fragment>

    });

    return <div className="ui styled accordion">{accordions}</div>
}

export default Accordion;