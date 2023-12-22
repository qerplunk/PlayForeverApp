import { StyleSheet } from 'react-native';
import { COLORS } from '../Colors';

const HomeBannerStyles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.navy_blue,
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    hamburger_menu_icon: {
      width: 54,
      height: 54,
      marginLeft: 5,
    },
    play_forever_logo: {
      marginRight: '4%',
      width: 180,
      height: 60,
      resizeMode: 'contain',
    },
    account_button: {
      width: 38,
      height: 38,
      borderRadius: '5%',
      borderWidth: 1,
      borderColor: 'white',
      marginRight: '3%',
    }
  },
});

export default HomeBannerStyles;
