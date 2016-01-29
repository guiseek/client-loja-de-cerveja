app
    .controller('LojaDeCervejaController', ['CervejariasService','$scope',function(CervejariasService,$scope) {
        
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
   
    // Definindo a lista de cervejas default
    $scope.cervejas = [
         {
            id: 1,
            nome: 'Gralha azul',
            categoria: 'Stout',
            cervejaria: {
                id: 1,
                nome: 'Araucária'
            }
        },
        {
            id: 2,
            nome: 'Gebumga',
            categoria: 'Pale Ale',
            cervejaria: {
                id: 2,
                nome: 'Gebenha'
            }
        },
        {
            id: 3,
            nome: 'Catedral',
            categoria: 'Indian Pale Ale',
            cervejaria: {
                id: 3,
                nome: 'Catedral'
            }
        }
   ];
   
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