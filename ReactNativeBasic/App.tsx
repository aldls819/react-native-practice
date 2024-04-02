/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const test = '123';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              height: 2000,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 20, fontWeight: 'bold'}}>
              안녕하세요
            </Text>
            <Text
              allowFontScaling={false}
              style={{fontSize: 20, fontWeight: 'bold'}}>
              반갑습니다
            </Text>
            <Text
              allowFontScaling={false}
              style={{fontSize: 20, fontWeight: 'bold'}}>
              이것은 리액트네이티브
            </Text>
          </View>
          <View style={{backgroundColor: 'blue'}}>
            <Text
              allowFontScaling={false}
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              반갑습니다 {test} 반갑습니다 {test}반갑습니다 {test}반갑습니다{' '}
              {test}
              반갑습니다 {test}반갑습니다 {test}반갑습니다 {test}반갑습니다{' '}
              {test}
            </Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <Text>가로 스크롤 뷰</Text>
            <Text>가로 스크롤 뷰</Text>
            <Text>가로 스크롤 뷰</Text>
            <Text>가로 스크롤 뷰</Text>
            <Text>가로 스크롤 뷰</Text>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
