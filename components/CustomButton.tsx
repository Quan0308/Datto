import { Link } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function CustomButton(props: { onPress?: () => void; title?: string; href: string }) {
  const { onPress, title = 'Save', href } = props;
  return (
    <View style={styles.button} className="rounded-xl bg-primary">
      <Link onPress={onPress} href={href} className="px-6 py-3.5 w-full">
        <Text style={styles.text} className="text-sm w-full">
          {title}
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'BeVietnamPro_600SemiBold',
  },
});
