(function ()
{
    'use strict';

    function CandyDAO($resource)
    {
        var api = $resource('/api/candy/:a', null, {
            query: {
                isArray: false
            }
        });


       return {
           save: function(item){
               if (item.name === undefined || item.author === undefined || item.name === '' || item.author === '' || null == item.name || null == item.author) {
                   return false;
               }
               return api.save({id: item.id, name: item.name, author: item.author}).$promise;
           },
           get: function(id){
               return api.get({a: parseInt(id,10)}).$promise;
           },
           query: function(){
               return api.query().$promise;
           },
           delete: function (id)
           {
               return api.delete({a: parseInt(id,10)}).$promise;
           }
       };
    }

    angular.module('app').factory('CandyDAO', ['$resource', CandyDAO]);
})();
