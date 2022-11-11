import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Book from './components/Book'

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bookshop</Text>
        </View>

        <View style={styles.shoppingcart}>
          <FontAwesomeIcon icon={faShoppingCart} size={30} color={"white"} />
          <Text style={styles.shoppingcart_text}>1</Text>
        </View>
      </View>

      <Book
        title="Book title 1"
        author="Some Random dude"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-8-2165-1860-1"
      />
      <Book 
        title="Book title 2"
        author="some other dude"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-2-1425-4277-8"
      />
      <Book 
        title="Book title 3"
        author="Jane Doe"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-5-9684-0436-7"
      />
      <Book 
        title="Book title 4"
        author="John Doe"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN-978-8-3356-4834-0"
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0096FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
  shoppingcart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shoppingcart_text: {
    position: 'absolute',
    top: 22,
    right: -5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
});