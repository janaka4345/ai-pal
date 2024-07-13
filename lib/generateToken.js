export function generateToken() {
    const token = Math.floor((Math.random()) * 1000000).toString()
    const expires = new Date(new Date().getTime() + 3600 * 1000)
    return { token, expires }

}