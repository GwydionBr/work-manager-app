import { PropsWithChildren } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ThemedView } from './ThemedView'

const ThemedSafeAreaView = ({ children} : PropsWithChildren) => {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </ThemedView>
  );
}

export default ThemedSafeAreaView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})