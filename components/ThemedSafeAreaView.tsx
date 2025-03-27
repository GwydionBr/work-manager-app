import { PropsWithChildren } from 'react'
import { StyleSheet, SafeAreaView, type ViewProps } from 'react-native'
import { ThemedView } from './ThemedView'

interface ThemedSafeAreaViewProps extends ViewProps {}

const ThemedSafeAreaView = ({ children }: ThemedSafeAreaViewProps) => {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ThemedView>
  );
};

export default ThemedSafeAreaView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})