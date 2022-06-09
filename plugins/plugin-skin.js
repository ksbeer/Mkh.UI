import useCtx from './utils/context'
import loadPage from './load-page'
import loadAssets from './load-assets'

export default function (options) {
  const ctx = useCtx(options)
  return [loadPage(ctx), loadAssets(ctx)]
}