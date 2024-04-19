import React from 'react';
const array =[1,2,3,4];

const arrayList = array.map((a,index) => (
    <li key={index}>{a}</li>
));

const user = [
    {
        id: 1,
        name: "Nivrita",
    },

    {
        id: 2,
        name: "Munib",
    },
]

const userList = user.map((u,index) => (
    <ul key={index}>
        <li>{u.id}</li>
        <li>{u.name}</li>
    </ul>

));
const List = () => {
    return (
        <div>    {/*div na dile multiple line k multiple line vabe ba multiple component vebe nei */}
            {arrayList}
            {userList}
        </div>
    )
}

export default List;