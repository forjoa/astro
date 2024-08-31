import type { ApiSpaceXResponse, Doc } from '../types/api'

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12
            }
        })
    })
    
    const { docs: launches } = await res.json() as ApiSpaceXResponse

    return launches
}

export const getLaunchById = async ({ id } : { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = await res.json() as Doc

    return launch
}
