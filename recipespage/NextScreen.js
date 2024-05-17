import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../Styles';
import FontsFam from './FontsFam';
import Bottom_nav from '../Bottom_nav';
import HomeIndicator from './HomeIndicator';
import Navigation from '../Navigation';

const NextScreen = ({ route }) => {
  const navigation = useNavigation();
  const { filteredData, selectedCategory } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);


  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase().trim();
    setSearchQuery(lowercaseQuery);

    const filtered = filteredData.filter(item => {
      const dishNames = Array.from({ length: 4 }, (_, i) => `dishname${i + 1}`);
      let found = false;
      for (let dishName of dishNames) {
        if (item[dishName]?.toLowerCase().includes(lowercaseQuery)) {
          found = true;
          break;
        }
      }
      return found;
    });

    setFilteredResults(filtered);
  };




  return (
    <FontsFam>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={globalStyles.searchContainerNext}>
              <View style={globalStyles.backarrow}>
                <FontAwesome name="angle-left" size={20.01} color="#888" onPress={() => navigation.goBack()} />
              </View>
              <View style={globalStyles.searchtextMain}>
                <View style={globalStyles.searchtextItem}>
                  <View style={globalStyles.iconsearch}>
                    <FontAwesome name="search" size={18.01} color="#9FA5C0" style={globalStyles.icon} />
                  </View>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Search..."
                    onChangeText={handleSearch}
                    value={searchQuery}
                    autoCorrect={false}
                  />
                  <TouchableOpacity style={globalStyles.erase} onPress={() => { setSearchQuery(''); }}>
                    {/* <View style={globalStyles.erase}> */}
                    <FontAwesome name="times-circle" size={18.01} color="#888" style={globalStyles.eraseicon} />
                    {/* </View> */}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={globalStyles.backarrow}>
                <HomeIndicator/>
              </View>
            </View>

            {filteredResults.map((item, index) => (
              <View style={globalStyles.carddivmain} key={item.id}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {[1, 2, 3, 4].map((index) => (
                    (selectedCategory === 'All' || item[`dishtype${index}`] === selectedCategory) && (
                      <View style={globalStyles.cardAlign} key={index}>
                        <View style={globalStyles.carddiv}>
                          <View style={globalStyles.cardmain}>
                            <View style={globalStyles.imgtext}>
                              <Image source={{ uri: item.profile }} style={globalStyles.image} />
                              <Text>{item.profileName}</Text>
                            </View>
                            <View style={globalStyles.likeBtnNext}>
                              <Image source={{ uri: item[`image${index}`] }} style={globalStyles.imagecontent} />
                              <TouchableOpacity style={globalStyles.heartMain1} >
                                <FontAwesome name="heart-o" size={15} color="#fff" style={globalStyles.hearto} />
                              </TouchableOpacity>
                            </View>
                            <Text style={globalStyles.cake}>{item[`dishname${index}`]}</Text>
                            <View style={globalStyles.food}>
                              <Text style={globalStyles.mins}>{item[`dishtype${index}`]}</Text>

                              <FontAwesome name="circle" size={8} color="#9FA5C0" />
                              <View style={globalStyles.minsMain}>
                                <FontAwesome name="angle-right" size={15} color="#9FA5C0" />
                                <Text style={globalStyles.mins}> {item[`time${index}`]}</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  ))}
                </View>
              </View>
            ))}
          </View>
          </ScrollView>
       
      </SafeAreaView>
      <View style={globalStyles.bottomnav_next}>
          <Bottom_nav />
        </View>
    </FontsFam>
  );
};

export default NextScreen;