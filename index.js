function receivesAFunction(leggo) {
    leggo();
}

function leggo() {
    return null
}

receivesAFunction(leggo)

function returnsANamedFunction() {
    return function potato() {}
}

returnsANamedFunction()

function returnsAnAnonymousFunction() {
    return function() {}
}

returnsAnAnonymousFunction()
