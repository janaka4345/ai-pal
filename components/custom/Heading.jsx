import { cn } from '@/lib/utils'
import ServiceProvider from './ServiceProvider'

export const Heading = ({
    title,
    description,
    icon: Icon,
    iconColor,
    bgColor,
}) => {
    return (
        <>
            <div className="mb-8 mt-8 flex items-center gap-x-3 px-4 lg:px-8">
                <div className={cn('w-fit rounded-md p-2', bgColor)}>
                    <Icon className={cn('h-10 w-10', iconColor)} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">
                        {title} with <ServiceProvider iconColor={iconColor} />
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}
