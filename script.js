(function() {
    angular.module('myApp', [])
        .controller('myCtrl', function($scope, $timeout) {
            $scope.index1 = 0;
            $scope.index2 = 100;
            $scope.startMoving = function() {
                $scope.iterate($scope.index1 < $scope.index2);
            };
            $scope.iterate = function(incrementFirst) {
                if (incrementFirst && $scope.index1 < 100 || !incrementFirst && $scope.index2 < 100) {
                    if (incrementFirst) {
                        $scope.index1++;
                        $scope.index2--;
                    } else {
                        $scope.index1--;
                        $scope.index2++;
                    }
                    $timeout(function() {
                        $scope.iterate(incrementFirst);
                    }, 10);
                } else {
                    console.log($scope.index1, $scope.index2);
                }
            };
            $scope.corner = [50, 50, 50, 50];
            $scope.changeCorner = function(index, until, positive) {
                if (positive) {
                    if ($scope.corner[index] < until) {
                        $scope.corner[index] += 0.1;
                        $timeout(function() {
                            $scope.changeCorner(index, until, positive);
                        }, 10);
                    } else {
                        $scope.corner[index] = until;
                    }
                } else {
                    if ($scope.corner[index] > until) {
                        $scope.corner[index] -= 0.1;
                        $timeout(function() {
                            $scope.changeCorner(index, until, positive);
                        }, 10);
                    } else {
                        $scope.corner[index] = until;
                        $scope.changeCorner(index, 50, true);
                    }
                }
            }
            $scope.wave = function() {
                let sizeOfWave = 7;
                let gap = 350;
                $scope.changeCorner(0, 50 - sizeOfWave, false);
                $timeout(function() {
                    $scope.changeCorner(1, 50 - sizeOfWave, false);
                    $timeout(function() {
                        $scope.changeCorner(2, 50 - sizeOfWave, false);
                        $timeout(function() {
                            $scope.changeCorner(3, 50 - sizeOfWave, false);
                        }, gap);
                    }, gap);
                }, gap);
            };
        });
})();