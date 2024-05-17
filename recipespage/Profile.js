import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { firestore } from '../Firebase';
import { globalStyles } from '../Styles';
import { FontAwesome } from '@expo/vector-icons';
import FontsFam from './FontsFam';

const Profile = () => {
  const [data, setData] = useState({ recipes: [], liked: [] });
  const [loading, setLoading] = useState({ recipes: true, liked: true });
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const unsubscribeRecipes = firestore.collection('recipes').onSnapshot(snapshot => {
      const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(prevData => ({ ...prevData, recipes: fetchedData }));
      setLoading(prevLoading => ({ ...prevLoading, recipes: false }));
    });

    const unsubscribeLiked = firestore.collection('liked').onSnapshot(snapshot => {
      const likedItemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLikedItems(likedItemsData);
      setLoading(prevLoading => ({ ...prevLoading, liked: false }));
    });

    return () => {
      unsubscribeRecipes();
      unsubscribeLiked();
    };
  }, []);

  const handleLike = async (item) => {
    try {
      const likedItemRef = firestore.collection('liked').doc(item.id);
      const likedItemDoc = await likedItemRef.get();

      if (likedItemDoc.exists) {
        await likedItemRef.delete();
      } else {
        await firestore.collection('liked').doc(item.id).set(item);
      }
    } catch (error) {
      console.error('Error toggling like status:', error);
    }
  };


  const isLiked = (itemId) => {
    return likedItems.some(item => item.id === itemId);
  };

  const Tab = createMaterialTopTabNavigator();

  const TabContent1 = () => (
    <ScrollView>
      {loading.recipes ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={globalStyles.carddiv}>
          {data.recipes.map(item => (
            <View key={item.id}>
              <View style={globalStyles.cardmain}>
                {/* <Image source={{ uri: item.coverPhoto }} style={globalStyles.imagecontent} /> */}
                <Image 
  source={{ uri: item.coverPhoto }}
  style={globalStyles.imagecontent}
  onError={(error) => console.log('Error loading image:', error)}
/>

                <TouchableOpacity onPress={() => handleLike(item)} style={globalStyles.heartMainUpload}>
                  <FontAwesome
                    name = { isLiked(item.id) ? 'heart-o' : 'heart-o' }
                    size={15}
                    color={isLiked(item.id) ? '#fff' : 'gray'}
                  />
                </TouchableOpacity>
                <Text style={globalStyles.cake}>{item.foodName}</Text>
                <View style={globalStyles.food}>
                  <Text style={globalStyles.mins}>Food</Text>
                  <FontAwesome name="circle" size={8} color="#9FA5C0" />
                  <Text style={globalStyles.mins}> {item.cookingDuration} mins</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );

  const TabContent2 = () => (
    <ScrollView>
      {loading.liked ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={globalStyles.carddiv}>
          {likedItems.map(item => (
            <View key={item.id}>
              <View style={globalStyles.cardmain}>
                <Image source={{ uri: item.coverPhoto }} style={globalStyles.imagecontent} />
                <TouchableOpacity onPress={() => handleLike(item)} style={globalStyles.heartMain}>
                  <FontAwesome name="heart" size={15} color="#ff0000" style={globalStyles.hearto} />
                </TouchableOpacity>
                <Text style={globalStyles.cake}>{item.foodName}</Text>
                <View style={globalStyles.food}>
                  <Text style={globalStyles.mins}>Food</Text>
                  <FontAwesome name="circle" size={8} color="#9FA5C0" />
                  <Text style={globalStyles.mins}> {item.cookingDuration} mins</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );

  return (
    <FontsFam>
    <View style={globalStyles.uploadProfileMain}>

      <TouchableOpacity style={globalStyles.backarrowUpload}>
        <FontAwesome name="share-alt" size={20.01} color="#888" />
      </TouchableOpacity>

<View style={globalStyles.coverImageUpload}>
      <Image source={require('../assets/capture1.png')} height={80} width={80}/>
      </View>

      <View>
        <Text style={globalStyles.profileNameText}>Elena Shelby</Text>
        </View> 

        <View style={globalStyles.FollowersProfileUpload}>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>245</Text>
                    <Text style={globalStyles.recepeNum}>Recipes</Text>
                </View>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>5420</Text>
                    <Text style={globalStyles.recepeNum}>Following</Text>
                </View>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>80</Text>
                    <Text style={globalStyles.recepeNum}>Followers</Text>
                </View>
            </View>

      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12, fontWeight: '500' },
          indicatorStyle: { backgroundColor: 'rgba(31, 204, 121, 1)' },
        }}
      >
        <Tab.Screen name="Recipes" component={TabContent1} />
        <Tab.Screen name="Liked" component={TabContent2} />
      </Tab.Navigator>
    </View>
    </FontsFam>
  );
};

export default Profile;
