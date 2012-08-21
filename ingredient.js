function ingredientCtrl($scope) {
  $scope.ingredients = ['1 cup onions','1 cup pickles chopped','2 cans tuna fish','salt'];

  $scope.addIngredient = function() {
    if ($scope.ingredientText) {
      $scope.ingredients.push($scope.ingredientText);
      $scope.ingredientText = '';
    }
  };

  $scope.removeIngredient = function(index) {
    $scope.ingredients.splice(index, 1);
  };
}
