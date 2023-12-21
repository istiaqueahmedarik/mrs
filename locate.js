const locate = ({id, type}) => {
    if (type === 'post') {
        return {
            locations: [
                {title: `Main Section #${id}`, href: `/Main Section/${id}`},
            ],
        }
    }
    return null
}

module.exports = { locate }