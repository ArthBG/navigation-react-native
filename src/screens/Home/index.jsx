import { View, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import style from './styles.js'

export default function Home() {
    const navigation = useNavigation()
  return (
    <View style={style.container}>
        <Text>Home</Text>
        <TouchableOpacity
            style={style.navButton}
            onPress={() => navigation.navigate('Profile')}
        >
            <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={style.navButton}
            onPress={() => navigation.navigate('Contact')}
        >
            <Text>Contact</Text>
        </TouchableOpacity>
      
    </View>
  )
}