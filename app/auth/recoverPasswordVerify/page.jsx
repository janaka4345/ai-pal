import RecoverPasswordVerifyForm from '../_components/RecoverPasswordVerifyForm'
export default function page() {
    return (
        <div className="g-6 mx-auto flex flex-col">
            <div className="mx-auto flex h-[60svh] w-[350px] flex-col justify-around">
                <h1>Verify your Password reset request</h1>
                <RecoverPasswordVerifyForm />
            </div>
        </div>
    )
}
