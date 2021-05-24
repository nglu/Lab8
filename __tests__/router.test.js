/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

test('length of history stack', () =>{
    pushToHistory('settings');
    pushToHistory('entry', 1);
    pushToHistory('');
    pushToHistory('settings');
    pushToHistory('entry', 2);
    pushToHistory('');

    expect(history.length).toBe(7);
})

test('current state: settings', () => {
    expect(pushToHistory('settings').state.page).toBe('settings');
});

test('current state: entry 1', () => {
    expect(pushToHistory('entry', 1).state.page).toBe('entry1');
});

test('current state: default', () => {
    expect(pushToHistory('home').state.page).toBe(undefined);
});

