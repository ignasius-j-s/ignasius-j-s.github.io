class ThemeSwitch {
    constructor(mode) {
        this.checkbox = document.querySelector('input[name=theme-checkbox]');
        this.checkbox.checked = mode;
        this.checkbox.addEventListener('change', this.toggleTheme.bind(this));
        localStorage.setItem('theme', mode ? 'light' : 'dark');
    }
    isChecked() {
        return this.checkbox.checked;
    }
    toggleTheme(setting) {
        let theme = this.isChecked() ? 'light' : 'dark';
        document.documentElement.setAttribute(
            'data-theme',
            theme,
        );
        localStorage.setItem('theme', theme);
    }
}

var lightModePreferred = true;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    lightModePreferred = false;
}

if (localStorage.getItem('theme') === 'dark') {
    lightModePreferred = false;
} else if (localStorage.getItem('theme') === 'light') {
    lightModePreferred = true;
}

document.documentElement.setAttribute(
    'data-theme',
    lightModePreferred ? 'light' : 'dark'
);

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = new ThemeSwitch(lightModePreferred);
})
