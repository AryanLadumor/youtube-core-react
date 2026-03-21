create-react-app

report-web-vitals //todo
setup-tests //todo
react.stickmode //


concept behind Search ==> debouncing 
very fast type => diff between 2 key stroke is very less //: 30ms
very slow type => diff between 2 key stroke is very high //: 200ms
and is user typing fats then it does not mean to read suggestion

perfomance :
    typed 15 letter => 15 calls * 1000 users ==> 15000 api call
    typed 3 letter =>  4 calls * 1000 users ==> 4000 aoi call

why suggestion? cus it give better user experience 

Debouncing with 200ms --> test flipcart vs youtube ==> YT has very less
    if diff bet 2 keystroke is < 200ms  DEcline API call
    >200 make an api call

cacheing==> we no need for api call when user type again the same searchQuery 
            so we create cache for it 

so now our search bar is using live API , debouncing and cache   (try to remove after 100 results LRU cache)


buidling n level nested coments 