import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return<ActivityIndicator {...this.props} />
  }
}
