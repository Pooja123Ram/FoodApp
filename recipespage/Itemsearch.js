import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../Styles';
import { literals } from '../Literal';

const Itemsearch = () => {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.searchtextMain}>
            <TouchableOpacity
                style={globalStyles.searchtextSearch}
                onPress={() => navigation.navigate('Items')}
            >
                <View style={globalStyles.iconBtn}>
                    <FontAwesome name="search" size={20} color="#888" style={globalStyles.iconSearch} />
                    <Text style={globalStyles.buttonTextSearch}>{literals.searchItem}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Itemsearch;
