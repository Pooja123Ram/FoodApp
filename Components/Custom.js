import React, { useEffect, useState } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const Custom = ({ visible, onRequestClose, otp }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.otpText}>Your OTP is:</Text>
                    <Text style={styles.otpValue}>{otp}</Text>
                    <TouchableOpacity onPress={onRequestClose} style={styles.closeButtonOtp}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:'100%',
        height:'50',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width:'100%',
        height:'50',
    },
    otpText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    otpValue: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    closeButton:{
        paddingLeft:300,
    }
});

export default Custom;