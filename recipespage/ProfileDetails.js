// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
// import { globalStyles } from '../Styles';
// import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontsFam from './FontsFam';
// import { literals } from '../Literal';

// const Tab = createMaterialTopTabNavigator();

// const ProfileDetails = () => {
//     const route = useRoute();
//     const { profileData, id } = route.params;
//     const [loading, setLoading] = useState(true);
//     const navigation = useNavigation();
//     const [tab1Data, setTab1Data] = useState(null);
//     const [tab2Data, setTab2Data] = useState(null);
//     const [likedCards, setLikedCards] = useState([]);

//     useEffect(() => {
//         fetchDataForTabs();
//     }, []);

//     const fetchDataForTabs = async () => {
//         try {
//             const response1 = await fetch(`http://192.168.199.94:3200/api/getDataById/${id}`);
//             if (!response1.ok) {
//                 throw new Error('Failed to fetch tab data 1');
//             }
//             const tab1JsonData = await response1.json();
//             setTab1Data(tab1JsonData);

//             const response2 = await fetch(`http://192.168.199.94:3200/api/getDataById/${id}`);
//             if (!response2.ok) {
//                 throw new Error('Failed to fetch tab data 2');
//             }
//             const tab2JsonData = await response2.json();
//             setTab2Data(tab2JsonData);

//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching tab data:', error);
//             setLoading(false);
//         }
//     };

//     const handleLikeCard = (index) => {
//         const imageData = {
//             image: profileData[`image${index}`],
//             dishname: profileData[`dishname${index}`],
//             dishtype: profileData[`dishtype${index}`],
//             time: profileData[`time${index}`],
//         };
    
//         // Add or remove the clicked image based on its presence in likedCards
//         if (likedCards.some((card) => card.image === imageData.image)) {
//             const updatedLikedCards = likedCards.filter((card) => card.image !== imageData.image);
//             setLikedCards(updatedLikedCards);
//         } else {
//             setLikedCards([...likedCards, imageData]);
//         }
//     };

//     const Tab1Screen = () => (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             {loading ? (
//                 <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//                 <ScrollView>
//                     <View style={globalStyles.cardMainTab}>
//                         {[1, 2, 3, 4].map((index) => (
//                             <View key={index} style={globalStyles.cardLikes}>
//                                 <Image source={{ uri: profileData[`image${index}`] }} style={globalStyles.imageRecipe} />
//                                 <TouchableOpacity style={globalStyles.heartMain} onPress={() => handleLikeCard(index)}>
//                                     <FontAwesome name="heart-o" size={15} color="#ffff" style={globalStyles.hearto} />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity onPress={handleImageClick}>
//                                     <Text style={globalStyles.dishnameLike}>{profileData[`dishname${index}`]}</Text>
//                                 </TouchableOpacity>
//                                 <View style={globalStyles.foodLikes}>
//                                     <Text style={globalStyles.mins}>{profileData[`dishtype${index}`]}</Text>
//                                     <FontAwesome name="circle" size={8} color="#9FA5C0" />
//                                     <Text style={globalStyles.mins}> {profileData[`time${index}`]}</Text>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                 </ScrollView>
//             )}
//         </View>
//     );

//     const Tab2Screen = () => (
//         <ScrollView>
//             {loading ? (
//                 <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//                 <View style={globalStyles.cardMainTab}>
//                     {likedCards.map((card, index) => (
//                         <View key={index}>
//                             <Image source={{ uri: card.image }} style={globalStyles.imageRecipe} />
//                              <Text style={globalStyles.dishnameLike}>{card.dishname}</Text>
//                             <View style={globalStyles.foodLikes}>
//                                     <Text style={globalStyles.mins}>{card.dishtype}</Text>
//                                     <FontAwesome name="circle" size={8} color="#9FA5C0" />
//                                     <Text style={globalStyles.mins}> {card.time}</Text>
//                                 </View>
//                         </View>
//                     ))}
//                 </View>
//             )}
//         </ScrollView>
//     );

//     const handleImageClick = () => {
//         navigation.navigate('CardDescription', { imageId: profileData.id });
//     };

//     const handleBackPress = () => {
//         navigation.goBack();
//     };

//     return (
//         <FontsFam>
//         <View style={globalStyles.container}>
//             <View style={globalStyles.profileNav}>
//                 <TouchableOpacity onPress={handleBackPress} style={globalStyles.backarrow}>
//                     <FontAwesome name="angle-left" size={24.01} color="#888" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={globalStyles.backarrow}>
//                     <FontAwesome name="share-alt" size={20.01} color="#888" />
//                 </TouchableOpacity>
//             </View>

//             <View style={globalStyles.profileById}>
//                 <Image source={{ uri: profileData.profile }} style={globalStyles.imageProfileDetails} />
//                 <View style={globalStyles.profileView}>
//                     <Text style={globalStyles.DetailsText}>{profileData.profileName}</Text>
//                 </View>
//             </View>

//             <View style={globalStyles.FollowersProfile}>
//                 <View style={globalStyles.FollowersProfile1}>
//                     <Text style={globalStyles.recepeDetails}>{profileData.recepe}</Text>
//                     <Text style={globalStyles.recepeNum}>{literals.recipeProfile}</Text>
//                 </View>
//                 <View style={globalStyles.FollowersProfile1}>
//                     <Text style={globalStyles.recepeDetails}>{profileData.followers}</Text>
//                     <Text style={globalStyles.recepeNum}>{literals.followProfile}</Text>
//                 </View>
//                 <View style={globalStyles.FollowersProfile1}>
//                     <Text style={globalStyles.recepeDetails}>{profileData.following}</Text>
//                     <Text style={globalStyles.recepeNum}>{literals.followingProfile}</Text>
//                 </View>
//             </View>

//             <View style={{
//                 display: 'flex',
//                 justifyContent: "center", alignItems: 'center'
//             }}>
//                 <View style={globalStyles.FollowProfileDet}>
//                     <Text style={globalStyles.FollowProfileText}>{literals.followProf}</Text>
//                 </View>
//             </View>

//             <View>
//                 <Text style={globalStyles.line3}></Text>
//             </View>
//             <Tab.Navigator
//                 tabBarOptions={{
//                     labelStyle: { fontSize: 12, fontWeight: '500' },
//                     indicatorStyle: { backgroundColor: 'rgba(31, 204, 121, 1)' },
//                 }}
//             >
//                 <Tab.Screen name="Recipes" component={Tab1Screen} />
//                 <Tab.Screen name="Liked" component={Tab2Screen} />
//             </Tab.Navigator>
//         </View>
//         </FontsFam>
//     );
// };

// export default ProfileDetails;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { globalStyles } from '../Styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const Tab = createMaterialTopTabNavigator();

const ProfileDetails = () => {
    const route = useRoute();
    const { profileData, id } = route.params;
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const [tab1Data, setTab1Data] = useState(null);
    const [tab2Data, setTab2Data] = useState(null);
    const [likedCards, setLikedCards] = useState([]);

    useEffect(() => {
        fetchDataForTabs();
    }, []);

    const fetchDataForTabs = async () => {
        try {
            const response1 = await fetch(`http://192.168.1.25:3200/api/getDataById/${id}`);
            if (!response1.ok) {
                throw new Error('Failed to fetch tab data 1');
            }
            const tab1JsonData = await response1.json();
            setTab1Data(tab1JsonData);

            const response2 = await fetch(`http://192.168.1.25:3200/api/getDataById/${id}`);
            if (!response2.ok) {
                throw new Error('Failed to fetch tab data 2');
            }
            const tab2JsonData = await response2.json();
            setTab2Data(tab2JsonData);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching tab data:', error);
            setLoading(false);
        }
    };

    const handleLikeCard = (index) => {
        const imageData = {
            image: profileData[`image${index}`],
            dishname: profileData[`dishname${index}`],
            dishtype: profileData[`dishtype${index}`],
            time: profileData[`time${index}`],
        };
    
        // Add or remove the clicked image based on its presence in likedCards
        if (likedCards.some((card) => card.image === imageData.image)) {
            const updatedLikedCards = likedCards.filter((card) => card.image !== imageData.image);
            setLikedCards(updatedLikedCards);
        } else {
            setLikedCards([...likedCards, imageData]);
        }
    };

    const Tab1Screen = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <ScrollView>
                    <View style={globalStyles.cardMainTab}>
                        {[1, 2, 3, 4].map((index) => (
                            <View key={index} style={globalStyles.cardLikes}>
                                <Image source={{ uri: profileData[`image${index}`] }} style={globalStyles.imageRecipe} />
                                <TouchableOpacity style={globalStyles.heartMain} onPress={() => handleLikeCard(index)}>
                                    <FontAwesome name="heart-o" size={15} color="#ffff" style={globalStyles.hearto} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleImageClick}>
                                    <Text style={globalStyles.dishnameLike}>{profileData[`dishname${index}`]}</Text>
                                </TouchableOpacity>
                                <View style={globalStyles.foodLikes}>
                                    <Text style={globalStyles.mins}>{profileData[`dishtype${index}`]}</Text>
                                    <FontAwesome name="circle" size={8} color="#9FA5C0" />
                                    <Text style={globalStyles.mins}> {profileData[`time${index}`]}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}
        </View>
    );

    const Tab2Screen = () => (
        <ScrollView>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={globalStyles.cardMainTab}>
                    {likedCards.map((card, index) => (
                        <View key={index}>
                            <Image source={{ uri: card.image }} style={globalStyles.imageRecipe} />
                             <Text style={globalStyles.dishnameLike}>{card.dishname}</Text>
                            <View style={globalStyles.foodLikes}>
                                    <Text style={globalStyles.mins}>{card.dishtype}</Text>
                                    <FontAwesome name="circle" size={8} color="#9FA5C0" />
                                    <Text style={globalStyles.mins}> {card.time}</Text>
                                </View>
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );

    const handleImageClick = () => {
        navigation.navigate('CardDescription', { imageId: profileData.id });
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <FontsFam>
        <View style={globalStyles.container}>
            <View style={globalStyles.profileNav}>
                <TouchableOpacity onPress={handleBackPress} style={globalStyles.backarrow}>
                    <FontAwesome name="angle-left" size={24.01} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.backarrow}>
                    <FontAwesome name="share-alt" size={20.01} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={globalStyles.profileById}>
                <Image source={{ uri: profileData.profile }} style={globalStyles.imageProfileDetails} />
                <View style={globalStyles.profileView}>
                    <Text style={globalStyles.DetailsText}>{profileData.profileName}</Text>
                </View>
            </View>

            <View style={globalStyles.FollowersProfile}>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>{profileData.recepe}</Text>
                    <Text style={globalStyles.recepeNum}>{literals.recipeProfile}</Text>
                </View>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>{profileData.followers}</Text>
                    <Text style={globalStyles.recepeNum}>{literals.followProfile}</Text>
                </View>
                <View style={globalStyles.FollowersProfile1}>
                    <Text style={globalStyles.recepeDetails}>{profileData.following}</Text>
                    <Text style={globalStyles.recepeNum}>{literals.followingProfile}</Text>
                </View>
            </View>

            <View style={{
                display: 'flex',
                justifyContent: "center", alignItems: 'center'
            }}>
                <View style={globalStyles.FollowProfileDet}>
                    <Text style={globalStyles.FollowProfileText}>{literals.followProf}</Text>
                </View>
            </View>

            <View>
                <Text style={globalStyles.line3}></Text>
            </View>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 12, fontWeight: '500' },
                    indicatorStyle: { backgroundColor: 'rgba(31, 204, 121, 1)' },
                }}
            >
                <Tab.Screen name="Recipes" component={Tab1Screen} />
                <Tab.Screen name="Liked" component={Tab2Screen} />
            </Tab.Navigator>
        </View>
        </FontsFam>
    );
};

export default ProfileDetails;














