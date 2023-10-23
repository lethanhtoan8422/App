import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
  )
}

export default TabNavigator
