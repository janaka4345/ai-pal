export function generateToken() {
    const randomNumber = Math.floor((Math.random()) * 1000000)
    const token = randomNumber.toString().padStart(6, '0');
    const expires = new Date(new Date().getTime() + 3600 * 1000)
    return { token, expires }

}