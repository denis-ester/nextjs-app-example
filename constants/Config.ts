interface IConfig {
  GOOGLE_CLIENT_ID: string;
  localStorageTTL: number;
}

const config:IConfig = {
  GOOGLE_CLIENT_ID: `ID`,
  localStorageTTL: 60 * 60 * 1000,
};

const getConfig = (): IConfig => {
  return config;
};

export const Config = getConfig();
