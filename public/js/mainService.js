angular.module('routerApp').service('mainService', function($http, $q){

  this.getData =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividual = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroy = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.create = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "/api/products",
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.update = function(id, body){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: "/api/products/" + id,
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }

//These are your user requests
this.findUser = function(id){
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: "/api/users/" + id
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

this.destroyUser = function(id){
  var deferred = $q.defer();
  $http({
    method: 'DELETE',
    url: "/api/users/" + id
  }).then(function(response){
    deferred.resolve(response);
  })
  return deferred.promise
}

this.createUser = function(body){
  var deferred = $q.defer();
  $http({
    method: 'POST',
    url: "/api/users",
    data: body
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

this.updateUser = function(id, body){
  var deferred = $q.defer();
  $http({
    method: 'PUT',
    url: "/api/users/" + id,
    data: body
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

})
