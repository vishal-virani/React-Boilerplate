import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ButtonBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title,onPress } = this.props
        return (
            <View>
                <Button
                    title={title}
                    onPress={onPress} />
            </View>
        );
    }
}
