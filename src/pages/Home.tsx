import { useQuery } from '@tanstack/react-query';
import { default as Axios } from 'axios';

export function Home() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(['cat'], () => {
    return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
  });

  return (
    <>
      <button onClick={() => refetch()}>Update Data</button>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>There was an error.</h1>}
      <h1>{catData?.fact}</h1>
    </>
  );
}
