import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Book = (props) => {
  return (
    <View style={styles.book}>
        <Text>{props.title}</Text>
        <Text>by {props.author}</Text>
        <Text>{props.text}</Text>
        <Text>{props.isbn}</Text>
        <Button title="Read"/>
    </View>
  );
}

const styles = StyleSheet.create({
    book: {
      backgroundColor: '#fff',
    },
});

export default Book;