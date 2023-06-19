
const checkPage = (page, maxLimit) => {
    if (page > maxLimit) {
        return 0
    }
    if (page < 0) {
        return maxLimit
    }

    return page
}

export { checkPage }