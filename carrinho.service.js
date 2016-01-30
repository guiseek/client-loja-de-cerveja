app
    .service('CarrinhoService', ['$window', function($window){
        
        this.pega = function() {
            if (localStorage.getItem("carrinho") === null) {
                this.guardar([]);
            }
            var carrinho = $window.localStorage.getItem('carrinho');
            return JSON.parse(carrinho);
        }
        
        this.guardar = function(value){
            return $window.localStorage.setItem('carrinho', JSON.stringify(value));
        }
        
        this.adicionar = function(cerveja) {
            var carrinho = this.pega();
            carrinho.push(angular.copy(cerveja));
            this.guardar(carrinho);
        }
        
        this.remover = function(id) {
            var carrinho = this.pega();
        }
        
        this.limpar = function() {
            $window.localStorege.removeItem('carrinho');
        }
        
    }]);
