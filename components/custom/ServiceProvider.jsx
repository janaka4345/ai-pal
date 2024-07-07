'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function ServiceProvider({ iconColor }) {
    const pathname = usePathname().split('/')
    const service = pathname[2]
    console.log(service)
    return <span className={cn('px-2 uppercase', iconColor)}>{service}</span>
}
export default ServiceProvider
