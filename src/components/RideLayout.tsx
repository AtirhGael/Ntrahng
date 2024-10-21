import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Map from "./Map";
import { useNavigation } from "@react-navigation/native";
import { selectedMarker } from "../assets/images";

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
    const natigation = useNavigation()
    return (
        <GestureHandlerRootView style={styles.flex1}>
            <View style={styles.flex1}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => natigation.goBack()}>
                            <View style={styles.backButton}>
                                <Image
                                    source={selectedMarker}
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
        backgroundColor: "#3b82f6",
    },
    header: {
        position: "absolute",
        top: 16,
        zIndex: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 9999,
        alignItems: "center",
        justifyContent: "center",
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontFamily: "JakartaSemiBold",
        marginLeft: 20,
    },
    bottomSheetContent: {
        flex: 1,
        padding: 20,
    },
});

export default RideLayout;
