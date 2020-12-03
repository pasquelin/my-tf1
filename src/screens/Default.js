import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {styles} from '../styles/app'

export default class ScreenDefault extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>My TF1</Text>
        </View>
        <Text style={styles.text}>Test pour rémy</Text>
        <Button
          onPress={() => this.props.navigation.navigate('ScreenVideo')}
          title="Video"
        />
        <Button
          onPress={() => this.props.navigation.navigate('ScreenAbout')}
          title="About"
        />
      </View>
    )
  }
}
