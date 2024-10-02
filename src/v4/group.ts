export default (client: any, handler: any) => ({
  _: {
    packages: {
      composer: {
        packages: {
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
          get: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/group/:id/-/packages/composer/packages",resource:"packages",variable:[{name:"id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        },
        p: {
          /** @param {{params:{id:string,sha:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
          get: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/group/:id/-/packages/composer/p/:sha",resource:"packages",variable:[{name:"id",type:"string"},{name:"sha",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        },
        p2: {
          _package_name: {
            /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
            get: ({params = {},query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/group/:id/-/packages/composer/p2/*package_name",resource:"composer",variable:[{name:"id",type:"string"}],headers:{},query:[{name:"package_name",type:"string"}],data:null}, [client, { params, query, clientOptions}])
          }
        },
        _package_name: {
          /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
          get: ({params = {},query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/group/:id/-/packages/composer/*package_name",resource:"packages",variable:[{name:"id",type:"string"}],headers:{},query:[{name:"package_name",type:"string"}],data:null}, [client, { params, query, clientOptions}])
        }
      }
    }
  }
})