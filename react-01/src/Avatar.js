
export default function Avatar(props) {
    return (
        <div className="content">
            <img className="right floated mini ui image" src={props.image} />
            <div className="header">
                {props.author}
            </div>
            <div className="meta">
                {props.meta}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    );
}
