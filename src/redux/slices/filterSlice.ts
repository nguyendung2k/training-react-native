import { createSlice } from '@reduxjs/toolkit'

interface filterSlice {
    searchValue: string
    age: {
        from: string
        to: string
    }
    gender: string
    checkBox: string
}

const initialState: filterSlice = {
    searchValue: '',
    age: {
        from: '',
        to: '',
    },
    gender: '',
    checkBox: '',
    // checkBox: true,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchFilterChange(state, action) {
            state.searchValue = action.payload
        },
        searchAgeMinChange(state, action) {
            state.age.from = action.payload
        },
        searchAgeMaxChange(state, action) {
            state.age.to = action.payload
        },
        updateGenderChange(state, action) {
            state.gender = action.payload
        },
        updateCheckboxIdChange(state, action) {
            state.checkBox = action.payload
        },

        handleClearFitterConditionModal(state) {
            state.age.from = initialState.age.from
            state.age.to = initialState.age.to
            state.gender = initialState.gender
            state.checkBox = initialState.checkBox
        },
    },
})

export const {
    searchFilterChange,
    searchAgeMinChange,
    searchAgeMaxChange,
    updateGenderChange,
    updateCheckboxIdChange,
    handleClearFitterConditionModal,
} = filterSlice.actions

export default filterSlice.reducer
