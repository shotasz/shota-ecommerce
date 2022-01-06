import { ApiFetcher, ApiFetcherOptions } from "./api";

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook;
    useCart: any;
  };
}

export type MutationHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>;
};

export type HookFetcherContext<Input, Output> = {
  input: Input;
  fetch: ApiFetcher<Output>;
  options: ApiFetcherOptions;
};

export type HookFetcherOptions = {
  query: string;
};

export type HookFetcherFn<Input, Output> = (
  context: HookFetcherContext<Input, Output>
) => Promise<Output>;

export type HookDescriptor = {
  fetcherInput: any;
  data: any;
};

export type MutationHook<H extends HookDescriptor = any> = {
  fetcherOptions: ApiFetcherOptions;
  fetcher: HookFetcherFn<H["fetcherInput"], H["data"]>;
  useHook(
    context: MutationHookContext<H["fetcherInput"], H["data"]>
  ): (input: H["fetcherInput"]) => Promise<H["data"]>;
};
