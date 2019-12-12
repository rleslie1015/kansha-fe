import React, { useEffect } from 'react';

export const Feed = () => {
    useEffect(() => {
        let src = `${process.env.REACT_APP_BASE_URL}/feed/live/?token=Bearer ${localStorage.getItem('id_token')}`
        let sse = new EventSource(src)

        sse.addEventListener('recognition', data => console.log(data))

        return function cleanup () {
            sse.close()
        }
    }, [])

    return <div>feed</div>
}
