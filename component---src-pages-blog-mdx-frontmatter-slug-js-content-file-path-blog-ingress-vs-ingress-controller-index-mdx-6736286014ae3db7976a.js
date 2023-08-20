"use strict";(self.webpackChunkcloudqubes=self.webpackChunkcloudqubes||[]).push([[221],{624:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return m}});var r=n(1151),s=n(7294);function a(e){const t=Object.assign({p:"p",h1:"h1",code:"code",span:"span",em:"em",ul:"ul",li:"li",strong:"strong",h2:"h2",a:"a",img:"img",pre:"pre"},(0,r.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement("div",{class:"header-highlight"},s.createElement(t.p,null,"Kubernetes ingress and ingress controller are two frequently-used terms. When you are getting starting with Kubernetes, these terms may seem confusing. But, don't worry. Here's all you need to know.")),"\n",s.createElement(t.p,null,"An application running inside a Kubernetes cluster is not practically accessible directly from outside."),"\n",s.createElement(t.p,null,"Kubernetes ingress together with ingress controller implements a mechanism for exposing such applications to the outside world via HTTP or HTTPS protocols."),"\n",s.createElement(t.h1,null,"Ingress and Ingress Controller"),"\n",s.createElement(t.p,null,"Ingress is an API object stored in the ",s.createElement(t.code,null,"etcd")," data store in Kubernetes. Ingress defines traffic routing rules - how HTTP or HTTPS traffic must be routed to applications inside the cluster."),"\n",s.createElement(t.p,null,"But, ingress alone is not sufficient for routing traffic. You need an ingress controller too."),"\n",s.createElement(t.p,null,"The ingress controller is responsible for routing HTTP or HTTPS traffic according ot the rules defined in ingress."),"\n",s.createElement(t.p,null,"The rules typically use a Kubernetes Service as the backend for receiving traffic."),"\n",s.createElement(t.p,null,s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1023px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 44.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABo0lEQVR42k2SSXLcMAxF+7o5UA6QZU6QbdbZxq5OueK4LbUGDiAJSqLUSkk/IOW2s0ARgoj3MfC0bRuWZUGMESklrOuKWb6zn+N3S/OM+d0+4tm/W8497fsOIsKv8xnXusY0JUxBYwkdgncIIYA9YfFXTEwYh1HEGcyHZf/4DkXstAmQg8dqn8C2w5BuSOoZqfkJshaavJwGG/2GbS94qa7QlhCHoXTlOcJxPvkNuO1FoWsVjLGljaqqcH58REcMJbFaWbS9QqsMLk0HRQ7KcQFebYBxDi0FTEmAwIZWMz59dvj63WH/OyGIYowDemPAqpKRGFgvlXgP3dUYqRfgUZ2V6teoS9XDAdxhhP7lW4MfDxrrLck8YlHP1bGu4ZwFhQ9gFKD2XGJWxJJXMhqZb3preZR5sAQ5UNluhmXrRchLO1aSXWD4OIofyjJ0iYmozJgdCZDvwA0kSVobKKXfYVGSOuvx0vRo5fSy7UbmeP7ziqdLBe0OcJ7vpe3L3VxMAeYfLlciW83B2+1WNpYXlP3jvc1yhwQscGl9/u+d3u/kd/gPvESr6oY76p4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Ingress and Ingress Controller"\n        title=""\n        src="/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png"\n        srcset="/static/648b20cb1712e387818bd59c745eb3f4/5a46d/k8s-ingress-api-object.png 300w,\n/static/648b20cb1712e387818bd59c745eb3f4/0a47e/k8s-ingress-api-object.png 600w,\n/static/648b20cb1712e387818bd59c745eb3f4/8ea22/k8s-ingress-api-object.png 1023w"\n        sizes="(max-width: 1023px) 100vw, 1023px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(t.em,null,"Ingress and Ingress Controller")),"\n",s.createElement(t.p,null,"An ingress controller has two parts:"),"\n",s.createElement(t.ul,null,"\n",s.createElement(t.li,null,"\n",s.createElement(t.p,null,"A ",s.createElement(t.strong,null,"reverse proxy")," which is responsible for routing HTTP(S) traffic."),"\n"),"\n",s.createElement(t.li,null,"\n",s.createElement(t.p,null,"A ",s.createElement(t.strong,null,"controller")," watches the Kubernetes API for routing rule changes and configures the reverse proxy appropriately."),"\n"),"\n"),"\n",s.createElement(t.p,null,s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 890px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABb0lEQVR42oVSTU/CQBDt/z9x5AbeSKQqFz1wVmgPJJ40gsZg2lKK/Vro0na7z5mFGiUYJ3mZTLc7896bteq6RlWWBiWBaw1Aa22yorquKvO9oqyUOpydQdM0sPinNE2RJAkhhdwJIPfRZB5AkIVEGIZYrQKs12vT+K/4buh5HpbLpcE2F9DlHkpKEGWINMN4PMboZoSJ46LR+v+GzJARxzEkN/oRe6qNgjBA5r+gygJABNAyNeetVAbbYbWetKFPGOyJrSDW+WYDEYeoi4yYky2qPM+QPZnNZgbT6RQbushhlkPN8zzH3e0tru0r3D9MoJgJzaybw+A0y+C6LhzHIZ9XsHiztm1jMBig1+thsVgY2bwkIQR830e320Wn08HlcIhSbpF8PBnswle8Pz+i378g9DGfz2ExzVaqPmM4D4yiyDCPCA1ZhIokJ2/ANiSd9e9n05y+q6PBDK5lUeCTGmXHpalagdXyaM5m60fwnS8Y7K8N7WUL5wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Concept of an ingress controller"\n        title=""\n        src="/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png"\n        srcset="/static/4edb5a16b8db8da68c8664451ee2e5b6/5a46d/k8s-ingress-controller-how.png 300w,\n/static/4edb5a16b8db8da68c8664451ee2e5b6/0a47e/k8s-ingress-controller-how.png 600w,\n/static/4edb5a16b8db8da68c8664451ee2e5b6/4ef49/k8s-ingress-controller-how.png 890w"\n        sizes="(max-width: 890px) 100vw, 890px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(t.em,null,"Concept of an ingress controller")),"\n",s.createElement(t.h1,null,"Ingress controllers"),"\n",s.createElement(t.p,null,"There are several ingress controller implementations that you can choose from - open-source or commercial, managed or self-managed."),"\n",s.createElement(t.h2,null,"Open-source ingress controllers"),"\n",s.createElement(t.p,null,s.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress NGINX controller")," is an open-source ingress controller that is supported and maintained by the Kubernetes project. It uses NGINX as a reverse proxy and load balancer."),"\n",s.createElement(t.p,null,s.createElement(t.a,{href:"https://haproxy-ingress.github.io"},"HA Proxy ingress"),", ",s.createElement(t.a,{href:"https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/"},"Istio Ingress Gateway"),", and ",s.createElement(t.a,{href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/"},"Traefik Kubernetes ingress provider")," are other open-source ingress controllers."),"\n",s.createElement(t.h2,null,"Commercial ingress controllers"),"\n",s.createElement(t.p,null,s.createElement(t.a,{href:"https://www.nginx.com/products/nginx-ingress-controller/"},"NGINX Ingress Controller")," is a commercial ingress controller offered by NGINX. Don't get it confused with the open-source ",s.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress NGINX controller"),"."),"\n",s.createElement(t.h2,null,"Managed ingress controllers"),"\n",s.createElement(t.p,null,"Running Kubernetes on public cloud, you can take the advantage of the managed ingress controllers offered by the cloud providers."),"\n",s.createElement(t.p,null,s.createElement(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"AWS Load Balancer Controller"),", ",s.createElement(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/ingress"},"GKE Ingress from GCP"),", and ",s.createElement(t.a,{href:"https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=without-osm"},"Web application routing add-on from Azure")," are such managed ingress controllers."),"\n",s.createElement(t.p,null,"These managed ingress controllers are available as add-ons of the managed Kubernetes distributions offered by the cloud providers. Once you enable the add-on, the cloud provider takes care of provisioning all cloud resources such as load balancers required for routing traffic to your Kubernetes Workloads."),"\n",s.createElement(t.p,null,"You can also use other ingress controllers like ",s.createElement(t.a,{href:"https://github.com/kubernetes/ingress-nginx"},"Ingress Nginx controller")," on public clouds. Then, you are responsible for provisioning a load balancer to route traffic from exteranl world to the Ingress controller inside your Kubernetes cluster."),"\n",s.createElement(t.h1,null,"Ingress controller deployment architecture"),"\n",s.createElement(t.p,null,"An Ingress controller can be deployed inside or outside the Kubernetes cluster."),"\n",s.createElement(t.p,null,"Inside the cluster, an ingress controller is usually deployed as a Kubernetes DaemonSet. You can deploy an ingress controller as a Deployment too. But a DaemonSet will give you better rsiliency against node failures."),"\n",s.createElement(t.p,null,"When the ingress controller is inside the cluster, you need a load balancer to route traffic from external clients to the ingress controller."),"\n",s.createElement(t.p,null,s.createElement(t.img,{src:"./k8s-ingress-with-loadbalancer.png",alt:"Ingress controller inside the cluster"}),"\n",s.createElement(t.em,null,"Ingress controller inside the cluster")),"\n",s.createElement(t.p,null,"The load balancer adds an extra hop to the traffic path. You can avoid it by deploying an ingress controller outside the cluster. But, it requires the Pod IP addresses to be reachable to the ingress controller."),"\n",s.createElement(t.p,null,s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/dbf9a19f921f93708bce1d48b87ebf2a/29007/k8s-ingress-outside-the-cluster.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 40.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABS0lEQVR42l1S2Y6DMBDr///hvmzpcuS+SyFc3klQJdpIFhoxY3uc3NZ1xbHvOI4DWx6xbwuWZUHO+QPLKyFPL+RlrfU0z5i/UOZuSfZwfYNtyUC4IycFLjT6fgBjHEIIKCmwml+MukPbdpBUpxQRY0S6oAjdpteImZSLS/n3gzFaan7COweuHf64Rkvg/QNs6PBgGp00kMbBeQ9mAriNUC6QQyLciaic8nU+kvWMkUSeKVFThJYMWgkMymIgIs46EtMQ1lN/wEAbOC0gjMdaVn4TXk8isrKCoiHDHghGQpOYDQGGt/Cak5hHiAmG/o2OYjH2zPBKWC7mJHxWQklrWHLnnDndEqkzCpZQ6lB6iMhbVXs/Vv52GMmNtAHNINHTqpoGCkqmDZM1sxAiGqrvg6gRVMJt22p+V5TbKs9guuD9NM46f9WEaa4Z/gP9jmaSIg9XNQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Ingress controller outside the cluster"\n        title=""\n        src="/static/dbf9a19f921f93708bce1d48b87ebf2a/c1b63/k8s-ingress-outside-the-cluster.png"\n        srcset="/static/dbf9a19f921f93708bce1d48b87ebf2a/5a46d/k8s-ingress-outside-the-cluster.png 300w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/0a47e/k8s-ingress-outside-the-cluster.png 600w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/c1b63/k8s-ingress-outside-the-cluster.png 1200w,\n/static/dbf9a19f921f93708bce1d48b87ebf2a/29007/k8s-ingress-outside-the-cluster.png 1600w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(t.em,null,"Ingress controller outside the cluster")),"\n",s.createElement(t.p,null,"HAProxy Kubernetes ingress controller supports this ",s.createElement(t.a,{href:"https://www.haproxy.com/blog/run-the-haproxy-kubernetes-ingress-controller-outside-of-your-kubernetes-cluster"},"outside-the-cluster model via BGP peering with Pod IPs"),"."),"\n",s.createElement(t.p,null,s.createElement(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"AWS Load Balancer Controller")," also adopts the outside-the-cluster model. It reaches Pod IPs via ",s.createElement(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html"},"ENI"),"."),"\n",s.createElement(t.h1,null,"Usecases of Kubernetes ingress"),"\n",s.createElement(t.p,null,"Kubernetes Ingress supports exposing Workloads via HTTP or HTTTPS protocols only."),"\n",s.createElement(t.p,null,"For Workloads that need to be exposed via any other protocol, you must use NodePort or LoadBalancer services."),"\n",s.createElement(t.p,null,"NodePort and LoadBalancer Services support any TCP or UDP protocol including HTTP. But, for HTTP usecases ingress offers more features."),"\n",s.createElement(t.p,null,"Unlike the NodePort or LoadBalancer, ingress works in layer-7 of the OSI model. So, ingress supports SSL/TLS termination, URL/subdomain based traffic routing, etc."),"\n",s.createElement(t.p,null,"So, ingress must be your go-to method for exposing HTTP(S) Workloads in Kubernetes clusters."),"\n",s.createElement(t.h1,null,"The easiest ingress controller"),"\n",s.createElement(t.p,null,"If you want to get your hands dirty, ",s.createElement(t.a,{href:"https://microk8s.io/"},"MicroK8s")," from Canonical is the easiset to get started with ingress controller."),"\n",s.createElement(t.p,null,"Just enable these two add-ons in your MicroK8s cluster and you are good to go."),"\n",s.createElement(t.pre,null,s.createElement(t.code,{className:"language-yaml"},"microk8s enable ingress\nmicrok8s enable metallb\n")),"\n",s.createElement(t.h2,null,"Wrapping up"),"\n",s.createElement("div",{class:"inline-highlight"},s.createElement(t.p,null,"Ingress is an API object. Ingress controller is a software application that routes HTTP(s) traffic.")),"\n",s.createElement(t.p,null,"We have clarified the difference of ingress and ingress controller. Together ingress and ingress controller implements a mechanism for routing HTTP or HTTPS traffic from outside to Workloads inside the cluster."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?s.createElement(t,e,s.createElement(a,e)):a(e)},o=n(72),i=n(5595),c=n(8370);const u=e=>{let{data:t,children:n}=e;return s.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},s.createElement("div",{className:c.HV},s.createElement("article",{className:c.nC},s.createElement("div",null,s.createElement("span",{className:c.F4},t.mdx.frontmatter.date," - "),s.createElement("span",{className:c.F4},t.mdx.fields.timeToRead.text)),s.createElement("h1",{className:c.TN},t.mdx.frontmatter.title),n)))},g=e=>{let{data:t}=e;return s.createElement(i.p,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description})};function m(e){return s.createElement(u,e,s.createElement(l,e))}},5595:function(e,t,n){n.d(t,{p:function(){return a}});var r=n(7294),s=n(1883);const a=e=>{let{title:t,description:n,pathname:a,children:l}=e;const{title:o,description:i,image:c,siteUrl:u,twitterUsername:g}=(0,s.useStaticQuery)("1865044719").site.siteMetadata,m={title:t||o,description:n||i,image:""+u+c,url:""+u+(a||""),twitterUsername:g};return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"image",content:m.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:m.title}),r.createElement("meta",{name:"twitter:url",content:m.url}),r.createElement("meta",{name:"twitter:description",content:m.description}),r.createElement("meta",{name:"twitter:image",content:m.image}),r.createElement("meta",{name:"twitter:creator",content:m.twitterUsername}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),l)}},8370:function(e,t,n){n.d(t,{F4:function(){return a},HV:function(){return s},TN:function(){return l},nC:function(){return r}});var r="article-module--container--2d8cc",s="article-module--outerContainer--119e3",a="article-module--post-meta--34964",l="article-module--title--f5d32"},1151:function(e,t,n){n.d(t,{ah:function(){return a}});var r=n(7294);const s=r.createContext({});function a(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-ingress-vs-ingress-controller-index-mdx-6736286014ae3db7976a.js.map