import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const loginSearchParams = {
  error: parseAsString.withDefault(""),
};

export const loginSearchParamsCache =
  createSearchParamsCache(loginSearchParams);
