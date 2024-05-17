
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles';
import { useNavigation } from '@react-navigation/native';
import FontsFam from './FontsFam';
import { literals } from '../Literal';


const Notification = () => {
  const [profileData1, setProfileData1] = useState(null);
  const [profileData2, setProfileData2] = useState(null);
  const [profileData3, setProfileData3] = useState(null);
  const [profileData4, setProfileData4] = useState(null);
  const [profileData5, setProfileData5] = useState(null);
  const [profileData6, setProfileData6] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [loading5, setLoading5] = useState(true);
  const [loading6, setLoading6] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
    fetchData6();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/1`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      console.log('Fetched data 1:', jsonData);
      setProfileData1(jsonData);
      setLoading1(false);
    } catch (error) {
      console.error('Error fetching data 1:', error);
      setLoading1(false);
    }
  };
  

  const fetchData2 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/2`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Fetched data 2:', jsonData);
      setProfileData2(jsonData);
      setLoading2(false);
    } catch (error) {
      console.error('Error fetching data 2:', error);
      setLoading2(false);
    }
  };

  const fetchData3 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/3`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Fetched data 3:', jsonData);
      setProfileData3(jsonData);
      setLoading3(false);
    } catch (error) {
      console.error('Error fetching data 3:', error);
      setLoading3(false);
    }
  };

  const fetchData4 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/1`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Fetched data 4:', jsonData);
      setProfileData4(jsonData);
      setLoading4(false);
    } catch (error) {
      console.error('Error fetching data 4:', error);
      setLoading4(false);
    }
  };

  const fetchData5 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/2`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Fetched data 5:', jsonData);
      setProfileData5(jsonData);
      setLoading5(false);
    } catch (error) {
      console.error('Error fetching data 5:', error);
      setLoading5(false);
    }
  };

  const fetchData6 = async () => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/3`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Fetched data 6:', jsonData);
      setProfileData6(jsonData);
      setLoading6(false);
    } catch (error) {
      console.error('Error fetching data 6:', error);
      setLoading6(false);
    }
  };


  const handleProfilePress = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.25:3200/api/getDataById/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log(`Fetched data for ID ${id}:`, jsonData);
      navigation.navigate('ProfileDetails', { profileData: jsonData });
    } catch (error) {
      console.error(`Error fetching data for ID ${id}:`, error);
    }
  };
  
  return (
    <FontsFam>
    <View style={globalStyles.containerNotification1}>
      <View>
        <Text style={globalStyles.new}>New</Text>
        {loading1 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData1 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(1)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData1.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
                  <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData1?.profileName}</Text>
               
                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id1Notification}</Text>
        )}
      </View>

      <View>
        <Text style={globalStyles.today}>Today</Text>
        {loading2 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData2 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(2)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData2.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
                  <Text style={globalStyles.textone}>{profileData2?.profileName}</Text>
                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id2Notification}</Text>
        )}
      </View>

      <View>
        {loading3 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData3 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(3)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData3.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
                  <Text style={globalStyles.textone}>{profileData3?.profileName}</Text>

                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id3Notification}</Text>
        )}
      </View>

      <View>
        {loading4 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData4 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(1)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData4.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
              {/* <TouchableOpacity onPress={() => handleProfilePress(1)}> */}
                  <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData4?.profileName}</Text>
                {/* </TouchableOpacity> */}
                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id4Notification}</Text>
        )}
      </View>

      <View>
        <Text style={globalStyles.yesterday}>Yesterday</Text>
        {loading5 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData5 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(2)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData5.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
              {/* <TouchableOpacity onPress={() => handleProfilePress(5)}> */}
                  <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData5?.profileName}</Text>
                {/* </TouchableOpacity> */}
                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id5Notification}</Text>
        )}
      </View>

      <View>
        {loading6 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : profileData6 ? (
          <>
            <View style={globalStyles.cardIdOne}>
            <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(3)}>
              <View style={globalStyles.imageMain}>
                <Image source={{ uri: profileData6.profile }} style={globalStyles.imageNotification} />
              </View>
              <View style={globalStyles.notificationProfile}>
              {/* <TouchableOpacity onPress={() => handleProfilePress(6)}> */}
                  <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData6?.profileName}</Text>
                {/* </TouchableOpacity> */}
                <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
                <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{literals.id6Notification}</Text>
        )}
      </View>
    </View>
    </FontsFam>
  );
};

export default Notification;





