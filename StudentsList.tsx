import { StatusBar } from 'expo-status-bar';
import { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, TextInput, FlatList, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Student = {
    id: String,
    name: String,
    phone: String,
    img: String,
}
const StudentsList: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const onRowSelected = (id: String) => {
        console.log('in the list:, row was selected ' + id)
        navigation.navigate('Details', { id: 123, name: 'testaaaaaa' })}
    const students: Array<Student> = [{ name: 'first', id: '1', phone: '054', img: 'img' }, { name: 'second', id: '2', phone: '054', img: 'img' }]
    return (
        <FlatList style={styles.flatlist}
            data={students}
            keyExtractor={student => student.id.toString()}
            renderItem={({ item }) => (
                <ListItem name={item.name} id={item.id} image={item.img} onRowSelected={onRowSelected} />
            )}>
        </FlatList>
    )
            }
export const ListItem: FC<{ name: String, id: String, image: String, onRowSelected: (id: String) => void }> =
    ({ name, id, image, onRowSelected }) => {
        return (
            <TouchableHighlight
                onPress={() => onRowSelected(id)}
                underlayColor={Colors.table_selected}>
                <View style={styles.listRow} >
                    <Image style={styles.listRowImage}
                        source={require("./assets/o.png")} />
                    <View style={styles.listRowTextContainer}>
                        <Text style={styles.listRowName}> {name} </Text>
                        < Text style={styles.listRowId} > {id} </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
export default StudentsList
const styles = StyleSheet.create({
    listRow: {
        margin: 4,
        flexDirection: "row",
        height: 150,
        elevation: 1,
        borderRadius: 2,
    },
    flatlist: {
        flex: 1,
        marginTop: 35
    },
    listRowImage: {
        margin: 10,
        resizeMode: "contain",
        height: 130,
        width: 130,
    },
    listRowTextContainer: {
        flex: 1,
        margin: 10,
        justifyContent: "space-around"
    },
    listRowName: {
        fontSize: 30
    },
    listRowId: {
        fontSize: 25
    }
})