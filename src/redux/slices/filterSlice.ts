import { createSlice } from '@reduxjs/toolkit'

interface filterSlice {
    searchValue: string
    age: {
        from: string
        to: string
    }
    gender: string
    checkBox: boolean
}

const initialState: filterSlice = {
    searchValue: '',
    age: {
        from: '0',
        to: '0',
    },
    gender: 'Male',
    checkBox: true,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchFilterChange(state, action) {
            // console.log('state', state)
            state.searchValue = action.payload
        },
        searchAgeMinChange(state, action) {
            state.age.from = action.payload
        },
        searchAgeMaxChange(state, action) {
            state.age.to = action.payload
        },
        searchGenderChange(state, action) {
            state.gender = action.payload
        },
        updateCheckboxIdChange(state) {
            state.checkBox === !state.checkBox
        },
    },
})

export const {
    searchFilterChange,
    searchAgeMinChange,
    searchAgeMaxChange,
    searchGenderChange,
    updateCheckboxIdChange,
} = filterSlice.actions

export default filterSlice.reducer
