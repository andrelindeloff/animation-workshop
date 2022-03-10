let routeMap: Record<string, any> = {}
export const routing = (newRouteMap: Record<string, any>) => {
    routeMap = newRouteMap
    handleRouteChange()
}

const handleRouteChange = () => {
    const path = window.location.pathname
    const handler = routeMap[path]
    if (handler) handler()
}

export const navigate = (path: string) => {
    window.history.pushState(undefined, "lol", path)
    handleRouteChange()
}

window.addEventListener("popstate", handleRouteChange)