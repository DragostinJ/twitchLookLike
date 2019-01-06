import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); //understand this better
  }
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")} //sends only title and description
          //   initialValues={this.props.stream}  send all including ID and user ID
          // initialValues={{title: 'EDIT ME', description: 'CHANGE ME'}}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}; //initial values for the form

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
