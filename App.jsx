// import React from "react";
// import {Image, View} from 'react-native'
// import { CreditCardInput,LiteCreditCardInput } from "react-native-credit-card-input";

// export default App=()=>{

//  const _onChange = (form) =>

// // will print:
// {
//   valid: true; // will be true once all fields are "valid" (time to enable the submit button)
//   values: { // will be in the sanitized and formatted form
//   	number: "4242 4242";
//   	expiry: "06/19";
//   	cvc: "300";
//   	type: "visa"; // will be one of [null, "visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"]
//   	name: "Sam";

//   	// postalCode: "34567"
//   }
//   status: {  // will be one of ["incomplete", "invalid", and "valid"]
//     number: "incomplete";
//     expiry: "incomplete";
//     cvc: "incomplete";
//     name: "incomplete";
//     // postalCode: "incomplete"
//   }
// }
//   return(
//     <View>
//       <LiteCreditCardInput
//   imageFront={require('../CreditCard/Assests/images/visa.png')}
//   imageBack={require('../CreditCard/Assests/images/visa.png')}
//   onChange={_onChange}
// />
//     </View>
//   )
// }

// import React from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Card Number"
//         keyboardType="numeric"
//         maxLength={16}
//       />
//       <TextInput style={styles.input} placeholder="Card Holder Name" />
//       <View style={styles.inlineContainer}>
//         <TextInput
//           style={[styles.input, { flex: 1 }]}
//           placeholder="Expiry Date"
//           keyboardType="numeric"
//           maxLength={4}
//         />
//         <TextInput
//           style={[styles.input, { flex: 1 }]}
//           placeholder="CVV"
//           keyboardType="numeric"
//           maxLength={3}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   inlineContainer: {
//     flexDirection: 'row',
//   },
// });

// export default App;

import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
// import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';



const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [text, setText] = useState('')

  const flipCard = () => {
    setFlipped(!flipped);
  };


  const SplicedText = ({cardNumber})=>{
    const spliced = setCardNumber(cardNumber.slice(0,3)+" "+cardNumber.slice(3,7)+" "+cardNumber.slice(7,11)+"  "+cardNumber.slice(11,15))
    return(
      <Text>{spliced}</Text>
    )
  }

  // const RollingNumber=({cardNumber})=>{
  //   const animatedValue= useRef(useSharedValue(0)).current;
  // useEffect(()=>{
  //   animatedValue.value = withTiming(cardNumber,{duration:1000});
  // },[cardNumber,animatedValue])
  
  // const animatedStyle = useAnimatedStyle(()=>{
  //   return{
  //     transform:[{translateY:animatedValue * -30}]
  //   }
  // })
  // return(
  //   <Animated.View style={animatedStyle}>
  //     <Text>{cardNumber}</Text>
  //   </Animated.View>
  // )
  // }
  const resetValues = () => {
    setCardNumber('');
    setCardName('');
    setExpiryMonth('');
    setExpiryYear('');
    setCVV('');
    setText('')
    flipCard(flipped);
    
  };
  
  return (
    <View style={styles.container}>
      <FlipCard
        style={styles.cardContainer}
        flip={flipped}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        clickable={false}
        // onFlipEnd={isFlipped => {
        //   if (!isFlipped) {
        //     setFlipped(false);
        //   }
        // }
        // }
        >
        {/* Front Side */}
        <ImageBackground
          source={require('../CreditCard/Assests/images/7.jpeg')}
          imageStyle={{borderRadius: 10}}
          style={[styles.card, styles.frontCard]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../CreditCard/Assests/images/chip.png')}
              style={styles.chip}
            />
            <Image
              source={require('../CreditCard/Assests/images/visa.png')}
              style={styles.visa}
            />
          </View>

          <Text style={[styles.input, {fontSize: 20, marginTop: 20}]}>
            {cardNumber ? (
              <Text>{cardNumber.slice(0,4)+"  "+cardNumber.slice(4,8)+"  "+cardNumber.slice(8,12)+"  "+cardNumber.slice(12,16)}</Text>
            ) : (
              <Text>{'####  ####  ####  ####'}</Text>
            )}
          </Text>
          {/* <RollingNumber cardNumber={cardNumber} /> */}

          
          <View
            style={[
              styles.inlineContainer,
              {justifyContent: 'space-between'},
            ]}></View>
          <View style={styles.inlineContainer}>
            <View>
              <Text style={{color: 'white', marginLeft: 8, marginTop: 0}}>
                Card Holder Name
              </Text>

              <Text
                style={[
                  styles.input,
                  {textDecorationLine: 'none', marginTop: 0},
                ]}>
                {cardName ? (
                  <Text>{cardName.toUpperCase()}</Text>
                ) : (
                  <Text></Text>
                )}
              </Text>
            </View>
            <View>
              <Text style={{color: 'white', marginTop: 0}}>Expiry Date</Text>
              
              <Text style={[styles.input, {marginTop: 0}]}>
                {expiryMonth ? <Text>{expiryMonth}</Text> : <Text>{'MM'}</Text>}
                {'/'}
                {expiryYear ? <Text>{expiryYear}</Text> : <Text>{'YY'}</Text>}
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Back Side */}
        <ImageBackground
          source={require('../CreditCard/Assests/images/7.jpeg')}
          imageStyle={{borderRadius: 10}}
          style={[styles.card, styles.backCard]}>
          <View style={styles.cardBlack}></View>
          <Text style={styles.cvvText}>CVV</Text>
          <View style={styles.cvv}>
            <Text style={styles.text}>{cvv}</Text>
          </View>
          <Image
            source={require('../CreditCard/Assests/images/visa.png')}
            style={[styles.visa, {marginLeft: 250}]}
          />
        </ImageBackground>
      </FlipCard>

      <View style={styles.container1}>
        <TextInput
          style={[styles.input1,{}]}
          placeholder="Card Number"
          keyboardType="numeric"
          maxLength={16}
          value={cardNumber}
          onChangeText={setCardNumber}
          
        />
        <TextInput
          style={styles.input1}
          placeholder="Card Holder Name"
          onChangeText={setCardName}
          value={cardName}
          maxLength={20}
        />
        <View style={styles.inlineContainer}>
          <TextInput
            style={[styles.input1, {width: '24%'}]}
            placeholder="Expiry month"
            keyboardType="numeric"
            maxLength={2}
            
            onChangeText={setExpiryMonth}
            value={expiryMonth}
          />
          <TextInput
            style={[styles.input1, {width: '24%'}]}
            placeholder="Expiry Year"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={setExpiryYear}
            value={expiryYear}
          />
          {/* <SelectDropdown data={month} rowStyle={{width:50, height:40,}} /> */}
          <TextInput
            style={[styles.input1, {width: '50%'}]}
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            onFocus={flipCard}
            onChangeText={setCVV}
            value={cvv}
            // secureTextEntry
            
          />
        </View>
        <Button title="submit" onPress={resetValues} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    // justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
    position: 'absolute',
  },
  cardContainer: {
    height: 200,
    width: 400,
  },
  card: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    backfaceVisibility: 'hidden',
  },
  frontCard: {
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  backCard: {
    backgroundColor: '#ddd',
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 370,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding:10,
    borderColor: 'rgba(255, 255, 255, 0)',
    color: 'white',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    // fontSize:10
    
    
  },
  inlineContainer: {
    flexDirection: 'row',
  },
  cvvText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'white',
    marginLeft: '90%',
  },
  chip: {
    width: 50,
    height: 40,
    // padding:20
    borderRadius: 10,
  },
  visa: {
    width: 75,
    height: 40,
    marginLeft: '65%',
    marginTop: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input1: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBlack: {
    marginLeft: -16,
    width: '109%',
    height: 40,
    backgroundColor: 'black',
    marginTop: 10,
  },
  cvv: {
    marginLeft: 0,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
  },
  text: {
    color: 'black',
    padding: 8,
    marginLeft: '85%',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
});

export default App;
