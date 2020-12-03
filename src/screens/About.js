import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {styles} from '../styles/app'

export default class ScreenAbout extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>My TF1</Text>
        </View>
        <Text style={styles.text}>Ce fût un plaisir d'échanger avec toi</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Accueil"
        />
      </View>
    )
  }
}
