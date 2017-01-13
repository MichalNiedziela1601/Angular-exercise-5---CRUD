(function ()
{
    'use strict';

    function BrainCandyDetailsCtrl(CandyDAO, $routeParams, $window, $location)
    {
        var ctrl = this;
        ctrl.id = $routeParams.id;

        CandyDAO.get(ctrl.id)
                .then(function (data)
                {
                    ctrl.details = data;
                });


        ctrl.saveCandy = function ()
        {
            CandyDAO.save(ctrl.details);
                        $location.path('/');

        };

        ctrl.back = function ()
        {
            $window.history.back();
        };
    }

    angular.module('app')
            .controller('BrainCandyDetailsCtrl', BrainCandyDetailsCtrl);


})();
