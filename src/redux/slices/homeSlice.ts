import { Dispatch } from 'react'
import { createSlice } from '@reduxjs/toolkit'

interface iState {
    modal: {
        show: boolean
    }
    members: any[]
    genders: any[]
    filter: any
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
            age: '20',
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
    genders: [
        {
            id: '1',
            gender: 'Female',
        },
        {
            id: '2',
            gender: 'Male',
        },
        {
            id: '3',
            gender: 'Others',
        },
    ],
    filter: {},
}

// dispatch(setMember(state.members.filter((item) => {
//     return (
//         item.age >= action.payload.valueAgeMax &&
//         item.age >= action.payload.valueAgeMin &&
//         item.gender >= action.payload.valueGender
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
        setFilter(state, action) {
            state.filter = action.payload
        },
        // handleFilterByCondition(state, action) {
        //     // console.log('valueAction', action.payload)
        //     state.members = state.members.filter((item) => {
        //         return (
        //             item.age >= action.payload.valueAgeMax &&
        //             item.age >= action.payload.valueAgeMin &&
        //             item.gender >= action.payload.valueGender
        //         )
        //     })
        // },
        handleClearFitterConditionModal(state, action) {
            state.filter = action.payload
        },
    },
})

export const {
    showModal,
    hideModal,
    // handleFilterByCondition,
    handleClearFitterConditionModal,
    setFilter,
} = homeSlice.actions

export default homeSlice.reducer
