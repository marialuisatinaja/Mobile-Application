import { StyleSheet, View} from 'react-native';
import Accounts from './components/Accounts';
import Users from './components/Users';
import Students from './components/Students';

const App= () => {
  return (
    <View style={styles.container}>

          <Accounts/>

          <Users/>

          <Students/>   

    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flexGrow: 1,
  }
});
