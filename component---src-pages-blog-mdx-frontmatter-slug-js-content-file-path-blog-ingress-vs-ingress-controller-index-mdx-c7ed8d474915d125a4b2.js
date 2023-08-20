"use strict";(self.webpackChunkcloudqubes=self.webpackChunkcloudqubes||[]).push([[221],{624:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(1151),r=n(7294);function s(e){const t=Object.assign({p:"p",h1:"h1",code:"code",span:"span",em:"em",ul:"ul",li:"li",strong:"strong",h2:"h2",a:"a",img:"img",pre:"pre"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement("div",{class:"header-highlight"},r.createElement(t.p,null,"Kubernetes ingress and ingress controller are two frequently-used terms. When you are getting starting with Kubernetes, these terms may seem confusing. But, don't worry. Here's all you need to know.")),"\n",r.createElement(t.p,null,"An application running inside a Kubernetes cluster is not practically accessible directly from outside."),"\n",r.createElement(t.p,null,"Kubernetes ingress together with ingress controller implements a mechanism for exposing such applications to the outside world via HTTP or HTTPS protocols."),"\n",r.createElement(t.h1,null,"Ingress and Ingress Controller"),"\n",r.createElement(t.p,null,"Ingress is an API object stored in the ",r.createElement(t.code,null,"etcd")," data store in Kubernetes. Ingress defines traffic routing rules - how HTTP or HTTPS traffic must be routed to applications inside the cluster."),"\n",r.createElement(t.p,null,"But, ingress alone is not sufficient for routing traffic. You need an ingress controller too."),"\n",r.createElement(t.p,null,"The ingress controller is responsible for routing HTTP or HTTPS traffic according ot the rules defined in ingress."),"\n",r.createElement(t.p,null,"The rules typically use a Kubernetes Service as the backend for receiving traffic."),"\n",r.createElement(t.p,null,r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1023px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 44.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABo0lEQVR42k2SSXLcMAxF+7o5UA6QZU6QbdbZxq5OueK4LbUGDiAJSqLUSkk/IOW2s0ARgoj3MfC0bRuWZUGMESklrOuKWb6zn+N3S/OM+d0+4tm/W8497fsOIsKv8xnXusY0JUxBYwkdgncIIYA9YfFXTEwYh1HEGcyHZf/4DkXstAmQg8dqn8C2w5BuSOoZqfkJshaavJwGG/2GbS94qa7QlhCHoXTlOcJxPvkNuO1FoWsVjLGljaqqcH58REcMJbFaWbS9QqsMLk0HRQ7KcQFebYBxDi0FTEmAwIZWMz59dvj63WH/OyGIYowDemPAqpKRGFgvlXgP3dUYqRfgUZ2V6teoS9XDAdxhhP7lW4MfDxrrLck8YlHP1bGu4ZwFhQ9gFKD2XGJWxJJXMhqZb3preZR5sAQ5UNluhmXrRchLO1aSXWD4OIofyjJ0iYmozJgdCZDvwA0kSVobKKXfYVGSOuvx0vRo5fSy7UbmeP7ziqdLBe0OcJ7vpe3L3VxMAeYfLlciW83B2+1WNpYXlP3jvc1yhwQscGl9/u+d3u/kd/gPvESr6oY76p4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Ingress and Ingress Controller"\n        title=""\n        src="/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png"\n        srcset="/static/648b20cb1712e387818bd59c745eb3f4/5a46d/k8s-ingress-api-object.png 300w,\n/static/648b20cb1712e387818bd59c745eb3f4/0a47e/k8s-ingress-api-object.png 600w,\n/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png 1023w"\n        sizes="(max-width: 1023px) 100vw, 1023px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement(t.em,null,"Ingress and Ingress Controller")),"\n",r.createElement(t.p,null,"An ingress controller has two parts:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"A ",r.createElement(t.strong,null,"reverse proxy")," which is responsible for routing HTTP(S) traffic."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"A ",r.createElement(t.strong,null,"controller")," watches the Kubernetes API for routing rule changes and configures the reverse proxy appropriately."),"\n"),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 890px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABb0lEQVR42oVSTU/CQBDt/z9x5AbeSKQqFz1wVmgPJJ40gsZg2lKK/Vro0na7z5mFGiUYJ3mZTLc7896bteq6RlWWBiWBaw1Aa22yorquKvO9oqyUOpydQdM0sPinNE2RJAkhhdwJIPfRZB5AkIVEGIZYrQKs12vT+K/4buh5HpbLpcE2F9DlHkpKEGWINMN4PMboZoSJ46LR+v+GzJARxzEkN/oRe6qNgjBA5r+gygJABNAyNeetVAbbYbWetKFPGOyJrSDW+WYDEYeoi4yYky2qPM+QPZnNZgbT6RQbushhlkPN8zzH3e0tru0r3D9MoJgJzaybw+A0y+C6LhzHIZ9XsHiztm1jMBig1+thsVgY2bwkIQR830e320Wn08HlcIhSbpF8PBnswle8Pz+i378g9DGfz2ExzVaqPmM4D4yiyDCPCA1ZhIokJ2/ANiSd9e9n05y+q6PBDK5lUeCTGmXHpalagdXyaM5m60fwnS8Y7K8N7WUL5wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Concept of an ingress controller"\n        title=""\n        src="/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png"\n        srcset="/static/4edb5a16b8db8da68c8664451ee2e5b6/5a46d/k8s-ingress-controller-how.png 300w,\n/static/4edb5a16b8db8da68c8664451ee2e5b6/0a47e/k8s-ingress-controller-how.png 600w,\n/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png 890w"\n        sizes="(max-width: 890px) 100vw, 890px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement(t.em,null,"Concept of an ingress controller")),"\n",r.createElement(t.h1,null,"Ingress controllers"),"\n",r.createElement(t.p,null,"There are several ingress controller implementations that you can choose from - open-source or commercial, managed or self-managed."),"\n",r.createElement(t.h2,null,"Open-source ingress controllers"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress NGINX controller")," is an open-source ingress controller that is supported and maintained by the Kubernetes project. It uses NGINX as a reverse proxy and load balancer."),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://haproxy-ingress.github.io"},"HA Proxy ingress"),", ",r.createElement(t.a,{href:"https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/"},"Istio Ingress Gateway"),", and ",r.createElement(t.a,{href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/"},"Traefik Kubernetes ingress provider")," are other open-source ingress controllers."),"\n",r.createElement(t.h2,null,"Commercial ingress controllers"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://www.nginx.com/products/nginx-ingress-controller/"},"NGINX Ingress Controller")," is a commercial ingress controller offered by NGINX. Don't get it confused with the open-source ",r.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress NGINX controller"),"."),"\n",r.createElement(t.h2,null,"Managed ingress controllers"),"\n",r.createElement(t.p,null,"Running Kubernetes on public cloud, you can take the advantage of the managed ingress controllers offered by the cloud providers."),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"AWS Load Balancer Controller"),", ",r.createElement(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/ingress"},"GKE Ingress from GCP"),", and ",r.createElement(t.a,{href:"https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=without-osm"},"Web application routing add-on from Azure")," are such managed ingress controllers."),"\n",r.createElement(t.p,null,"These managed ingress controllers are available as add-ons of the managed Kubernetes distributions offered by the cloud providers. Once you enable the add-on, the cloud provider takes care of provisioning all cloud resources such as load balancers required for routing traffic to your Kubernetes Workloads."),"\n",r.createElement(t.p,null,"You can also use other ingress controllers like ",r.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress Nginx controller")," on public clouds. Then, you are responsible for provisioning a load balancer to route traffic from exteranl world to the Ingress controller inside your Kubernetes cluster."),"\n",r.createElement(t.h1,null,"Ingress controller deployment architecture"),"\n",r.createElement(t.p,null,"An Ingress controller can be deployed inside or outside the Kubernetes cluster."),"\n",r.createElement(t.p,null,"Inside the cluster, an ingress controller is usually deployed as a Kubernetes DaemonSet. You can deploy an ingress controller as a Deployment too. But a DaemonSet will give you better rsiliency against node failures."),"\n",r.createElement(t.p,null,"When the ingress controller is inside the cluster, you need a load balancer to route traffic from external clients to the ingress controller."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"./k8s-ingress-with-loadbalancer.png",alt:"Ingress controller inside the cluster"}),"\n",r.createElement(t.em,null,"Ingress controller inside the cluster")),"\n",r.createElement(t.p,null,"The load balancer adds an extra hop to the traffic path. You can avoid it by deploying an ingress controller outside the cluster. But, it requires the Pod IP addresses to be reachable to the ingress controller."),"\n",r.createElement(t.p,null,r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/dbf9a19f921f93708bce1d48b87ebf2a/29007/k8s-ingress-outside-the-cluster.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 40.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABS0lEQVR42l1S2Y6DMBDr///hvmzpcuS+SyFc3klQJdpIFhoxY3uc3NZ1xbHvOI4DWx6xbwuWZUHO+QPLKyFPL+RlrfU0z5i/UOZuSfZwfYNtyUC4IycFLjT6fgBjHEIIKCmwml+MukPbdpBUpxQRY0S6oAjdpteImZSLS/n3gzFaan7COweuHf64Rkvg/QNs6PBgGp00kMbBeQ9mAriNUC6QQyLciaic8nU+kvWMkUSeKVFThJYMWgkMymIgIs46EtMQ1lN/wEAbOC0gjMdaVn4TXk8isrKCoiHDHghGQpOYDQGGt/Cak5hHiAmG/o2OYjH2zPBKWC7mJHxWQklrWHLnnDndEqkzCpZQ6lB6iMhbVXs/Vv52GMmNtAHNINHTqpoGCkqmDZM1sxAiGqrvg6gRVMJt22p+V5TbKs9guuD9NM46f9WEaa4Z/gP9jmaSIg9XNQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Ingress controller outside the cluster"\n        title=""\n        src="/static/dbf9a19f921f93708bce1d48b87ebf2a/c1b63/k8s-ingress-outside-the-cluster.png"\n        srcset="/static/dbf9a19f921f93708bce1d48b87ebf2a/5a46d/k8s-ingress-outside-the-cluster.png 300w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/0a47e/k8s-ingress-outside-the-cluster.png 600w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/c1b63/k8s-ingress-outside-the-cluster.png 1200w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/29007/k8s-ingress-outside-the-cluster.png 1600w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement(t.em,null,"Ingress controller outside the cluster")),"\n",r.createElement(t.p,null,"HAProxy Kubernetes ingress controller supports this ",r.createElement(t.a,{href:"https://www.haproxy.com/blog/run-the-haproxy-kubernetes-ingress-controller-outside-of-your-kubernetes-cluster"},"outside-the-cluster model via BGP peering with Pod IPs"),"."),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"AWS Load Balancer Controller")," also adopts the outside-the-cluster model. It reaches Pod IPs via ",r.createElement(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html"},"ENI"),"."),"\n",r.createElement(t.h1,null,"Usecases of Kubernetes ingress"),"\n",r.createElement(t.p,null,"Kubernetes Ingress supports exposing Workloads via HTTP or HTTTPS protocols only."),"\n",r.createElement(t.p,null,"For Workloads that need to be exposed via any other protocol, you must use NodePort or LoadBalancer services."),"\n",r.createElement(t.p,null,"NodePort and LoadBalancer Services support any TCP or UDP protocol including HTTP. But, for HTTP usecases ingress offers more features."),"\n",r.createElement(t.p,null,"Unlike the NodePort or LoadBalancer, ingress works in layer-7 of the OSI model. So, ingress supports SSL/TLS termination, URL/subdomain based traffic routing, etc."),"\n",r.createElement(t.p,null,"So, ingress must be your go-to method for exposing HTTP(S) Workloads in Kubernetes clusters."),"\n",r.createElement(t.h1,null,"The easiest ingress controller"),"\n",r.createElement(t.p,null,"If you want to get your hands dirty, ",r.createElement(t.a,{href:"https://microk8s.io/"},"MicroK8s")," from Canonical is the easiset to get started with ingress controller."),"\n",r.createElement(t.p,null,"Just enable these two add-ons in your MicroK8s cluster and you are good to go."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-yaml"},"microk8s enable ingress\nmicrok8s enable metallb\n")),"\n",r.createElement(t.h2,null,"Wrapping up"),"\n",r.createElement("div",{class:"inline-highlight"},r.createElement(t.p,null,"Ingress is an API object. Ingress controller is a software application that routes HTTP(s) traffic.")),"\n",r.createElement(t.p,null,"We have clarified the difference of ingress and ingress controller. Together ingress and ingress controller implements a mechanism for routing HTTP or HTTPS traffic from outside to Workloads inside the cluster."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)},o=n(72),c=n(5595),i=n(8370);const d=e=>{let{data:t,children:n}=e;return r.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},r.createElement("div",{className:i.HV},r.createElement("article",{className:i.nC},r.createElement("div",null,r.createElement("span",{className:i.F4},t.mdx.frontmatter.date," - "),r.createElement("span",{className:i.F4},t.mdx.fields.timeToRead.text)),r.createElement("h1",{className:i.TN},t.mdx.frontmatter.title),n)))},m=e=>{let{data:t}=e;return r.createElement(c.p,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description})};function u(e){return r.createElement(d,e,r.createElement(l,e))}},72:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(1883),s=n(8032),l="layout-module--footerCard--8fc61",o="layout-module--inner-container--df4cb",c="layout-module--nav-item--3670c",i="layout-module--socialMediaLink--69be6",d="layout-module--socialMediaLogo--1fd87";var m=e=>{let{pageTitle:t,children:m}=e;return a.createElement("div",null,a.createElement("header",{className:"layout-module--main-header--0975f"},a.createElement("div",{className:o},a.createElement("div",{className:"layout-module--logo-container--6ca7c"},a.createElement(r.Link,{to:"/"},a.createElement(s.S,{alt:"cloudqubes logo",src:"../images/logo_v1.png",className:"layout-module--logo--ff776",__imageData:n(1218)})),a.createElement(r.Link,{to:"/"},a.createElement("h1",{className:"layout-module--logo-text--e7423"},"cloudqubes"))),a.createElement("nav",{className:"layout-module--nav-container--96fe9"},a.createElement("ul",{className:"layout-module--nav-item-list--aaad3"},a.createElement("li",{className:c},a.createElement(r.Link,{to:"/about"},"About")),a.createElement("li",{className:c},a.createElement(r.Link,{to:"/blog"},"Blog")),a.createElement("li",{className:c},a.createElement(r.Link,{to:"/contact"},"Contact")),a.createElement("li",{className:c},a.createElement(r.Link,{to:"https://cloudqubes.substack.com/"},"Newsletter")))))),a.createElement("main",null,m),a.createElement("footer",{className:"layout-module--footer--ad7d0"},a.createElement("div",{className:o},a.createElement("div",{className:l},a.createElement("div",{className:"layout-module--footerLogoContainer--67598"},a.createElement(r.Link,{to:"/"},a.createElement(s.S,{alt:"cloudqubes logo",src:"../images/logo_v1.png",className:"layout-module--footerLogo--cd38c",__imageData:n(1218)})),a.createElement(r.Link,{to:"/"},a.createElement("h1",{className:"layout-module--footerLogoText--58444"},"cloudqubes"))),a.createElement("div",null,a.createElement(r.Link,{to:"/about",className:"layout-module--footerAbout--6e9dd"},"About"))),a.createElement("div",{className:l},a.createElement("div",{className:"layout-module--socialMediaIcons--19ec3"},a.createElement(r.Link,{to:"https://github.com/cloudqubes",className:i},a.createElement(s.S,{alt:"cloudqubes logo",src:"../images/github-mark.png",className:d,__imageData:n(1371)})),a.createElement(r.Link,{to:"https://twitter.com/cloudqubes",className:i},a.createElement(s.S,{alt:"cloudqubes logo",src:"../images/logo-black.png",className:d,__imageData:n(4917)})))))))}},5595:function(e,t,n){n.d(t,{p:function(){return s}});var a=n(7294),r=n(1883);const s=e=>{let{title:t,description:n,pathname:s,children:l}=e;const{title:o,description:c,image:i,siteUrl:d,twitterUsername:m}=(0,r.useStaticQuery)("1865044719").site.siteMetadata,u={title:t||o,description:n||c,image:""+d+i,url:""+d+(s||""),twitterUsername:m};return a.createElement(a.Fragment,null,a.createElement("title",null,u.title),a.createElement("meta",{name:"description",content:u.description}),a.createElement("meta",{name:"image",content:u.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:u.title}),a.createElement("meta",{name:"twitter:url",content:u.url}),a.createElement("meta",{name:"twitter:description",content:u.description}),a.createElement("meta",{name:"twitter:image",content:u.image}),a.createElement("meta",{name:"twitter:creator",content:u.twitterUsername}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),l)}},8370:function(e,t,n){n.d(t,{F4:function(){return s},HV:function(){return r},TN:function(){return l},nC:function(){return a}});var a="article-module--container--2d8cc",r="article-module--outerContainer--119e3",s="article-module--post-meta--34964",l="article-module--title--f5d32"},1151:function(e,t,n){n.d(t,{ah:function(){return s}});var a=n(7294);const r=a.createContext({});function s(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}},1371:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/43ce87609eb221d09d4832a9c0e709d0/87351/github-mark.png","srcSet":"/static/43ce87609eb221d09d4832a9c0e709d0/7ab40/github-mark.png 60w,\\n/static/43ce87609eb221d09d4832a9c0e709d0/a8b52/github-mark.png 120w,\\n/static/43ce87609eb221d09d4832a9c0e709d0/87351/github-mark.png 240w","sizes":"(min-width: 240px) 240px, 100vw"},"sources":[{"srcSet":"/static/43ce87609eb221d09d4832a9c0e709d0/927d1/github-mark.webp 60w,\\n/static/43ce87609eb221d09d4832a9c0e709d0/507b0/github-mark.webp 120w,\\n/static/43ce87609eb221d09d4832a9c0e709d0/8d565/github-mark.webp 240w","type":"image/webp","sizes":"(min-width: 240px) 240px, 100vw"}]},"width":240,"height":240}')},1218:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c7817e006b3b3fde36d3536130dbde94/d6138/logo_v1.png","srcSet":"/static/c7817e006b3b3fde36d3536130dbde94/15e42/logo_v1.png 100w,\\n/static/c7817e006b3b3fde36d3536130dbde94/5aead/logo_v1.png 200w,\\n/static/c7817e006b3b3fde36d3536130dbde94/d6138/logo_v1.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/c7817e006b3b3fde36d3536130dbde94/d8057/logo_v1.webp 100w,\\n/static/c7817e006b3b3fde36d3536130dbde94/2e34e/logo_v1.webp 200w,\\n/static/c7817e006b3b3fde36d3536130dbde94/416c3/logo_v1.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":400}')},4917:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c019bd434e5489eb40e386b60cf045c9/78e61/logo-black.png","srcSet":"/static/c019bd434e5489eb40e386b60cf045c9/7237d/logo-black.png 600w,\\n/static/c019bd434e5489eb40e386b60cf045c9/02c57/logo-black.png 1200w,\\n/static/c019bd434e5489eb40e386b60cf045c9/78e61/logo-black.png 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/c019bd434e5489eb40e386b60cf045c9/63168/logo-black.webp 600w,\\n/static/c019bd434e5489eb40e386b60cf045c9/13b13/logo-black.webp 1200w,\\n/static/c019bd434e5489eb40e386b60cf045c9/b4361/logo-black.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":2453}')}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-ingress-vs-ingress-controller-index-mdx-c7ed8d474915d125a4b2.js.map