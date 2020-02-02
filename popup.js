document.addEventListener("load", Downloader);
chrome.tabs.getSelected(null, function(tab) {
    if (tab.status === 'complete'){
    var currentTitle= tab.title;
    var currentUrL=tab.url;
    Downloader(currentUrL,currentTitle);}
    else{
        document.getElementById("detail").innerHTML="Wait, the webpage is being loaded!";
    }
});

function get_index(URL){
    var supported_publishers=["ieeexplore.ieee.org","dl.acm.org"];
    var supported_publishers_semantak=["ieeexplore-ieee-org.ezp2.semantak.com", "dl-acm-org.ezp2.semantak.com"]
    var i;
    for(i=0;i<supported_publishers.length;i++){
        if((URL.search(supported_publishers[i])!=-1)&&(URL.search(supported_publishers_semantak[i])!=-1)){
        return 0;
    }
        else if(URL.search(supported_publishers[i])!=-1){
            return i+1;
        }
    }
    return -1;
}

function Downloader(currentUrL,currentTitle) {
    var publisher_id=get_index(currentUrL);
    switch(publisher_id){
        case 0:
        document.getElementById("detail").innerHTML="Duplicate request!";
        break;
        case -1:
            document.getElementById("detail").innerHTML="Publisher not supported!";
            break;
        
        case 1:
            var str= currentUrL;
            var n2= str.search("document");
            var str2 = str.slice(n2+9);
            var docId=str2.split("/");
            var dest = "ieeexplore.ieee.org.ezp2.semantak.com/stamp/stamp.jsp?tp=&arnumber="+docId[0];
            chrome.tabs.create({ url: "http://"+dest }, function(tab) {
                currentUrL=tab.url;
            }
        );
        break;
        
        
        case 2:
            var str= currentUrL;
            var n2= str.search("acm.org");
            var str2 = str.slice(n2+7,str.length);
            var dest = "dl-acm-org.ezp2.semantak.com"+str2;
            chrome.tabs.create({ url: "https://"+dest }, function(tab) {
                currentUrL=tab.url;
            }
        );
        break;
    }

}
