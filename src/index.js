export default {
    set: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    get: function (key) {
        const cachedData = sessionStorage.getItem(key);
        if (!cachedData) {
            return null;
        }

        return JSON.parse(cachedData);
    },

    remove: function (key) {
        sessionStorage.removeItem(key);
    },

    clearAll: function () {
        sessionStorage.clear();
    },
};
