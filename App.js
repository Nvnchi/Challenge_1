import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Book from './components/Book'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Bookshop</Text>
      </View>

      <Book 
        title="Book title 1"
        author="by Some Random dude"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-8-2165-1860-1"
      />
      <Book 
        title="Book title 2"
        author="by some other dude"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-2-1425-4277-8"
      />
      <Book 
        title="Book title 3"
        author="by Jane Doe"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN 978-5-9684-0436-7"
      />
      <Book 
        title="Book title 4"
        author="by John Doe"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nsl vulputate urna, quis feugiat puru enim id ex."
        isbn="ISBN-978-8-3356-4834-0"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  book: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 30,
  },
});