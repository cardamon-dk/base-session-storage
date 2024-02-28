# Session Storage Utility

The `session` module provides a utility for handling session storage in a web browser. It includes functions to set, get, remove, and clear session cache, facilitating easy data storage and retrieval during a user's session.

## Functions

### 1. `set(key, value)`

Stores data in the session storage.

- **Parameters:**
  - `key`: The key under which the data will be stored.
  - `value`: The data to be stored.

### 2. `get(key)`

Retrieves data from the session storage based on the provided key.

- **Parameters:**
  - `key`: The key of the data to be retrieved.

- **Returns:**
  - The stored data if it exists, otherwise returns `null`.

### 3. `remove(key)`

Removes the data from the session storage associated with the provided key.

- **Parameters:**
  - `key`: The key of the data to be removed.

### 4. `clearAll()`

Clears all data stored in the session storage.

## Usage

```javascript
import { session } from './base-session-storage';

// Example Usage
session.set('username', 'john_doe'); // Set data
const username = session.get('username'); // Retrieve data

if (username) {
    console.log(`Username: ${username}`);
} else {
    console.log('No session data available.');
}

session.remove('username'); // Remove data
session.clearAll(); // Clear all session data
