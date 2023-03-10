import { StatusBar } from 'expo-status-bar';
import { FC, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import StudentsList from './StudentsList';
//import Tictac from './tictac';
//import tictac from './tictac';
const Home: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const [msg, setMsg] = useState('non')
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    console.log('useEffect' + route.params?.newPostId)
    if (route.params?.newPostId) {
      setMsg(JSON.stringify(route.params?.newPostId))
    }
    if (route.params?.serial) {
      setCounter(route.params.serial)
    }
  })
  return (
    <View style={{
      flex: 1, alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>{'Home Screen #' + counter}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { newPostId: 123, name: 'testaaaaaa', serial: counter + 1 })}
      />
      <Button
        title="Go to add student"
        onPress={() => navigation.navigate('AddStudentScreen')}
      />
    </View>
  );
}
const Details: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const [name, setName] = useState<string>(JSON.stringify(route.params?.name))
  const [counter, setCounter] = useState<number>(route.params?.serial)

  useEffect(() => {
    navigation.setOptions({ title: counter })
    if (route.params?.serial) {
      setCounter(route.params.serial)
    }
  })
  return (
    <View style={{
      flex: 1, alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>{'Details Screen #' + counter}</Text>
      <Button
        title={"Go to Home"}
        onPress={() => navigation.navigate('Home', { serial: counter + 1 })}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator()
const App: FC = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Details') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons size={size} color={color} />;
          //return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Tab.Screen name="Details" component={Details} options={{ title: 'Details' }} />
        <Tab.Screen name="AddStudentScreen" component={AddStudentScreen} options={{ title: 'Add Student' }} />
        <Tab.Screen name="StudentsList" component={StudentsList} options={{ title: 'Students list' }} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
const AddStudentScreen: FC = () => {
  const onText1Change = () => { }
  const [text1, setText1] = useState('text 1')
  const onText2Change = () => { }
  const [text2, setText2] = useState('text 2')
  const onText3Change = () => { }
  const [text3, setText3] = useState('text 3')
  const pressHandler = () => { alert('pressHandler') }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('./assets/o.png')}></Image>
      <TextInput
        style={styles.input}
        onChangeText={onText1Change}
        placeholder="input name"
        value={text1}
      />
      <TextInput
        style={styles.input}
        onChangeText={onText2Change}
        value={text2}
      />
      <TextInput
        style={styles.input}
        onChangeText={onText3Change}
        value={text3}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}















export default function app() {
  return (
    <App></App>
  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#aff',
    justifyContent: 'flex-start',
  },
  avatar: {
    marginTop: 10,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'baseline',
  },
  button: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  buttonText: {
    padding: 10
  }

});