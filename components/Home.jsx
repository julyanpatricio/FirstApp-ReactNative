import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import apiParams from '../config.js';
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const { ts, apikey, hash, baseURL } = apiParams;

  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading
        ? <ActivityIndicator size="large" color="#00ff00" />
        : (
          <>
            <Searchbar
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={searchCharacter}
              onSubmitEditing={searchCharacter}
            />
            <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <CharacterCard
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                  name={item.name} />
              )}
            />
          </>
        )
      }
    </View>
  );
}