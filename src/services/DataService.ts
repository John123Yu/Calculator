export enum RouteFields {
  POST = "/posts",
  POSTSLIST = "/posts/list",
}

enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface SearchParams {
  [key: string]: string;
}

export interface DataServiceType {
  getData: (
    route: RouteFields,
    method: Methods,
    params?: SearchParams
  ) => Promise<any>;
}

export class DataService implements DataServiceType {
  public url: string =
    "https://cqyfyqxt6j.execute-api.us-east-1.amazonaws.com/prod/";

  getData = async (
    route: RouteFields,
    method: Methods,
    params?: SearchParams
  ) => {
    // let token = localStorage.getItem("token");
    let headers = {
      ...params,
      Accept: "application/json",
    };

    const response = await fetch(`${this.url}${route}`, {
      method,
      headers,
    });

    return await response.json();
  };
}

export const DataServiceMock: DataService = {
  url: "fakeUrl",
  getData: () => Promise.resolve({}),
};
