import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { Production } from '../classes/Production';
import { Platform } from '../components/FilterableListPage'

export const getPlatformsFromProductions = (productions:Production[]) => {
  let platforms = getLocalStorage<Platform[]>({name: "platforms"})
  if(typeof platforms === "undefined") {
    platforms = productions.reduce((platforms:Platform[], production:Production) => {
      if(production.platform) {
        let platform:Platform|undefined = platforms.find((p) => production.platform && p.label == production.platform.name)
        if(typeof platform == "undefined") {
          platform = {label: production.platform!.name, _count: 0}
          platforms.push(platform)
        } else {
          platform._count++
        }
      }
      return platforms
    }, [] as Platform[])
    .filter((p:Platform) => p._count > 10)
    .sort((p1:Platform, p2:Platform) => p1.label.localeCompare(p2.label, 'en', {sensitivity: 'base'}))
    // .sort((p1:Platform, p2:Platform) => p1._count - p2._count)
    setLocalStorage<Platform[]>({value: platforms, name: "platforms"})
  }
  return platforms
}
