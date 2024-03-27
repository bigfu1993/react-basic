const list1 = [
    { id: 1, name: 'zs' },
    { id: 2, name: 'ls' },
]
function List() {
    return (
        <ul>{list1.map(l =><li key={l.id}>{l.name}</li>)}</ul>
    )
}

export default List;