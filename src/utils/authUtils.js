export const login = (e, email, password, props) => {
  console.log('login hit!')
  e.preventDefault()
  props.history.push('/dash')
}

export const forgotPass = () => {
  console.log('forgotPass hit!')
}

export const createAccount = () => {
  console.log('createAccount hit!')
}

export const registerReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    case 'reType':
      return { ...state, reType: action.payload }
    case 'firstName':
      return { ...state, firstName: action.payload }
    case 'lastName':
      return { ...state, lastName: action.payload }
    case 'teacherValue':
      return { ...state, teacher: action.payload }
    default:
      throw new Error()
  }
}