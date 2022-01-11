export const isBrowser = () => typeof window !== "undefined"

export const getAccess = () =>
  isBrowser() && window.localStorage.getItem("isAccessGranted")
    ? JSON.parse(window.localStorage.getItem("isAccessGranted"))
    : false

const revokeAccess = () => window.localStorage.setItem("isAccessGranted", false)

const grantAccess = () => window.localStorage.setItem("isAccessGranted", true)

export const handleLogin = ({answer}) => {
    if (answer === `marcus` || answer === `Marcus`) {
      return grantAccess()
    }
    return false
}

export const isLoggedIn = () => {
    return getAccess()
}

export const logout = callback => {
    revokeAccess()
    callback()
  }
  