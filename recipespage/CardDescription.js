import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../Styles';
import { FontAwesome } from '@expo/vector-icons';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const CardDescription = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { imageId } = route.params;
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const contentScrollViewRef = useRef(null);
    const [isCardAtTop, setIsCardAtTop] = useState(false);
    const [marginTop, setMarginTop] = useState(0); // State for margin top
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fetchCardDetails();
    }, []);

    const fetchCardDetails = async () => {
        try {
            const response = await fetch(`http://192.168.1.25:3200/api/getDataById/${imageId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch card data');
            }
            const jsonData = await response.json();
            setCardData(jsonData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching card data:', error);
            setLoading(false);
        }
    };

    const scrollToTop = () => {
        if (contentScrollViewRef.current) {
            contentScrollViewRef.current.scrollTo({ y: 0, animated: true });
        }
    };

    const handleLineMainClick = () => {
        setIsCardAtTop(!isCardAtTop);
        scrollToTop();
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const scrollPosition = contentOffset.y;
        if (scrollPosition > 0) {
            // Apply margin top when scrolled
            setMarginTop(40);
        } else {
            // Reset margin top when at top
            setMarginTop(40);
        }
    };

    return (
        <ScrollView
            ref={contentScrollViewRef}
            onScroll={handleScroll} 
            scrollEventThrottle={16}
            style={{ marginTop }} 
        >
            <FontsFam>
                <View style={{ flex: 1 }}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <View>
                            {cardData ? (
                                <>
                                    <View style={isCardAtTop ? globalStyles.cardContainerAtTop : globalStyles.cardDishnameImage1}>
                                        <Image source={{ uri: cardData.image1 }} style={globalStyles.image1card} />
                                    </View>
                                    <TouchableOpacity onPress={handleBackPress} style={isCardAtTop ? globalStyles.cardContainerAtTop : globalStyles.backarrowCard}>
                                        <FontAwesome name="angle-left" size={24.01} color="#FFFFFF" />
                                    </TouchableOpacity>
                                    <View style={globalStyles.cardDetailsImage1}>
                                    <View style={globalStyles.cardDetailsAtTop}>
                                        <TouchableOpacity style={globalStyles.lineMain} onPress={handleLineMainClick}>
                                            <Text style={globalStyles.line4}></Text>
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={globalStyles.textImage1}>{cardData.dishname1}</Text>
                                            <View style={globalStyles.foodLikes}>
                                                <Text style={globalStyles.mins}>{cardData.dishtype1}</Text>
                                                <FontAwesome name="circle" size={8} color="#9FA5C0" />
                                                <Text style={globalStyles.mins}> {cardData.time1}</Text>
                                            </View>
                                            <View style={globalStyles.profile1}>
                                                <View style={globalStyles.name1}>
                                                    <Image source={{ uri: cardData.profile }} style={globalStyles.profile1card} />
                                                    <Text style={globalStyles.prfileName1}>{cardData.profileName}</Text>
                                                </View>
                                                <View style={globalStyles.name1}>
                                                    <View style={globalStyles.likesHeart}>
                                                        <FontAwesome name="heart" size={15} color="rgba(255, 255, 255, 1)" />
                                                    </View>
                                                    <Text style={globalStyles.prfileName1}>{cardData.like1} Likes</Text>
                                                </View>
                                            </View>
                                            <View style={globalStyles.lineRecepe}></View>
                                            <Text style={globalStyles.textImage1}>{literals.descriptionHead}</Text>
                                            <Text style={globalStyles.textDesc}>{cardData.description1}</Text>
                                            <View style={globalStyles.lineRecepe}></View>
                                            <Text style={globalStyles.textImage1}>{literals.IngredientHead}</Text>
                                            <View style={globalStyles.ingredientsList}>
                                                <View style={globalStyles.ingredientsCheck}>
                                                    <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                                </View>
                                                <Text style={globalStyles.stepText}>{cardData.ingre1step1}</Text>
                                            </View>
                                            <View style={globalStyles.ingredientsList}>
                                                <View style={globalStyles.ingredientsCheck}>
                                                    <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                                </View>
                                                <Text style={globalStyles.stepText}>{cardData.ingre1step2}</Text>
                                            </View>
                                            <View style={globalStyles.ingredientsList}>
                                                <View style={globalStyles.ingredientsCheck}>
                                                    <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                                </View>
                                                <Text style={globalStyles.stepText}>{cardData.ingre1step3}</Text>
                                            </View>
                                            <View style={globalStyles.lineRecepe}></View>
                                            <Text style={globalStyles.textImage1}>{literals.StepsHead}</Text>
                                            <View style={globalStyles.stepHead}>
                                                <View style={globalStyles.stepOne}>
                                                    <Text style={globalStyles.stepTextone}>{literals.StepsNum}</Text>
                                                </View>
                                                <Text style={globalStyles.textDescone}>{cardData.description1}</Text>
                                            </View>
                                            <View style={globalStyles.ingreImage}>
                                                <Image source={{ uri: cardData.ingre1 }} style={globalStyles.ingre1} />
                                            </View>
                                        </View>
                                    </View>
                                    </View>
                                </>
                            ) : (
                                <Text>{literals.dataCard}</Text>
                            )}
                        </View>
                    )}
                </View>
            </FontsFam>
        </ScrollView>
    );
};

export default CardDescription;
