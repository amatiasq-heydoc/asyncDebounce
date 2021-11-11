# Async debounce

With a debounced function the promise returned by the function is lost so we can’t await it.

`debounce` is not using the promise returned by `seconds`, it ignores the return value of the debounced function.

## With await

```sh
node src/await.js
```

`await` wraps whatever you pass to it in a promise so by using it we can’t see that the debounced function actually returns `undefined`.

You can see the `DEBOUNCE` timer is completed only 9ms instead of waiting for 3 seconds as the non-debounced function does.

```
Initialised
DEBOUNCE: 9.749ms
PLAIN: 3.003s
```

---

```sh
node src/await-fixed.js
```

By using `asyncDebounce` we get a promise that will only be completed after the debounce time has passed **and** the function's return promise has been fulfilled.

```
Initialised
PLAIN: 3.002s
DEBOUNCE: 3.109s
```

## With `.then()`

```sh
node src/then.js
```

If we use `promise.then()` instead of `await` we can see the debounced function actually returns `undefined`

You can see the `DEBOUNCE` timer is completed only 9ms instead of waiting for 3 seconds as the non-debounced function does.

```
/debounce/src/then.js:9
debounced(3).then(() => console.timeEnd('DEBOUNCE'));
            ^
TypeError: Cannot read property 'then' of undefined
    at Object.<anonymous> (/debounce/src/then.js:9:13)
```

---

```sh
node src/then-fixed.js
```

```
Initialised
PLAIN: 3.004s
DEBOUNCE: 3.106s
```
