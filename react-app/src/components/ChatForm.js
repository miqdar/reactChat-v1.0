import React from 'react'

export default class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            author: '',
            message: ''
            };

        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAuthor = (event) => {
        this.setState({ author: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        this.props.addChat(this.state.author, this.state.message);
        this.setState({ author: '', message: '' })
        event.preventDefault();
    }


    render() {
        return (
            <div className="panel-footer">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">  
                        <input className="form-control input-sm" name="author" type="text" value={this.state.author} onChange={this.handleChangeAuthor} placeholder="masukkan penulis" />
                        <textarea id="btn-input" cols="2" name="message" value={this.state.message} className="form-control input-sm" onChange={this.handleChangeMessage} placeholder="masukkan pesan" />
                        <span className="input-group-btn">
                            <input id="btn-chat" className="btn btn-warning btn-sm" type="submit" value="Submitt" />
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}