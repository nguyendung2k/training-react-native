import { Dispatch } from 'react'
import { createSlice } from '@reduxjs/toolkit'

interface iState {
    modal: {
        show: boolean
    }
    members: any[]
}

const initialState: iState = {
    modal: {
        show: false,
    },
    members: [
        {
            name: 'Jenny Wilson',
            image: '../../assets/images/Avatar1.png',
            follow: '2050',
            description: 'Typical creator. Bacon guru. Gamer.',
            age: '10',
            gender: 'Female',
        },
        {
            name: 'Annette Black',
            image: '../../assets/images/Avatar1.png',
            follow: '1230',
            description:
                'I want to empower entrepreneurs and have a tangible impact in my community.',
            age: '20',
            gender: 'Female',
        },
        {
            name: 'Savannah Nguyen',
            image: '../../assets/images/Avatar1.png',
            follow: '456',
            description: 'Typical creator. Bacon guru. Gamer.',
            age: '30',
            gender: 'Others',
        },
        {
            name: 'Savannah Phong',
            image: '../../assets/images/Avatar1.png',
            follow: '456',
            description: 'Typical creator. Bacon guru. Gamer.',
            age: '24',
            gender: 'Male',
        },
        {
            name: 'Savannah Vu',
            image: '../../assets/images/Avatar1.png',
            follow: '456',
            description: 'Typical creator. Bacon guru. Gamer.',
            age: '40',
            gender: 'Male',
        },
        {
            name: 'Savannah Le',
            image: '../../assets/images/Avatar1.png',
            follow: '456',
            description: 'Typical creator. Bacon guru. Gamer.',
            age: '36',
            gender: 'Others',
        },
    ],
}

// dispatch(setMember(state.members.filter((item) => {
//     return (
//         item.age >= action.payload.valueAgeMax &&
//         item.age >= action.payload.valueAgeMin &&
//         item.gender === action.payload.valueGender
//     )
// })))

// useEffect(() => {
//     const data = filter.lkasjfdslkaj
//     Dispatch(setMembers(data))
// }, [filter])

// const handle = (values) => {
//     dispatch(setFilter(values))
// }

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        showModal(state, action) {
            state.modal = action.payload
        },
        hideModal(state) {
            state.modal = initialState.modal
        },
        setMember(state, action) {
            state.members = action.payload
        },
        resetListMember(state) {
            state.members = initialState.members
        },
    },
})

export const {
    showModal,
    hideModal,
    setMember,
    // handleFilterByCondition,
    resetListMember,
} = homeSlice.actions

export default homeSlice.reducer
