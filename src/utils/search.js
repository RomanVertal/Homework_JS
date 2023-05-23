export const searchToObject = (searchString) => {
    const separatedString = searchString.substring(1);
    const params = searchString.split('&');
    const searchObj = {};
    params.forEach(element => {
        const [key, value] = element.split('=');
        searchObj[key] = value
        
    });

    return searchObj

  


}

const updateSearchParams = (params) => {
    const url = new URL(window.location);
    if(params.filter){
        url.searchParams.set('filter', params.filter)
    }
    if(params.search){
        url.searchParams.set('search', params.search)
    }
    if(params.sortBy){
        url.searchParams.set('sortBy', params.sortBy)
    }
    if(params.sortOrder){
        url.searchParams.set('sortOrder', params.sortOrder)
    }
    
    window.history.pushState(null, '', url.toString())
}