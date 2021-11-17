
const ListGroup = (props) =>
{
    const { items, selectedItem, onItemSelect } = props;
    return (
        <ul className="list-group">
            { items.map(item => (
                <li
                    onClick={ () => onItemSelect(item) }
                    key={ item._id }
                    className={ item === selectedItem ? "list-group-item active" : "list-group-item" }
                >
                    { item.name }
                </li>
            )) }
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;