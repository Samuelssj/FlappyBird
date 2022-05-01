const getObjects = (name) => {
    return JSON.parse(window.localStorage.getItem(name))
}

const setObject = (name, value) => {
    window.localStorage.setItem(name, value)
}

const getOrCreate = (name, value) => {
    if (getObjects(name) === null) {
        setObject(name, value);
    }

    return getObjects(name);
}