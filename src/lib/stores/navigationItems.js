import { writable } from "svelte/store";

const items = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Trending', path: '/trending/', icon: '🔥' },
    { name: 'About Us', path: '/aboutus/', icon: '📖' },
    { name: 'Sign Up', path: '/signup/', icon: '✍️' }, 
    { name: 'GLITCHED PROFILE', path: '/GLITCHED PROFILE/', icon: '✍️' },
    { name: 'Account', path: '/profile/', icon: ' :)' }
];

export let navigationItems = writable(items);