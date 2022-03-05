
export default function ApprovalCard(props) {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">

                    {/* 這裡就會顯示 Avatar */}
                    {props.children}
                    
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button mini">Approve</div>
                            <div className="ui basic red button mini">Decline</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
