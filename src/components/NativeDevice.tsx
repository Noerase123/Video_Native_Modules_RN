import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, NativeModules } from 'react-native';

const { DeviceServiceModule } = NativeModules;

interface IDeviceServiceModule {
  getDeviceAttributes (
    successCallback: (res: any) => void,
    errorCallback: (error: any) => void,
  ): void;
  getDeviceID(
    successCallback: (res: any) => void,
    errorCallback: (error: any) => void,
  ): void;
}

const deviceService = DeviceServiceModule as IDeviceServiceModule;

export function NativeLocation() {
  const [deviceAttribute, setDeviceAttribute] = useState<any>({});
  const [deviceId, setDeviceId] = useState('');

  const getDeviceAttributes = () => deviceService.getDeviceAttributes(
    (res: any) => {
      setDeviceAttribute(res);
    },
    (err: string) => {
      console.log('error', err);
    }
  );

  const getDeviceID = () => deviceService.getDeviceID(
    (res: string) => {
      setDeviceId(res);
    },
    (err: string) => {
      console.log('error', err);
    }
  );

  useEffect(() => {
    getDeviceAttributes();
    getDeviceID();
  }, []);

  const renderAttrs = Object.keys(deviceAttribute);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.label}>Device Attributes</Text>
        <View style={styles.flexCol}>
          {renderAttrs.map((attr, key) => (
            <View key={key} style={styles.flexRow}>
              <Text>{attr}</Text>
              <Text style={styles.value}>{deviceAttribute[attr]}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.flexRow, styles.spaceTop]}>
        <Text style={styles.label}>Device ID</Text>
        <Text style={styles.value}>{deviceId}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    paddingHorizontal: 50
  },
  spaceTop: {
    marginTop: 20
  },
  flexCol: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 25
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    color: '#808080'
  },
  value: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000'
  }
});