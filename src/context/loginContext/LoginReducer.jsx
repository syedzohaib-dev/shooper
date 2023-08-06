export const reducer = (state, action) => {
    switch (action.type) {
        case "Login":
            return { ...state, user: action.payload }

        case "Logout":
            return { ...state, user: undefined }



        default:
            return state
    }

}