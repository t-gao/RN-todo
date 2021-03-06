/**
 * Persist storage helper.
 */
import { AsyncStorage } from 'react-native';

async function save(key, value, callback) {
    console.log("PersistStorage, save called, key: " + key + ", value: " + value);
    try {
        await AsyncStorage.setItem(key, value);
        if (callback !== undefined) {
            callback(true);
        }
    } catch (error) {
        console.log("PersistStorage, error when save: " + error);
        // Error saving data
        if (callback !== undefined) {
            callback(false);
        }
    }
}

async function remove(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        // Error saving data
    }
}

async function retrieve(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        return null;
    }
}

async function retrieveAsync(key) {
    return AsyncStorage.getItem(key);
}

exports.save = save;
exports.remove = remove;
exports.retrieve = retrieve;
exports.retrieveAsync = retrieveAsync;