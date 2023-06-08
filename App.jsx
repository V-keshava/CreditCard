import React, {useState} from 'react';
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

const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [text, setText] = useState('');

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const resetValues = () => {
    setCardNumber('');
    setCardName('');
    setExpiryMonth('');
    setExpiryYear('');
    setCVV('');
    setText('');
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
        clickable={false}>
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
              <Text>
                {cardNumber.slice(0, 4) +
                  '  ' +
                  cardNumber.slice(4, 8) +
                  '  ' +
                  cardNumber.slice(8, 12) +
                  '  ' +
                  cardNumber.slice(12, 16)}
              </Text>
            ) : (
              <Text>{'####  ####  ####  ####'}</Text>
            )}
          </Text>
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
      {/* Input Fields */}
      <View style={styles.container1}>
        <TextInput
          style={[styles.input1, {}]}
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
    padding: 10,
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
