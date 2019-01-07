import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); //matching ID of the route ID
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const {title, description} = this.props.stream
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}
const mapStateTopProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }; // assign route ID to the db ?
};

export default connect(
  mapStateTopProps,
  { fetchStream }
)(StreamShow);
