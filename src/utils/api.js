// accept URL argument
export default function getData(url) {
    // pass URL on the browser Fetch Function
    return fetch(url)
            .then(res => {
                // check if there is a problem with the response
                if (!res.ok) {
                    throw Error("There was a problem with fetching data.")
                }

                // convert the response JSON string into JS Objects
                return res.json()
            })
}