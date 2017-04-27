angular.module('app', [])
.controller('main-controller', function ($scope) {
  $scope.name = "world";
  $scope.lines = [
    { 
    "line": "METRO",
    "desc": "Linea 1 Metropolitana - stazione Fermi (Collegno) - stazione Lingotto"
    },
    {
    "line": "41",
    "desc": "circolare, via Pannunzio (Stazione Lingotto) - via Orbassano (Beinasco-Borgaretto)"
    }
  ];
});
