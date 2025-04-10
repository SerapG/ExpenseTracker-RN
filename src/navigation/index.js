import { createStackNavigator } from '@react-navigation/stack';
import screens from '../screens';

const MyStack = createStackNavigator({
    screens:{
        Home:screens.HomeScreen,
        AddExpence:screens.AddExpenseScreen,
        Category:screens.CategoryScreen,
        ExpenseDetails:screens.ExpenseDetail
    }
})


export default createStackNavigator(MyStack);






















