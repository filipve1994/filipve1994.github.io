import{x,y as D,A as k,a as L,d as $}from"./layout-10a68736-a6022fe6.js";import{K,w as j,P as A,G as _,e as z,r as C,i as M,s as Q,t as W,a as Z,R as O,v as N}from"./edges-a2733861-38a0aeac.js";import{e as n,_ as X,t as S,n as B}from"./mermaid.esm.min-e4120608.js";var q=4;function H(t){return $(t,q)}function v(t){var e={options:{directed:t.isDirected(),multigraph:t.isMultigraph(),compound:t.isCompound()},nodes:U(t),edges:V(t)};return x(t.graph())||(e.value=H(t.graph())),e}function U(t){return D(t.nodes(),function(e){var r=t.node(e),d=t.parent(e),i={v:e};return x(r)||(i.value=r),x(d)||(i.parent=d),i})}function V(t){return D(t.edges(),function(e){var r=t.edge(e),d={v:e.v,w:e.w};return x(e.name)||(d.name=e.name),x(r)||(d.value=r),d})}let c={},p={},J={};const Y=()=>{p={},J={},c={}},b=(t,e)=>(n.trace("In isDecendant",e," ",t," = ",p[e].includes(t)),!!p[e].includes(t)),ee=(t,e)=>(n.info("Decendants of ",e," is ",p[e]),n.info("Edge is ",t),t.v===e||t.w===e?!1:p[e]?p[e].includes(t.v)||b(t.v,e)||b(t.w,e)||p[e].includes(t.w):(n.debug("Tilt, ",e,",not in decendants"),!1)),T=(t,e,r,d)=>{n.warn("Copying children of ",t,"root",d,"data",e.node(t),d);const i=e.children(t)||[];t!==d&&i.push(t),n.warn("Copying (nodes) clusterId",t,"nodes",i),i.forEach(o=>{if(e.children(o).length>0)T(o,e,r,d);else{const h=e.node(o);n.info("cp ",o," to ",d," with parent ",t),r.setNode(o,h),d!==e.parent(o)&&(n.warn("Setting parent",o,e.parent(o)),r.setParent(o,e.parent(o))),t!==d&&o!==t?(n.debug("Setting parent",o,t),r.setParent(o,t)):(n.info("In copy ",t,"root",d,"data",e.node(t),d),n.debug("Not Setting parent for node=",o,"cluster!==rootId",t!==d,"node!==clusterId",o!==t));const l=e.edges(o);n.debug("Copying Edges",l),l.forEach(g=>{n.info("Edge",g);const f=e.edge(g.v,g.w,g.name);n.info("Edge data",f,d);try{ee(g,d)?(n.info("Copying as ",g.v,g.w,f,g.name),r.setEdge(g.v,g.w,f,g.name),n.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):n.info("Skipping copy of edge ",g.v,"-->",g.w," rootId: ",d," clusterId:",t)}catch(u){n.error(u)}})}n.debug("Removing node",o),e.removeNode(o)})},R=(t,e)=>{const r=e.children(t);let d=[...r];for(const i of r)J[i]=t,d=[...d,...R(i,e)];return d},y=(t,e)=>{n.trace("Searching",t);const r=e.children(t);if(n.trace("Searching children of id ",t,r),r.length<1)return n.trace("This is a valid node",t),t;for(const d of r){const i=y(d,e);if(i)return n.trace("Found replacement for",t," => ",i),i}},m=t=>!c[t]||!c[t].externalConnections?t:c[t]?c[t].id:t,te=(t,e)=>{if(!t||e>10){n.debug("Opting out, no graph ");return}else n.debug("Opting in, graph ");t.nodes().forEach(function(r){t.children(r).length>0&&(n.warn("Cluster identified",r," Replacement id in edges: ",y(r,t)),p[r]=R(r,t),c[r]={id:y(r,t),clusterData:t.node(r)})}),t.nodes().forEach(function(r){const d=t.children(r),i=t.edges();d.length>0?(n.debug("Cluster identified",r,p),i.forEach(o=>{if(o.v!==r&&o.w!==r){const h=b(o.v,r),l=b(o.w,r);h^l&&(n.warn("Edge: ",o," leaves cluster ",r),n.warn("Decendants of XXX ",r,": ",p[r]),c[r].externalConnections=!0)}})):n.debug("Not a cluster ",r,p)}),t.edges().forEach(function(r){const d=t.edge(r);n.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(r)),n.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(t.edge(r)));let i=r.v,o=r.w;if(n.warn("Fix XXX",c,"ids:",r.v,r.w,"Translating: ",c[r.v]," --- ",c[r.w]),c[r.v]&&c[r.w]&&c[r.v]===c[r.w]){n.warn("Fixing and trixing link to self - removing XXX",r.v,r.w,r.name),n.warn("Fixing and trixing - removing XXX",r.v,r.w,r.name),i=m(r.v),o=m(r.w),t.removeEdge(r.v,r.w,r.name);const h=r.w+"---"+r.v;t.setNode(h,{domId:h,id:h,labelStyle:"",labelText:d.label,padding:0,shape:"labelRect",style:""});const l=JSON.parse(JSON.stringify(d)),g=JSON.parse(JSON.stringify(d));l.label="",l.arrowTypeEnd="none",g.label="",l.fromCluster=r.v,g.toCluster=r.v,t.setEdge(i,h,l,r.name+"-cyclic-special"),t.setEdge(h,o,g,r.name+"-cyclic-special")}else(c[r.v]||c[r.w])&&(n.warn("Fixing and trixing - removing XXX",r.v,r.w,r.name),i=m(r.v),o=m(r.w),t.removeEdge(r.v,r.w,r.name),i!==r.v&&(d.fromCluster=r.v),o!==r.w&&(d.toCluster=r.w),n.warn("Fix Replacing with XXX",i,o,r.name),t.setEdge(i,o,d,r.name))}),n.warn("Adjusted Graph",v(t)),I(t,0),n.trace(c)},I=(t,e)=>{if(n.warn("extractor - ",e,v(t),t.children("D")),e>10){n.error("Bailing out");return}let r=t.nodes(),d=!1;for(const i of r){const o=t.children(i);d=d||o.length>0}if(!d){n.debug("Done, no node has children",t.nodes());return}n.debug("Nodes = ",r,e);for(const i of r)if(n.debug("Extracting node",i,c,c[i]&&!c[i].externalConnections,!t.parent(i),t.node(i),t.children("D")," Depth ",e),!c[i])n.debug("Not a cluster",i,e);else if(!c[i].externalConnections&&t.children(i)&&t.children(i).length>0){n.warn("Cluster without external connections, without a parent and with children",i,e);let o=t.graph().rankdir==="TB"?"LR":"TB";c[i]&&c[i].clusterData&&c[i].clusterData.dir&&(o=c[i].clusterData.dir,n.warn("Fixing dir",c[i].clusterData.dir,o));const h=new k({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});n.warn("Old graph before copy",v(t)),T(i,t,h,i),t.setNode(i,{clusterNode:!0,id:i,clusterData:c[i].clusterData,labelText:c[i].labelText,graph:h}),n.warn("New graph after copy node: (",i,")",v(h)),n.debug("Old graph after copy",v(t))}else n.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c[i].externalConnections," no parent: ",!t.parent(i)," children ",t.children(i)&&t.children(i).length>0,t.children("D"),e),n.debug(c);r=t.nodes(),n.warn("New list of nodes",r);for(const i of r){const o=t.node(i);n.warn(" Now next level",i,o),o.clusterNode&&I(o.graph,e+1)}},G=(t,e)=>{if(e.length===0)return[];let r=Object.assign(e);return e.forEach(d=>{const i=t.children(d),o=G(t,i);r=[...r,...o]}),r},re=t=>G(t,t.children()),ne=(t,e)=>{n.trace("Creating subgraph rect for ",e.id,e);const r=t.insert("g").attr("class","cluster"+(e.class?" "+e.class:"")).attr("id",e.id),d=r.insert("rect",":first-child"),i=r.insert("g").attr("class","cluster-label"),o=i.node().appendChild(O(e.labelText,e.labelStyle,void 0,!0));let h=o.getBBox();if(X(S().flowchart.htmlLabels)){const s=o.children[0],a=B(o);h=s.getBoundingClientRect(),a.attr("width",h.width),a.attr("height",h.height)}const l=0*e.padding,g=l/2,f=e.width<=h.width+l?h.width+l:e.width;e.width<=h.width+l?e.diff=(h.width-e.width)/2-e.padding/2:e.diff=-e.padding/2,n.trace("Data ",e,JSON.stringify(e)),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-f/2).attr("y",e.y-e.height/2-g).attr("width",f).attr("height",e.height+l),i.attr("transform","translate("+(e.x-h.width/2)+", "+(e.y-e.height/2)+")");const u=d.node().getBBox();return e.width=u.width,e.height=u.height,e.intersect=function(s){return N(e,s)},r},ie=(t,e)=>{const r=t.insert("g").attr("class","note-cluster").attr("id",e.id),d=r.insert("rect",":first-child"),i=0*e.padding,o=i/2;d.attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2-o).attr("width",e.width+i).attr("height",e.height+i).attr("fill","none");const h=d.node().getBBox();return e.width=h.width,e.height=h.height,e.intersect=function(l){return N(e,l)},r},de=(t,e)=>{const r=t.insert("g").attr("class",e.classes).attr("id",e.id),d=r.insert("rect",":first-child"),i=r.insert("g").attr("class","cluster-label"),o=r.append("rect"),h=i.node().appendChild(O(e.labelText,e.labelStyle,void 0,!0));let l=h.getBBox();if(X(S().flowchart.htmlLabels)){const a=h.children[0],w=B(h);l=a.getBoundingClientRect(),w.attr("width",l.width),w.attr("height",l.height)}l=h.getBBox();const g=0*e.padding,f=g/2,u=e.width<=l.width+e.padding?l.width+e.padding:e.width;e.width<=l.width+e.padding?e.diff=(l.width+e.padding*0-e.width)/2:e.diff=-e.padding/2,d.attr("class","outer").attr("x",e.x-u/2-f).attr("y",e.y-e.height/2-f).attr("width",u+g).attr("height",e.height+g),o.attr("class","inner").attr("x",e.x-u/2-f).attr("y",e.y-e.height/2-f+l.height-1).attr("width",u+g).attr("height",e.height+g-l.height-3),i.attr("transform","translate("+(e.x-l.width/2)+", "+(e.y-e.height/2-e.padding/3+(X(S().flowchart.htmlLabels)?5:3))+")");const s=d.node().getBBox();return e.height=s.height,e.intersect=function(a){return N(e,a)},r},oe=(t,e)=>{const r=t.insert("g").attr("class",e.classes).attr("id",e.id),d=r.insert("rect",":first-child"),i=0*e.padding,o=i/2;d.attr("class","divider").attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2).attr("width",e.width+i).attr("height",e.height+i);const h=d.node().getBBox();return e.width=h.width,e.height=h.height,e.diff=-e.padding/2,e.intersect=function(l){return N(e,l)},r},se={rect:ne,roundedWithTitle:de,noteGroup:ie,divider:oe};let F={};const ae=(t,e)=>{n.trace("Inserting cluster");const r=e.shape||"rect";F[e.id]=se[r](t,e)},ce=()=>{F={}},P=(t,e,r,d)=>{n.info("Graph in recursive render: XXX",v(e),d);const i=e.graph().rankdir;n.trace("Dir in recursive render - dir:",i);const o=t.insert("g").attr("class","root");e.nodes()?n.info("Recursive render XXX",e.nodes()):n.info("No nodes found for",e),e.edges().length>0&&n.trace("Recursive edges",e.edge(e.edges()[0]));const h=o.insert("g").attr("class","clusters"),l=o.insert("g").attr("class","edgePaths"),g=o.insert("g").attr("class","edgeLabels"),f=o.insert("g").attr("class","nodes");e.nodes().forEach(function(s){const a=e.node(s);if(d!==void 0){const w=JSON.parse(JSON.stringify(d.clusterData));n.info("Setting data for cluster XXX (",s,") ",w,d),e.setNode(d.id,w),e.parent(s)||(n.trace("Setting parent",s,d.id),e.setParent(s,d.id,w))}if(n.info("(Insert) Node XXX"+s+": "+JSON.stringify(e.node(s))),a&&a.clusterNode){n.info("Cluster identified",s,a.width,e.node(s));const w=P(f,a.graph,r,e.node(s)),E=w.elem;j(a,E),a.diff=w.diff||0,n.info("Node bounds (abc123)",s,a,a.width,a.x,a.y),A(E,a),n.warn("Recursive render complete ",E,a)}else e.children(s).length>0?(n.info("Cluster - the non recursive path XXX",s,a.id,a,e),n.info(y(a.id,e)),c[a.id]={id:y(a.id,e),node:a}):(n.info("Node - the non recursive path",s,a.id,a),_(f,e.node(s),i))}),e.edges().forEach(function(s){const a=e.edge(s.v,s.w,s.name);n.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),n.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(e.edge(s))),n.info("Fix",c,"ids:",s.v,s.w,"Translateing: ",c[s.v],c[s.w]),z(g,a)}),e.edges().forEach(function(s){n.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s))}),n.info("#############################################"),n.info("###                Layout                 ###"),n.info("#############################################"),n.info(e),L(e),n.info("Graph after layout:",v(e));let u=0;return re(e).forEach(function(s){const a=e.node(s);n.info("Position "+s+": "+JSON.stringify(e.node(s))),n.info("Position "+s+": ("+a.x,","+a.y,") width: ",a.width," height: ",a.height),a&&a.clusterNode?C(a):e.children(s).length>0?(ae(h,a),c[a.id].node=a):C(a)}),e.edges().forEach(function(s){const a=e.edge(s);n.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(a),a);const w=M(l,s,a,c,r,e);Q(a,w)}),e.nodes().forEach(function(s){const a=e.node(s);n.info(s,a.type,a.diff),a.type==="group"&&(u=a.diff)}),{elem:o,diff:u}},fe=(t,e,r,d,i)=>{K(t,r,d,i),W(),Z(),ce(),Y(),n.warn("Graph at first:",v(e)),te(e),n.warn("Graph after:",v(e)),P(t,e,d)};export{fe as h};
