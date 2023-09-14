import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

    // const watches = [
    //     { id: 1, name: 'Apple Watch', price: 200 },
    //     { id: 2, name: 'MI Watch', price: 50 },
    //     { id: 1, name: 'Samsung Watch', price: 100 },
    // ]

    // const watches = [
    //     {
    //         "Id": 1,
    //         "name": "Apple Watch Series 7",
    //         "price": 399.99
    //     },
    //     {
    //         "Id": 2,
    //         "name": "Galaxy Watch 4",
    //         "price": 349.99
    //     },
    //     {
    //         "Id": 3,
    //         "name": "Forerunner 945",
    //         "price": 599.99
    //     },
    //     {
    //         "Id": 4,
    //         "name": "Versa 3",
    //         "price": 229.95
    //     },
    //     {
    //         "Id": 5,
    //         "name": "Watch GT 3",
    //         "price": 249.99
    //     }
    // ]


    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    return (
        <>
            <div className=''>
                <h1>haha!!!</h1>
                {
                    watches.map(watch => <Watch watch={watch} key={watch.id}> </Watch>)
                }
            </div>
        </>
    )
}

export default App
