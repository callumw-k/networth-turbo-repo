import { appConfig } from "./appConfig";
export const fetchWrapper = async (props) => {
    const headers = {
        method: props.method,
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (props.body)
        headers.body = JSON.stringify(props.body);
    let res;
    try {
        if (props.customFetch) {
            res = await props.customFetch(`${appConfig.nestUrl}${props.url}`, headers);
        }
        else {
            res = await fetch(`${appConfig.nestUrl}${props.url}`, headers);
        }
        if (!res.ok) {
            throw new Error(`${(await res.json()).message}`);
        }
        return await res.json();
    }
    catch (e) {
        throw e;
    }
};
