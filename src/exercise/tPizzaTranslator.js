/*
 * @Author: gm.chen
 * @Date: 2021-03-30 20:53:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-03-30 23:43:13
 * @Description: file content
 * @FilePath: /react-demo/src/exercise/tPizzaTranslator.js
 */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

export default PizzaTranslator;