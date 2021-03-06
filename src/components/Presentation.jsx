import React from 'react';
import ReactDOM from 'react-dom';
import { HotKeys } from 'react-hotkeys';
import Preview from './Preview';
import './Presentation.scss';

export default class Presentation extends React.Component {
    constructor(props) {
        super(props);

        this.keyMap = {
            'previous': ['left'],
            'next': ['right'],
            'close': ['esc']
        };

        this.handlers = {
            'previous': () => this.props.onPreviousSlide(),
            'next': () => this.props.onNextSlide(),
            'close': () => this.props.onStopPresentation()
        };
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.presentation).focus();
    }

    render() {
        return (
            <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
                <div className="presentation" ref="presentation" tabIndex="0">
                    {this.props.slide && <Preview slide={this.props.slide} />}
                    <div className="presentation-buttons">
                        <button className="btn btn-primary" title="left" onClick={e => {
                            e.preventDefault();
                            this.props.onPreviousSlide();
                        }}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" title="right" onClick={e => {
                            e.preventDefault();
                            this.props.onNextSlide();
                        }}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        <button className="btn btn-primary" title="esc" onClick={e => {
                            e.preventDefault();
                            this.props.onStopPresentation();
                        }}><i className="fa fa-stop" aria-hidden="true"></i></button>
                    </div>
                </div>
            </HotKeys>
        );
    }
}

Presentation.propTypes = {
    slide: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        content: React.PropTypes.string.isOptional,
    }),
    onStopPresentation: React.PropTypes.func.isRequired,
    onPreviousSlide: React.PropTypes.func.isRequired,
    onNextSlide: React.PropTypes.func.isRequired
};