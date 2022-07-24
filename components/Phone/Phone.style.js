import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone_title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone_input: {
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    padding: 10,
    fontSize: 25,
  },
  phone_icon_container: {
    width: 20,
  },
  phone_icon: {
    width: 20,
    height: 20,
  },
});
