import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {styles} from '../styles/app'

export default class ScreenVideo extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Video</Text>
        </View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Accueil"
        />
      </View>
    )
  }
}
