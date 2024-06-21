'use client'

import { usePathname } from 'next/navigation'

function ServiceProvider() {
    const pathname = usePathname().split('/')
    const service = pathname[2]
    console.log(service)
    return <span className="uppercase">{service}</span>
}
export default ServiceProvider
