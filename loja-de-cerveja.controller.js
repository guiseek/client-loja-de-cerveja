app
    .controller('LojaDeCervejaController', ['CervejariasService','CervejasService','$scope',function(CervejariasService,CervejasService,$scope) {
        
        // Busca todas as cervejarias na API REST e popula o $scope
        $scope.buscaTodos = function() {
            CervejariasService.buscaTodos().then(function(response) {
                $scope.cervejarias = response.data;
            }, function(error) {
                console.error(error);
            });
        }
        $scope.buscaTodos();
        
        // Salva cervejaria
        $scope.salvarCervejaria = function(cervejaria) {
            if (cervejaria.hasOwnProperty('_id')) {
                CervejariasService.alterar(cervejaria._id, cervejaria).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            } else {
                CervejariasService.salvar(cervejaria).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            }
            $scope.cervejaria = {};
        }
        $scope.alterarCervejaria = function(cervejaria) {
            $scope.cervejaria = angular.copy(cervejaria);
        }
        
        $scope.removerCervejaria = function(cervejaria) {
            if (confirm('Tem certeza que deseja remover a cervejaria ' + cervejaria.nome + '?')) {
                CervejariasService.remover(cervejaria._id).then(function(response) {
                    $scope.buscaTodos();
                }, function(error) {
                    console.error(error);
                });
            }
        }

        // Busca todas as cervejas na API REST e popula o $scope
        $scope.buscaTodasCervejas = function() {
            CervejasService.buscaTodos().then(function(response) {
                $scope.cervejas = response.data;
            }, function(error) {
                console.error(error);
            });
        }
        $scope.buscaTodasCervejas();
   
        // Salva cervejaria
        $scope.salvarCerveja = function(cerveja) {
            if (cerveja.hasOwnProperty('_id')) {
                CervejasService.alterar(cerveja._id, cerveja).then(function(response) {
                    $scope.buscaTodasCervejas();
                }, function(error) {
                    console.error(error);
                });
            } else {
                CervejasService.salvar(cerveja).then(function(response) {
                    $scope.buscaTodasCervejas();
                }, function(error) {
                    console.error(error);
                });
            }
            $scope.cerveja = {};
        }
        $scope.alterarCerveja = function(cerveja) {
            $scope.cerveja = angular.copy(cerveja);
        }

   
   // Define função para adicionar cerveja
   $scope.adicionaCerveja = function(cerveja) {
       // Se a cerveja não possuir id
       if (!cerveja.hasOwnProperty('id')) {
           // Verifica a quantidade e incrementa para o próximo id
           cerveja.id = $scope.cervejas.length + 1;
           // Adiciona cerveja na lista
           $scope.cervejas.push(cerveja);
       }
       // Limpa o objeto cerveja
       $scope.cerveja = {};
   }
   // Define função para remover cerveja
   $scope.removeCerveja = function(cerveja) {
       // Procura cerveja na lista
       var index = $scope.cervejas.indexOf(cerveja);
       // Se o index for maior que -1, a cerveja existe na lista
       if (index > -1) {
           // Remove uma linha da lista, a partir do index
           $scope.cervejas.splice(index,1);
       }
   }
   
   // Carrinho de compras
   $scope.carrinho = [];
   // Define função para adicionar cerveja ao carrinho
   $scope.adicionaCarrinho = function(cerveja) {
       // Adiciona cerveja ao carrinho
       $scope.carrinho.push(angular.copy(cerveja));
       // Se a cerveja já possui quantidade no carrinho ok, se no coloca como 0
       cerveja.carrinho = cerveja.carrinho || 0
       // Incrementa o carrinho para cada cerveja adicionada
       cerveja.carrinho++;
   }
   // Função que limpa o carrinho
   $scope.limpaCarrinho = function() {
       $scope.carrinho = [];
   }
}]);