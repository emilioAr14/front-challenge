import React from "react";
import { getInfo, getAge } from "./getData";

const APIContext = React.createContext();

function APIProvider (props) {
    const [info, setInfo] = React.useState({});

    React.useEffect(() => {
        async function loadData () {
            const data = await getInfo();
            const results = data.results[0];
            const { age } = await getAge(results.name.first);
            setInfo({
                ...results,
                age
            });
        }

        loadData();
    }, [])

    return (
        <APIContext.Provider value={{
            info,
            setInfo
        }}>
            {props.children}
        </APIContext.Provider>
    )
}

export { APIContext, APIProvider }