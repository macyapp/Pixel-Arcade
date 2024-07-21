import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
// import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24*60*60*1000, // 24 hours
    initialData: {count: genres.length, results: genres}
  });

export default useGenres;
