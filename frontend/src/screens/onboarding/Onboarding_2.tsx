import React, { useState } from 'react'
import {
  View,
  Text,
  Dimensions,
  Input,
  StyleSheet,
  CheckBox,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import TextBlock from '../../components/TextBlock'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const h = (deviceHeight * 25) / 100
const w = (deviceWidth * 80) / 100

const howToUseText =
  'Upon creating an account using your AU email, you will answer a series of initial questions so we can get an idea of your current state of well-being.\n \n Through a daily log-in, you can spin a wheel to receive a dare that pertains to your current progress. You will also answer a question about your previous dare to determine how much you’ve improved. \n \n You will be able to manage your goals and challenges in an organized manner. We will keep track of your overall progress through the Wheel of Wellness and provide you with advice and information that will help you to continue to advance in your areas of improvement.'
const targetText =
  'AUCares strives to assist you in:\n Sleep\n Physical Activity\n Occupational Health\n Fruit and Vegetable Consumption\n Social Health\n Emotional HealthHydration'

const desc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const Onboarding_2 = ({ navigation }) => {
  return (
    <View style={styles.onboardingContainer}>
      <TextBlock title="How to Use" desc={howToUseText} />

      <TextBlock title="Target Use" desc={targetText} />

      <View style={styles.BtnViewContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding_1')
          }}
          style={styles.onboardingBtnContainer}
        >
          <Text style={styles.onboardingBtn}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mood')
          }}
          style={styles.onboardingBtnContainer}
        >
          <Text style={styles.onboardingBtn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingBtn: {
    fontSize: 18,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  onboardingBtnContainer: {
    elevation: 8,
    //backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  BtnViewContainer: {
    width: w,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Onboarding_2
