import { useCallback } from 'preact/hooks'
import { useRouter } from 'next/router'

const useRefresh = () => {
  const router = useRouter()

  const refresh = useCallback(() => {
    router.replace(router.asPath)
  }, [])

  return refresh
}

export { useRefresh }
