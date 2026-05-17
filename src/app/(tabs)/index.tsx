import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import HomeHeader from "../../../components/HomeHeader";
import MacroGrid from "../../../components/MacroGrid";
import RecentMeals from "../../../components/RecentMeals";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={{paddingBottom: 100}}>
      <Text style={globalStyles.title}>MacroTrack</Text>
      <HomeHeader></HomeHeader>
      <MacroGrid></MacroGrid>
      <RecentMeals></RecentMeals>
    </ScrollView>
  );
}
