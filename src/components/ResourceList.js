import React, { Component } from 'react';
import axios from 'axios';

class ResourceList extends Component {
  state = {
    resources: []
  };

  // componentDidMount lifecycle will run only once
  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  }

  // componentDidMount lifecycle will run only once, therefor
  // to run another fetch request, when we click again on a button, we need to use componentDidUpdate
  // But we want that the new fetch happens only if the current props is not the same as the previous props.
  async componentDidUpdate(prevProps) {
    console.log('prevProps is ', prevProps);

    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
    }
  }

  render() {
    return (
      <ul>
        {/* {this.props.resource} */}
        {this.state.resources.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

export default ResourceList;
