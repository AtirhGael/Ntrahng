import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
// import { icons } from "@/constants";
// import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "../types/types";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            style={styles.mapImage}
          />

          <View style={styles.addressContainer}>
            <View style={styles.addressRow}>
              {/* <Image source={icons.to} style={styles.icon} /> */}
              <Text style={styles.addressText} numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>

            <View style={styles.addressRow}>
              {/* <Image source={icons.point} style={styles.icon} /> */}
              <Text style={styles.addressText} numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date & Time</Text>
            <Text style={styles.detailValue}>
              {/* {formatDate(ride.created_at)}, {formatTime(ride.ride_time)} */}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Driver</Text>
            <Text style={styles.detailValue}>
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Car Seats</Text>
            <Text style={styles.detailValue}>{ride.driver.car_seats}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment Status</Text>
            <Text
              style={[
                styles.detailValue,
                ride.payment_status === "paid" ? styles.paid : styles.unpaid,
              ]}
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    marginBottom: 10,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mapImage: {
    width: 80,
    height: 90,
    borderRadius: 10,
  },
  addressContainer: {
    flexDirection: "column",
    marginLeft: 20,
    gap: 10,
    flex: 1,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  addressText: {
    fontSize: 16,
    fontFamily: "JakartaMedium",
  },
  details: {
    flexDirection: "column",
    width: "100%",
    marginTop: 20,
    backgroundColor: "#F5F5F5", // Adjust to match your design
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontFamily: "JakartaMedium",
    color: "gray",
  },
  detailValue: {
    fontSize: 16,
    fontFamily: "JakartaBold",
  },
  paid: {
    color: "green",
  },
  unpaid: {
    color: "red",
  },
});

export default RideCard;
