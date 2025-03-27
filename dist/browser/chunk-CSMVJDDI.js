import{O as l}from"./chunk-IOA4DPXY.js";import{Ea as u,P as n,t as r,ya as a}from"./chunk-5LC5EQRR.js";var h=(()=>{class i{adminResourceUrl="api/core/admin";http=u(l);getBuildAgentSummary(){return this.http.get(`${this.adminResourceUrl}/build-agents`)}getBuildAgentDetails(e){return this.http.get(`${this.adminResourceUrl}/build-agent`,{params:{agentName:e}}).pipe(n(t=>r(()=>new Error(`Failed to fetch build agent details ${e}
${t.message}`))))}pauseBuildAgent(e){let t=encodeURIComponent(e);return this.http.put(`${this.adminResourceUrl}/agents/${t}/pause`,null).pipe(n(s=>r(()=>new Error(`Failed to pause build agent ${e}
${s.message}`))))}pauseAllBuildAgents(){return this.http.put(`${this.adminResourceUrl}/agents/pause-all`,null).pipe(n(e=>r(()=>new Error(`Failed to pause build agents
${e.message}`))))}resumeBuildAgent(e){let t=encodeURIComponent(e);return this.http.put(`${this.adminResourceUrl}/agents/${t}/resume`,null).pipe(n(s=>r(()=>new Error(`Failed to resume build agent ${e}
${s.message}`))))}resumeAllBuildAgents(){return this.http.put(`${this.adminResourceUrl}/agents/resume-all`,null).pipe(n(e=>r(()=>new Error(`Failed to resume build agents
${e.message}`))))}clearDistributedData(){return this.http.delete(`${this.adminResourceUrl}/clear-distributed-data`).pipe(n(e=>r(()=>new Error(`Failed to clear distributed data
${e.message}`))))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();export{h as a};
//# sourceMappingURL=chunk-CSMVJDDI.js.map
