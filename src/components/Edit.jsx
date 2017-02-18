import React from 'react';

export default class Edit extends React.Component {
    render() {
        return (
            <div id="edit">
                <div className="formgroup">
                    <input type="text" placeholder="Name" value={this.props.slideName} onChange={(e) => this.props.onUpdateName(e.target.value)} />
                </div>
                <div className="formgroup">
                    <textarea placeholder="Content" value={this.props.slideContent} onChange={(e) => this.props.onUpdateContent(e.target.value)} />
                </div>
                <div className="formgroup">
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onMoveUp();
                    }}>Move up</button>
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onMoveDown();
                    }}>Move down</button>
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onRemove();
                    }}>Remove</button>
                </div>
            </div>
        );
    }
}

Edit.propTypes = {
    slideName: React.PropTypes.string,
    slideContent: React.PropTypes.string,
    onRemove: React.PropTypes.func.isRequired,
    onMoveUp: React.PropTypes.func.isRequired,
    onMoveDown: React.PropTypes.func.isRequired,
    onUpdateName: React.PropTypes.func.isRequired,
    onUpdateContent: React.PropTypes.func.isRequired
};