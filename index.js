"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    set: function set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    get: function get(key) {
        var cachedData = sessionStorage.getItem(key);
        if (!cachedData) {
            return null;
        }

        return JSON.parse(cachedData);
    },

    remove: function remove(key) {
        sessionStorage.removeItem(key);
    },

    clearAll: function clearAll() {
        sessionStorage.clear();
    }
};