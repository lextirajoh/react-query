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

  if (isError) {
    return <h1>There was an error.</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button onClick={() => refetch()}>Update Data</button>
      <h1>{catData?.fact}</h1>
    </>
  );
}
