__NUXT_JSONP__("/installation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{document:{slug:"installation",description:"Make your computer work for the masternetwork in a few steps.",title:"Installation (Docker)",category:"Getting started",position:o,toc:[{id:C,depth:o,text:D},{id:E,depth:o,text:F},{id:t,depth:o,text:t},{id:G,depth:o,text:H}],body:{type:"root",children:[{type:b,tag:u,props:{id:C},children:[{type:b,tag:p,props:{ariaHidden:v,href:"#install-docker",tabIndex:w},children:[{type:b,tag:d,props:{className:[x,y]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Running a python script can be dangerous if you don't know what it contains. To prevent malicious behaviour, please install docker, this will dockerized the script that will be executed, so it's really not dangerous to execute them for your computer."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Click on this "},{type:b,tag:p,props:{href:"https:\u002F\u002Fwww.docker.com\u002Fget-started"},children:[{type:a,value:"link"}]},{type:a,value:" in order to install docker and follow the steps.\r\n"},{type:b,tag:"img",props:{src:"\u002Fdocker.webp",style:"border-radius: 5px 2px;"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Once it's done, you need to install a few files and run it."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Open a terminal and run the command"}]},{type:a,value:q},{type:b,tag:g,props:{active:h},children:[{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{className:[e,"function"]},children:[{type:a,value:"git"}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002FParmicciano\u002FClient-masternetwork.git\n"}]}]}]},{type:a,value:q}]},{type:a,value:"\nNow, go to the folder downloaded\n  "},{type:b,tag:g,props:{active:h},children:[{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:I}]},{type:a,value:" Client-masternetwork\n"}]}]}]},{type:a,value:q}]},{type:a,value:"\n    "},{type:b,tag:g,props:{active:h},children:[{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:I}]},{type:a,value:" client-repo-docker\n"}]}]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:u,props:{id:E},children:[{type:b,tag:p,props:{ariaHidden:v,href:"#update-env-file",tabIndex:w},children:[{type:b,tag:d,props:{className:[x,y]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Update .env file\r\nNow modify the .env file which look like this\r\n"},{type:b,tag:g,props:{active:h},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"BASEURL "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,J]},children:[{type:a,value:"\"https:\u002F\u002Fapi.masternetwork.dev\""}]},{type:a,value:"\nAPI_KEY_WORKER "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,J]},children:[{type:a,value:"\"p6bA_1F5LePA0JU2XFmE24-dU-88A_EcQ-7PPGoEJL7FadHRKbvbSstN7x97kKh4y3UdxlLpjVbPbY1_rZxtVQykiO6WnL8U\""}]},{type:a,value:"\nPRICE "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"0.00001"}]},{type:a,value:c}]}]}]},{type:a,value:"\n\n"},{type:b,tag:f,props:{},children:[{type:a,value:"You don't need to change BASEURL, it's rooting to our servers.\r\nChange api key by replacing with your own (go to masternetwork.com and found your api key in the profile section)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For the variable price, it's special :"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\r\nThe masternetwork works with an auction system, the variable price match with the minimum price that your computer will work per script per second.\r\nDon't be too optimistic because if there is no script that pay more than your bid, your computer won't execute anything and you won't get paid, not even a penny.\r\n"},{type:b,tag:"alert",props:{},children:[{type:a,value:"\r\nWe are still in Alpha version\r\n"}]}]},{type:a,value:c},{type:b,tag:u,props:{id:t},children:[{type:b,tag:p,props:{ariaHidden:v,href:"#run",tabIndex:w},children:[{type:b,tag:d,props:{className:[x,y]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Run the command to build the container :\r\n"},{type:b,tag:g,props:{active:h},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"docker build --tag client "},{type:b,tag:d,props:{className:[e,z,A]},children:[{type:a,value:"."}]},{type:a,value:c}]}]}]},{type:a,value:"\n  \nRun the container \n  "},{type:b,tag:g,props:{active:h},children:[{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"docker run --name"},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:s}]},{type:a,value:"client -e "},{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:a,value:"PYTHONUNBUFFERED"}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:s}]},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"1"}]},{type:a,value:" -d client\n"}]}]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:u,props:{id:G},children:[{type:b,tag:p,props:{ariaHidden:v,href:"#lets-gooooooooo",tabIndex:w},children:[{type:b,tag:d,props:{className:[x,y]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Your container is now running, to pause it (if you need all your computer ressources), you can go to docker desktop and click pause.\r\nYou will get some xmr in exchange of running scripts."}]}]},dir:"\u002Fen",path:"\u002Fen\u002Finstallation",extension:".md",createdAt:"2022-01-09T08:48:12.000Z",updatedAt:"2022-02-21T22:43:51.650Z",to:"\u002Finstallation"},prev:{title:"Retrieve your password \u002FHacking\u002F",path:"\u002Fen\u002Fpassword",to:"\u002Fpassword"},next:{title:"Generate views on youtube ",path:"\u002Fen\u002Fyoutube-views",to:"\u002Fyoutube-views"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","code-block","","div","nuxt-content-highlight","pre","language-bash","line-numbers","code",2,"a","\n  ","operator","=","run","h2","true",-1,"icon","icon-link","builtin","class-name"," ","install-docker","Install Docker","update-env-file","Update .env file","lets-gooooooooo","Let's gooooooooo","cd","string","number")));