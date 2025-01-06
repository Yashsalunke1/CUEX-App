
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

const SetUPIPinPage = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const router = useRouter();

  const handleSetPin = async () => {
    if (pin === confirmPin && pin.length === 4) {
      // Save the PIN securely
      await SecureStore.setItemAsync('upiPin', pin);
      alert("UPI PIN has been set!");
      router.push("/login");  // Navigate to login or other relevant page
    } else {
      alert("PIN does not match or it is not a 4-digit PIN!");
    }
  };

  // Function to only allow numeric input for PIN
  const handlePinChange = (input: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (/^\d{0,4}$/.test(input)) {
      setter(input); // Update the state only if the input is a valid numeric value
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Your UPI PIN</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter 4-digit PIN"
        maxLength={4}
        keyboardType="numeric"
        value={pin}
        onChangeText={(input) => handlePinChange(input, setPin)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirm UPI PIN"
        maxLength={4}
        keyboardType="numeric"
        value={confirmPin}
        onChangeText={(input) => handlePinChange(input, setConfirmPin)}
      />
      <TouchableOpacity  activeOpacity={0.7} style={styles.button} onPress={handleSetPin}>
        <Text style={styles.buttonText}>Set PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SetUPIPinPage;
