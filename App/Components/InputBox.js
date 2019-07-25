import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { placeholder, ...props } = this.props;
    return (
      <View>
        <Input
          placeholder={placeholder}
          {...props} />
      </View>
    );
  }
}

export default InputBox;
