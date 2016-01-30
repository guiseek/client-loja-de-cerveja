app
    .service('CervejasService',['API','$http',function(API,$http){
        this.buscaTodos = function() {
            return $http.get(API.url + 'cervejas');
        }
        this.busca = function(id) {
            return $http.get(API.url + 'cervejas/' + id);
        }
        this.salvar = function(cerveja) {
            return $http.post(API.url + 'cervejas', cerveja);
        }
        this.alterar = function(id, cerveja) {
            return $http.put(API.url + 'cervejas/' + id, cerveja);
        }
        this.remover = function(id) {
            return $http.delete(API.url + 'cervejas/' + id);
        }
    }]);