
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../Styles';
import { FontAwesome } from '@expo/vector-icons';
import Itemsearch from './Itemsearch';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.25:3200/api/getData');
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  const filteredData = data.filter(item => {
    if (selectedCategory === 'All') {
      return true;
    } else {

      for (let i = 1; i <= 4; i++) {
        if (item[`dishtype${i}`] === selectedCategory) {
          return true;
        }
      }
      return false;
    }
  });

  return (
    <FontsFam>
      <SafeAreaView style={globalStyles.container1}>
        <ScrollView>
          <View style={globalStyles.barmain}>
            <View style={globalStyles.Itemsearch}>
              <Itemsearch />
            </View>
          </View>

          <View style={globalStyles.categorytextHome}>
            <Text style={globalStyles.category}>{literals.categoryHome}</Text>
          </View>

          <View style={globalStyles.containerBtnHme}>
            <TouchableOpacity
              onPress={() => setSelectedCategory('All')}
              style={[
                globalStyles.buttonFood,
                selectedCategory === 'All' && { backgroundColor: '#1FCC79' }
              ]}
            >
              <Text style={[globalStyles.buttonText, selectedCategory === 'All' && { color: 'white' }]}>
                {literals.allFilter}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedCategory('Food')}
              style={[
                globalStyles.buttonFood,
                selectedCategory === 'Food' && { backgroundColor: '#1FCC79' }
              ]}
            >
              <Text style={[globalStyles.buttonText, selectedCategory === 'Food' && { color: 'white' }]}>
                {literals.foodFilter}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedCategory('Drinks')}
              style={[
                globalStyles.buttonFood,
                selectedCategory === 'Drinks' && { backgroundColor: '#1FCC79' }
              ]}
            >
              <Text style={[globalStyles.buttonText, selectedCategory === 'Drinks' && { color: 'white' }]}>
                {literals.drinksFilter}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.foodTab}>
            <Text style={globalStyles.foodHome}>{selectedCategory}</Text>
          </View>

          {loading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Loading....</Text>
            </View>
          ) : (
            <SafeAreaView>
              <ScrollView>

                <View style={globalStyles.carddivmainheader}>
                  {filteredData.map((item) => (
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
                                  <View style={globalStyles.likeBtnHme}>
                                    <Image source={{ uri: item[`image${index}`] }} style={globalStyles.imagecontent} />
                                    <TouchableOpacity style={globalStyles.heartMainHome} >
                                      <FontAwesome name="heart-o" size={15} color="#fff" />
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
          )}
        </ScrollView>
      </SafeAreaView>
    </FontsFam>
  );
};

export default Home;
