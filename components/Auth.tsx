import React, { useState } from 'react';
import { AppState, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { supabase } from '../lib/supabase';
import { AlertDialog } from './global/Alert';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [alertTitle, setAlertTitile] = useState('');

  async function signInWithEmail() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err: any) {
      const msg = err?.message ? err.message : 'message undefine';
      setAlertTitile('Error');
      setErrMsg(msg);
      setVisible(true);
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmail() {
    try {
      setLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!session) {
        setAlertTitile('Info');
        setErrMsg('Please check your inbox for email verification!');
        setVisible(true);
      }
    } catch (err: any) {
      const msg = err?.message ? err.message : 'message undefine';
      setAlertTitile('Error');
      setErrMsg(msg);
      setVisible(true);
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="mt-10 p-3">
      <View className="py-1 self-stretch mt-5">
        <Text className="text-white">Email</Text>
        <TextInput
          className="border p-2 rounded-md text-white"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View className="py-1 self-stretch">
        <Text className="text-white">Password</Text>
        <TextInput
          className="border p-2 rounded-md text-white"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View className="py-1 self-stretch mt-5">
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-md items-center"
          disabled={loading}
          onPress={() => signInWithEmail()}
        >
          <Text className="text-white">Sign in</Text>
        </TouchableOpacity>
      </View>
      <View className="py-1 self-stretch">
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-md items-center"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text className="text-white">Sign up</Text>
        </TouchableOpacity>
      </View>

      <AlertDialog
        visible={visible}
        title={alertTitle}
        message={errMsg}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}
