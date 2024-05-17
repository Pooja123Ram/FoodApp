import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FontsFam from './FontsFam';
import { globalStyles } from '../Styles'; // Adjust the path according to your project structure

const Food = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://192.168.1.25:3200/api/getData');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <FontsFam>
            <ScrollView>
                <View style={globalStyles.carddivFood}>
                    {data.map((item, index) => (
                        <View key={index}>
                            <View>
                                <View style={globalStyles.imgtext}>
                                    <Image source={{ uri: item.profile }} style={globalStyles.image} />
                                    <Text>{item.profileName}</Text>
                                </View>
                                <View style={globalStyles.likeBtnHme}>
                                    <Image source={{ uri: item.image1 }} style={globalStyles.imagecontent} />
                                    <TouchableOpacity style={globalStyles.heartMainHome} >
                                        <FontAwesome name="heart-o" size={15} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={globalStyles.cake}>{item.dishname1}</Text>
                                <View style={globalStyles.food}>
                                    <Text style={globalStyles.mins}>{item.dishtype1}</Text>
                                    <FontAwesome name="circle" size={8} color="#9FA5C0" />
                                    <View style={globalStyles.minsMain}>
                                        <FontAwesome name="angle-right" size={15} color="#9FA5C0" />
                                        <Text style={globalStyles.mins}>{item.time1}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </FontsFam>
    );
};

export default Food;
