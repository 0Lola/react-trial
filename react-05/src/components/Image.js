import React from 'react';

class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = { span: 0 };

        // 建立 Ref
        this.imgRef = React.createRef();
    }

 
    render() {
        const image = this.props.image;
        if (image) {
            return (
                <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                    <img ref={this.imgRef} src={image} />
                </div>
            );
        } else {
            return <div></div>
        }

    }

    componentDidMount() {
        // 當 img 載入後取得圖片高度
        this.imgRef.current.addEventListener('load', this.setSpan);
    }

    // 計算高度
    setSpan = () => {
        const height = this.imgRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({ span });
    };

   
}

export default Image;
