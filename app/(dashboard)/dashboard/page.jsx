import { tokenData } from '@/lib/apiLimit'
import BuyTokens from './_components/BuyTokens'
import { RemainigTokensChart } from './_components/RemainigTokensChart'
import SubscribePlans from './_components/SubscribePlans'
import { RemainigTimeChart } from './_components/RemainigTimeChart'

export default async function DashboardPage() {
    // console.log(data)
    return (
        <div className="grid grid-cols-2 gap-2">
            <RemainigTokensChart />
            <RemainigTimeChart />
            <BuyTokens />
            <SubscribePlans />
        </div>
    )
}
