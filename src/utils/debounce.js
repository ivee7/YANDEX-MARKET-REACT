export const debounceOne = (fn, ms) => {
    let timeout;
    return function() {
        const fnCall = () => { fn.apply(this, arguments)}

        clearTimeout(timeout);

        timeout = setTimeout(fnCall, ms)
    };
}

export function debounce(fn, wait) {
    let timeout
    return function(...args) {
        const later = () => {
            clearTimeout(timeout)
            fn.apply(this, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}