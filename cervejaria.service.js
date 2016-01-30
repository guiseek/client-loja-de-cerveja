app
    .service('CervejariasService',['API','$http',function(API,$http){
        this.buscaTodos = function() {
            return $http.get(API.url + 'cervejarias');
        }
        this.busca = function(id) {
            return $http.get(API.url + 'cervejarias/' + id);
        }
        this.salvar = function(cervejaria) {
            return $http.post(API.url + 'cervejarias', cervejaria);
        }
        this.alterar = function(id, cervejaria) {
            return $http.put(API.url + 'cervejarias/' + id, cervejaria);
        }
        this.remover = function(id) {
            return $http.delete(API.url + 'cervejarias/' + id);
        }
        this.procura = function(palavra) {
            return $http.get(API.url + 'cervejarias/procura/' + palavra);
        }
    }]);