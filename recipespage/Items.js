import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../Styles';
import HomeIndicator from './HomeIndicator';
import FontsFam from './FontsFam';

const Items = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    fetchData();
    getSearchHistory();
  }, []);

  useEffect(() => {
    saveSearchHistory();
  }, [searchHistory]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.25:3200/api/getData');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchHistory = async () => {
    try {
      const value = await AsyncStorage.getItem('searchHistory');
      if (value !== null) {
        setSearchHistory(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveSearchHistory = async () => {
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (query) => {
    const lowercaseQuery = query.toLowerCase();
    setSearchQuery(lowercaseQuery);

    // Filter the data based on the provided search query
    const filteredData = data.filter(item => {
      for (let i = 1; i <= 4; i++) {
        const dishName = item[`dishname${i}`]?.toLowerCase();
        if (dishName === lowercaseQuery) {
          return true;
        }
      }
      return false;
    });

    // Set the filtered data
    setFilteredData(filteredData);

    // Update search history
    setSearchHistory(prevSearchHistory => {
      const updatedHistory = [...prevSearchHistory, lowercaseQuery];
      return [...new Set(updatedHistory)];
    });
  };


  const clearSearchHistory = async () => {
    try {
      await AsyncStorage.removeItem('searchHistory');
      setSearchHistory([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitEditing = () => {
    handleSearch(searchQuery);
  };

  const renderItem = ({ item }) => {
    let dishName = null;
    let dishType = null;
    let image = null;

    // Iterate over each possible dish name (dishname1, dishname2, dishname3, dishname4)
    for (let i = 1; i <= 4; i++) {
      const currentDishName = item[`dishname${i}`]?.toLowerCase();
      if (currentDishName === searchQuery.toLowerCase()) {
        dishName = currentDishName;
        dishType = item[`dishtype${i}`]?.toLowerCase();
        image = item[`image${i}`];
        profile = item[`profile`]; 
        time = item[`time${i}`]?.toLowerCase();
        profileName = item[`profileName`]?.toLowerCase();
        break;
      }
    }


    if (dishName) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
          <View style={globalStyles.itemContainer}>

            <View style={globalStyles.cardmainItemSearch}>
              <View>
                <View style={globalStyles.imgtext}>
                  <Image source={{ uri: profile }} style={globalStyles.image} />

                  <Text>{item.profileName}</Text>
                </View>
                <View style={globalStyles.likeBtnHme}>
                  <Image source={{ uri: image }} style={globalStyles.imagecontent} />
                  <TouchableOpacity style={globalStyles.heartMainHome} >
                    <FontAwesome name="heart-o" size={15} color="#fff" />
                  </TouchableOpacity>
                </View>
                <Text style={globalStyles.cake}>{dishName}</Text>
                <View style={globalStyles.food}>
                  <Text style={globalStyles.mins}>{dishType}</Text>
                  <FontAwesome name="circle" size={8} color="#9FA5C0" />
                  <View style={globalStyles.minsMain}>
                    <FontAwesome name="angle-right" size={15} color="#9FA5C0" />
                    <Text style={globalStyles.mins}> {time}</Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };


  const renderSearchHistory = () => {
    return (
      <View style={globalStyles.searchHistoryContainer}>
        <View>

              <FlatList
                data={searchHistory}
                renderItem={({ item }) => (
                  <View style={globalStyles.searchHistory}>
                  <View style={globalStyles.searchHistoryMain}>
                    <FontAwesome name="clock-o" size={18.01} color="#9FA5C0" style={globalStyles.searchClock} />
                  <TouchableOpacity onPress={() => handleSearch(item)}>
                    <Text style={globalStyles.searchHistoryText}>{item}</Text>
                  </TouchableOpacity>
                  </View>
            <FontAwesome name="arrow-up" size={18.01} color="#9FA5C0" style={{ transform: [{ rotate: '310deg' }] }} />
          </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />

          <TouchableOpacity onPress={clearSearchHistory} style={globalStyles.clearHistoryText}>
            <Text style={globalStyles.searchHistoryText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FontsFam>
      <SafeAreaView style={globalStyles.safeview}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={globalStyles.containerItems}>
              <View style={globalStyles.homeItems}>
                <View style={globalStyles.backarrow}>
                  <FontAwesome name="angle-left" size={20.01} color="#888" onPress={() => navigation.goBack()} />
                </View>
                <View style={globalStyles.searchtextMain}>
                  <View style={globalStyles.searchtextItem}>
                    <View style={globalStyles.iconsearch}>
                      <FontAwesome name="search" size={18.01} color="#888" style={globalStyles.icon} />
                    </View>
                    <TextInput
                      ref={inputRef}
                      style={globalStyles.input}
                      placeholder="Search..."
                      onChangeText={setSearchQuery}
                      value={searchQuery}
                      autoCorrect={false}
                      onSubmitEditing={handleSubmitEditing}
                    />
                    <TouchableOpacity style={globalStyles.erase} onPress={() => { setSearchQuery(''); setFilteredData([]); }}>
                      <FontAwesome name="times-circle" size={18.01} color="#888" style={globalStyles.eraseicon} />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('HomeIndicator')}>
                  <View style={globalStyles.backarrow}>
                    <HomeIndicator />
                  </View>
                </TouchableOpacity>
              </View>

              <FlatList
                style={globalStyles.listdishes}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
              <View style={globalStyles.line}></View>
              {renderSearchHistory()}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </FontsFam>
  );
};

export default Items;

