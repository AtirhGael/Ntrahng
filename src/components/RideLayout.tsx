import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetView,
  } from "@gorhom/bottom-sheet";
  import { router } from "expo-router";
  import React, { useRef } from "react";
  import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
  import { GestureHandlerRootView } from "react-native-gesture-handler";
  
  import Map from "@/components/Map";
  import { icons } from "@/constants";
  
  const RideLayout = ({
    title,
    snapPoints,
    children,
  }: {
    title: string;
    snapPoints?: string[];
    children: React.ReactNode;
  }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
  
    return (
      <GestureHandlerRootView style={styles.flex1}>
        <View style={styles.flex1}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => router.back()}>
                <View style={styles.backButton}>
                  <Image
                    source={icons.backArrow}
                    resizeMode="contain"
                    style={styles.backIcon}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.title}>{title || "Go Back"}</Text>
            </View>
  
            <Map />
          </View>
  
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints || ["40%", "85%"]}
            index={0}
          >
            {title === "Choose a Rider" ? (
              <BottomSheetView style={styles.bottomSheetContent}>
                {children}
              </BottomSheetView>
            ) : (
              <BottomSheetScrollView style={styles.bottomSheetContent}>
                {children}
              </BottomSheetScrollView>
            )}
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    );
  };
  
  const styles = StyleSheet.create({
    flex1: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: "#3b82f6", // Tailwind's 'bg-blue-500'
    },
    header: {
      position: "absolute",
      top: 16, // approximately Tailwind's 'top-16'
      zIndex: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: 20, // Tailwind's 'px-5'
    },
    backButton: {
      width: 40, // Tailwind's 'w-10'
      height: 40, // Tailwind's 'h-10'
      backgroundColor: "white",
      borderRadius: 9999, // makes the button circular
      alignItems: "center",
      justifyContent: "center",
    },
    backIcon: {
      width: 24, // Tailwind's 'w-6'
      height: 24, // Tailwind's 'h-6'
    },
    title: {
      fontSize: 20, // Tailwind's 'text-xl'
      fontFamily: "JakartaSemiBold", // Tailwind's 'font-JakartaSemiBold'
      marginLeft: 20, // Tailwind's 'ml-5'
    },
    bottomSheetContent: {
      flex: 1,
      padding: 20,
    },
  });
  
  export default RideLayout;
  