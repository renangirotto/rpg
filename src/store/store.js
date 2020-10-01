import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            character: {
                name: '',
                class: ''
            },
            teste: ''
        }
    },
    getters: {
        getCharacter(state) {
            return state.character
        }
    },
    mutations: {
        setCharacterName(state, payload) {
            state.character.name = payload
        },
        setCharacterClass(state, payload) {
            state.character.class = payload
        }
    }
})

export default store