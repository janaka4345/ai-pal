import { Button } from '@/components/ui/button'
import VerifyEmailForm from '../_components/VerifyEmailForm'

export default function page() {
    return (
        <div className="g-6 mx-auto flex flex-col">
            <div className="mx-auto flex h-[60svh] w-[350px] flex-col justify-around">
                <h1>Verify Your Email Address</h1>

                <VerifyEmailForm />
                <p>
                    Dindt recive the code?
                    <Button variant="link" onClick={requestNewToken}>
                        Request Another
                    </Button>
                </p>
            </div>
        </div>
    )
}
