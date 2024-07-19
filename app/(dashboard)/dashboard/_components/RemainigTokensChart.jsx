'use client'

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from 'recharts'

import { ChartContainer } from '@/components/ui/chart'

const chartData = [
    { tokens: 'tokens', usage: 150, limit: 200, fill: 'var(--color-tokens)' },
]

const chartConfig = {
    usage: {
        label: 'Usage',
        color: 'hsl(var(--chart-3))',
    },
    tokens: {
        label: 'Tokens',
        color: 'hsl(var(--chart-2))',
    },
}

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'

export function RemainigTokensChart() {
    const [tokensUsed, setTokensUsed] = useState(0)
    const [tokenCount, setTokenCount] = useState(0)

    useEffect(() => {
        const tokenData = async () => {
            const response = await axios.get('/api/tokenData/')
            setTokensUsed(response?.data?.tokensUsed)
            setTokenCount(response?.data?.tier?.tokens)
            // console.log({ response })
        }
        tokenData()

        return () => {}
    }, [])

    const endAngle = (1 - tokensUsed / tokenCount) * 360
    return (
        <Card className="flex w-fit min-w-[300px] flex-col">
            <Suspense fallback={<h1>loading ...</h1>}>
                <CardHeader className="items-center pb-0">
                    <CardTitle>Token Usage</CardTitle>
                    <CardDescription className="text-center">
                        Your token usage for the duration
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <RadialBarChart
                            data={chartData}
                            endAngle={endAngle}
                            innerRadius={80}
                            outerRadius={140}
                        >
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-slate-300/35 last:fill-background"
                                polarRadius={[86, 74]}
                            />
                            <RadialBar dataKey="usage" background />
                            <PolarRadiusAxis
                                tick={false}
                                tickLine={false}
                                axisLine={false}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (
                                            viewBox &&
                                            'cx' in viewBox &&
                                            'cy' in viewBox
                                        ) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-4xl font-bold"
                                                    >
                                                        {tokensUsed.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={
                                                            (viewBox.cx || 0) +
                                                            40
                                                        }
                                                        y={
                                                            (viewBox.cy || 0) +
                                                            20
                                                        }
                                                        className="fill-foreground text-sm"
                                                    >
                                                        /{' '}
                                                        {tokenCount.toLocaleString()}
                                                    </tspan>

                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={
                                                            (viewBox.cy || 0) +
                                                            40
                                                        }
                                                        className="fill-muted-foreground text-base"
                                                    >
                                                        Usage
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                </CardContent>
            </Suspense>
            {/* <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{' '}
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}
