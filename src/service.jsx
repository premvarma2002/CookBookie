import { REACT_APP_APP_ID, REACT_APP_APP_KEY } from "./components/config";

const queryStrings = {
    app_id: REACT_APP_APP_ID,
    app_key: REACT_APP_APP_KEY
};


export const fetchData = async (defaultQuery) => {
    const { app_id, app_key } = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response;
    }
    catch (e) {
        console.log(e, 'something went wrong')
        return e
    }
};