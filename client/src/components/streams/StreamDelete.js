import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class SreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const {id} = this.props.match.params;
    return (
      //= <React.Fragment>
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          DELETE
        </button>
        <Link to="/" className="ui button">
          CANCEL
        </Link>
      </>
      //= </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you wante to delete this stream";
    }
    return `Are you sure you want to delete this stream with title: ${
      this.props.stream.title
    }`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; //understand this better
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(SreamDelete);
