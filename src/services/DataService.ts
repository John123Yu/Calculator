export enum ServiceFields {
  ONE = "one",
  TWO = "two",
}

export interface SearchParams {
  [key: string]: string;
}

export interface DataServiceType {
  getData: (service: ServiceFields, params?: SearchParams) => Promise<any>;
}

export class DataService implements DataServiceType {
  public type: any;

  setType = (t: any) => {
    this.type = t;
  };

  getData = async (service: ServiceFields, params?: SearchParams) => {
    let token = localStorage.getItem("token");
    let query = `?filter=${this.type.toLocaleLowerCase()}&`;

    if (params) {
      query += Object.keys(params)
        .map(
          (k: string) =>
            encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
        )
        .join("&");
    }
    const response = await fetch(`/api/${service}${query}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  };
}

export const DataServiceMock: DataService = {
  type: "ContentType.ALL",
  getData: () => Promise.resolve({}),
  setType: () => {},
};
