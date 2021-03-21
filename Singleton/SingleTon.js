// Singletons create classes that return a single same instance of that class.
// For example a settings object that should be non-changing.

class Settings {
    constructor() {
        if (Settings.instance instanceof Settings) {
            return Settings.instance;
        }

        this.settingsObject = {
            color: 'red',
            version: Math.floor(Math.random() * 4000)
        };

        // Object.freeze(this.settingsObject);
        // Object.freeze(this);
        Settings.instance = this;
    }
    get(key) {
        return this.settingsObject[key];
    }
}

const s = new Settings();
const a = new Settings();

console.log(s.get('version'));;
console.log(a.get('version'));;
