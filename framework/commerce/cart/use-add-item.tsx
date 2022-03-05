import { useHook, useMutationHook } from '../utils/use-hook'
import { mutationFetcher } from '../utils/default-fetcher'
import { HookFetcherFn, MutationHook } from '../utils/types'
import { AddItemHook } from '../types/cart'
import { Provider } from '..'

export type UseAddItem<
  H extends MutationHook<AddItemHook<any>> = MutationHook<AddItemHook>
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<AddItemHook> = mutationFetcher

const fn = (provider: Provider) => provider.cart?.useAddItem!

const useAddItem: UseAddItem = (...args) => {
  const hook = useHook(fn)
  return useMutationHook({ fetcher, ...hook })(...args)
}

export default useAddItem
