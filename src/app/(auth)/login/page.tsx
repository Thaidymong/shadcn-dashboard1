import { SearchParams } from "nuqs/server";
import { loginSearchParamsCache } from "./types";
import LoginScreen from "@/Screen/(Auth)/Login/page";

type LoginPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function LoginPage(props: LoginPageProps) {
  const searchParams = await props.searchParams;
  const { error } = loginSearchParamsCache.parse(searchParams);

  return <LoginScreen />;
}
