const Table = ({ data }) => {
    
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )

                })}
            </tbody>
            </table>
    );

}

export default Table;