import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBars from '../components/SearchBars';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';


export default function SearchScreen() {
  const [searchApi, results, erorMessage] = useResult();
  const [term, setTerm] = useState('');

  const filterResutByPrice = (price) => {
    return results.filter((results) => {
      console.log(results);
      return results.price === price;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBars
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} />
      {erorMessage ? <Text>{erorMessage}</Text> : null}
      {results.length == 0 ? (
        <></>
      ) : (
        <>
          <View style={styles.searchContainer}>
            <View style={styles.lowPrice}>
              <ResultList
                title="Ekonomik Restoranlar"
                results={filterResutByPrice("₺")}
                titleStyle={styles.titleStyle}
              />
            </View>
            <View style={styles.midPrice}>
              <ResultList
                title="Uygun Restoranlar"
                results={filterResutByPrice("₺₺")}
              />
            </View>
            <View style={styles.higthPrice}>
              <ResultList
                title="Lüks Restoranlar"
                results={filterResutByPrice("₺₺₺")}
              />
            </View>
          </View>
        </>
      )}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4646',
  },
  lowPrice:{
    color:'gray'
  },
  titleStyle:{
    color:'red',
  }
})