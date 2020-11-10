import React, { useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import Markdown from 'react-native-markdown-display';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const copy = `
Unordered

- Sub-lists are made by indenting 2 spaces:
  - Nested List
    - Test
    - Test
    - Test
- Very easy!
`;

const MasterScreen = (props: Props) => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function () {
            console.log("Back called");
            return true;
        });
    }, []);

    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const onButtonPress = () => {
        const pushAction = StackActions.push({
            routeName: 'Stack1',
            params: {
                myUserId: 9,
            },
        });

        props.navigation.dispatch(pushAction);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: '100%', backgroundColor: 'red' }}>
                <Markdown >
                    {copy}
                </Markdown>
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }