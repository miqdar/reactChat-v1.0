import React from 'react'

export default class ChatItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            author: this.props.author,
            message: this.props.message
        }
    }

    handleChangeAuthor = (event) => {
        this.setState({ author: event.target.value });
    }

    handleChangeMessage = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = (event) => {
        this.props.postUpdate(this.state.id, this.state.author, this.state.message);
        this.setState({ author: '', message: '' })
        event.preventDefault();
    }

    cancelEdit = (id) => {
        this.props.cancelEdit(id)
    }

    formEdit = (props) => {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input className="form-control input-sm" name="author" value={this.state.author} type="text" onChange={this.handleChangeAuthor} placeholder="masukkan penulis" />
                        <textarea id="btn-input" cols="2" name="message" value={this.state.message} className="form-control input-sm" onChange={this.handleChangeMessage} placeholder="masukkan pesan" />
                        <span className="input-group-btn">
                            <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
                            <button type="submit" className="btn btn-secondary btn-sm"
                                onClick={() => this.props.cancelEdit(this.props.id)}>Cancel
                            </button>
                        </span>
                    </div>
                </form>
        );
    }

    listItem = (props) => {
        return (

            <li className="left clearfix">
                <span className="chat-img pull-left"><img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" /></span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">{this.props.author}</strong>
                        <small className="pull-right text-muted"><span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                    </div>
                    <p>{this.props.message}</p>
                </div>
                <button type="submit"
                    className={this.props.sent ? 'badge badge-light' : 'btn btn-success'}
                    onClick={this.props.sent ? () => this.props.remove(this.props.id) : () => this.props.resend(this.props.id, this.props.author, this.props.message)}>
                    {this.props.sent ? 'Hapus' : 'Kirim Ulang'}
                </button>
                <button type="submit"
                    className="badge badge-danger"
                    onClick={this.props.edit ? () => this.props.cancelEdit(this.props.id) : () => this.props.truekanEdit(this.props.id, this.props.author, this.props.message)}>{this.props.edit ? 'Cancel' : 'Edit'}
                </button>
            </li>
        )
    }


    render() {
        if (this.props.edit) {
            return this.formEdit()
        } else {
            return this.listItem()
        }
    }
}