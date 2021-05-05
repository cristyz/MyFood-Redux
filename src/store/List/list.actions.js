export function sumList(a) {
    return {
        type: 'SUMLIST',
        payload: a
    }
}

export function subtractList(a) {
    return {
        type: 'SUBTRACTLIST',
        payload: [a]
    }
}