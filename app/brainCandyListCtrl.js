(function(){
    'use strict';

    function BrainCandyListController(CandyDAO,$route){
        var ctrl = this;
         CandyDAO.query().then(function(data){
             ctrl.brainCandies = data;
         });

        ctrl.deleteCandy = function (id)
        {
            CandyDAO.delete(id)
                    .then(function(){
                        $route.reload();
                    });
        };


    }

    angular.module('app')
        .controller('BrainCandyListCtrl', BrainCandyListController);


})();
