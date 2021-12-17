const DEFAULT_ID_KEY = 'id';

type ItemId = number;

interface IArrayItem {
  [key: string]: any,
}

interface IMapById {
  [key: string]: any
}

export const getMapById = (config: { array: IArrayItem[], idTemplate?: string }): IMapById => {
  const { array, idTemplate = DEFAULT_ID_KEY } = config;

  return (
    array.reduce((result, item) => (
      ({ ...result, [item[idTemplate]]: item})
    ), {} as IMapById)
  )
};

export const getIdsArray = (config: { array: IArrayItem[], idTemplate?: string }): ItemId[] => {
  const { array, idTemplate = DEFAULT_ID_KEY } = config;

  return (
    array.map((item) => item[idTemplate])
  )
};