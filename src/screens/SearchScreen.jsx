import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from '../api/yelp'

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose'
      }
    })
    setResults(response.data.businesses)
  }

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});

export default SearchScreen;
