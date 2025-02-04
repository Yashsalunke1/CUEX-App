import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AccountingSettings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
          
      <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/Sidebar/menu')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.headerTitle}> Account Settings </Text>
      </View>
      {/* KYC Verification */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/Sidebar/kyc-verification')}
      >
        <Text style={styles.optionTitle}> KYC VERIFICATION</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      {/* Account Details */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/Sidebar/account-details')}
      >
        <Text style={styles.optionTitle}> ACCOUNT DETAILS</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      {/* Request Account Delete */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/Sidebar/RequestAccountDeletion')}
      >
        <Text style={styles.optionTitle}> REQUEST ACCOUNT DELETE</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      {/* Nominee Details */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/Sidebar/nominee-details')}
      >
        <Text style={styles.optionTitle}> NOMINEE DETAILS</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 16,
    marginBottom:10
  },
  headerTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    flex: 3,
  },
  optionDescription: {
    fontSize: 14,
    color: '#555',
    flex: 5,
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    flex: 1,
    textAlign: 'right',
  },
});

export default AccountingSettings;
