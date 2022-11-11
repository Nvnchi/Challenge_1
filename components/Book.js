import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Book = (props) => {

  const Read = (title) => {
    console.log(title + ' read');
  };

  const Pressed = (title) => {
    console.log(title + ' pressed');
  };

  return (
    <View style={styles.book}>
        <Text onPress={() => Pressed(props.title)}>{props.title}</Text>
        <Text>by {props.author}</Text>
        <Text>{props.text}</Text>
        <Text>{props.isbn}</Text>
        <Button onPress={() => Read(props.title)} title="Read"/>
    </View>
  );
}

const styles = StyleSheet.create({
    book: {
      backgroundColor: '#fff',
    },
});

export default Book;