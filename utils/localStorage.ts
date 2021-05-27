import { Config } from '../constants/Config';

interface LocalStorageFormat<T> {
  expiry?: number
  data: T
}

const NAME_PREFIX = `t.com_`
const FULL_NAME_PREFIX = `${NAME_PREFIX}${process.env.buildId}_`

/**
 * returns false if we are in a development environment, unless the LOCALSTORAGE_ENABLED environment
 * variable is set to "true" (.env works for this)
 */
export const isLocalStorageEnabled = () => {
  return process.env.buildId !== "development" || process.env.LOCALSTORAGE_ENABLED === "true"
}

export const getLocalStorage = <T>({name, defaultValue}:{name: string, defaultValue?: T}):T|undefined => {
  if(isLocalStorageEnabled()) {
    try {
      if (typeof window !== "undefined") {
        const v = localStorage.getItem(`${FULL_NAME_PREFIX}${name}`)
        if (v) {
          const item = JSON.parse(v) as LocalStorageFormat<T>
          if (typeof item.expiry !== "undefined" && new Date().getTime() > item.expiry) {
            localStorage.removeItem(`${FULL_NAME_PREFIX}${name}`)
          } else {
            return item.data
          }
        }

        deleteOldBuildsFromLocalStorage()
      }
    } catch {}
  }

  return defaultValue
}

export const setLocalStorage = <T>({value, name, ttl = Config.localStorageTTL}:{value: T, name: string, ttl?: number}) => {
  if(isLocalStorageEnabled()) {
    try {
      if (typeof window !== "undefined") {
        const item:LocalStorageFormat<T> = {
          data: value
        }
        if(typeof ttl !== "undefined") {
          item.expiry = new Date().getTime() + ttl
        }
        localStorage.setItem(`${FULL_NAME_PREFIX}${name}`, JSON.stringify(item))

        deleteOldBuildsFromLocalStorage()
      }
    } catch {}
  }
}

const deleteOldBuildsFromLocalStorage = () => {
  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if(key && key.match(new RegExp(`${NAME_PREFIX}`)) !== null && key.match(new RegExp(`${FULL_NAME_PREFIX}`)) === null) {
      localStorage.removeItem(key)
    }
  }
}
