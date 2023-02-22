import { appConfig } from "./appConfig";
interface FetchProps {
  url: string;
  method: "GET" | "PUT" | "POST" | "DELETE";
  body?: Record<string, unknown>;
  customFetch?: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>;
}
export const fetchWrapper = async <T>(props: FetchProps): Promise<T> => {
  const headers: RequestInit = {
    method: props.method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (props.body) headers.body = JSON.stringify(props.body);
  let res: Response;
  try {
    if (props.customFetch) {
      res = await props.customFetch(
        `${appConfig.nestUrl}${props.url}`,
        headers
      );
    } else {
      res = await fetch(`${appConfig.nestUrl}${props.url}`, headers);
    }
    if (!res.ok) {
      throw new Error(`${(await res.json()).message}`);
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
};
