import React from 'react'
import s from './User.module.css'

const Users = (props) => {

    if (props.users.length === 0) (
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
                followed: false,
                fullName: 'Yevgeniy',
                status: 'I‘m organizator',
                location: {city: 'Kiyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
                followed: true,
                fullName: 'Diana',
                status: 'user 2',
                location: {city: 'NA', country: 'Ukraine'}
            },
            // {
            //     id: 3,
            //     photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
            //     followed: true,
            //     fullName: 'Sergey',
            //     status: 'user 3',
            //     location: {city: 'Torgovitsa', country: 'Ukraine'}
            // }
        ])
    )

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users