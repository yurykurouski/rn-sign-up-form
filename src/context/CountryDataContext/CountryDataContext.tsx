import { getCountrySnapshot } from 'api';
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { InteractionManager } from 'react-native';
import { TCountry } from 'types';

type TCountryDataContext = {
  userCountry: TCountry | null;
  setUserCountry: Dispatch<SetStateAction<TCountry | null>>;
  countries: TCountry[];
};

export const CountryDataContext = createContext<TCountryDataContext | null>(
  null,
);

export const CountryDataContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userCountry, setUserCountry] = useState<TCountry | null>(null);
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCountrySnapshot();

      InteractionManager.runAfterInteractions(() => {
        setUserCountry(data.country);
        setCountries(data.countries);
      });
    };

    fetchData();
  }, []);

  return (
    <CountryDataContext.Provider
      value={{ userCountry, setUserCountry, countries }}>
      {children}
    </CountryDataContext.Provider>
  );
};
