let currentEffect;
export function createSignal(initialValue) {
    let state = initialValue;
    const subscribers = new Set;
    function getState() {
        if (currentEffect && !subscribers.has(currentEffect))
            subscribers.add(currentEffect);
        return state;
    }
    function setState(newState) {
        state = newState;
        subscribers.forEach((effect) => { effect(); });
        return state;
    }
    return [getState, setState];
}
export function createEffect(callback) {
    currentEffect = callback;
    callback();
    currentEffect = undefined;
}
