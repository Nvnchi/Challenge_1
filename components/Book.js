import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Book = (props) => {

  const Read = () => {
    console.log(props.title + ' read');
  };

  const Pressed = () => {
    console.log(props.title + ' pressed');
  };

  return (
    <View style={styles.book}>
      <Text style={styles.book_title} onPress={() => Pressed()}>{props.title}</Text>
      <Text style={styles.book_author}>by {props.author}</Text>
      <Text style={styles.book_text}>{props.text}</Text>
      <View style={styles.bottom}>
        <Text style={styles.book_isbn}>{props.isbn}</Text>
        <Pressable style={styles.button} onPress={() => Read()}>
          <Text style={styles.button_text}>Read</Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    book: {
      flexDirection: 'column',
      marginBottom: 30,
    },
    book_title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#F637EC',
    },
    book_author: {
      fontSize: 10,
      fontStyle: 'italic',
      marginBottom: 5,
      color: '#FBB454',
      fontWeight: 'bold',
    },
    book_isbn: {
      fontSize: 10,
      color: 'white',
    },
    book_text: {
      marginBottom: 5,
      color: '#FAEA48',
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'white',
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 4,
      width: 60,
    },
    button_text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
});

export default Book;