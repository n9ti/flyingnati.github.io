'use strict';

angular.module('feedmebaackApp')
  .controller('MainCtrl', function ($scope,$routeParams) {
    $scope.branchCode = $routeParams.branchCode;

    $scope.nextQuestion = function(){
      if($scope.currentQuestionIndex < $scope.poll.length-1) {
        $scope.currentQuestionIndex++;
      }
    };

    $scope.backQuestion = function(){
      if($scope.currentQuestionIndex > 0) {
        $scope.currentQuestionIndex--;
      }
    };

    $scope.submit = function(){
      console.log($scope.poll);
    };





    $scope.type = [
      'choice',
      'text',
      'number',
      'paragraph'
    ];

    $scope.currentQuestionIndex = 0;

    $scope.poll = [
      {
        'question': 'ชื่อ',
        'type': 'text'
      },
      {
        'question': 'อายุ',
        'type': 'number'
      },
      {
        'question': 'ความสะอาดภายในร้าน',
        'type': 'choice',
        'choices': [
          'ดีมาก',
          'ดี',
          'พอใช้',
          'ปรับปรุง'
        ]
      },
      {
        'question': 'การบริการของพนักงาน',
        'type': 'choice',
        'choices': [
          'ดีมาก',
          'ดี',
          'พอใช้',
          'ปรับปรุง'
        ]
      },
      {
        'question': 'คุณภาพรายการอาหาร',
        'type': 'choice',
        'choices': [
          'ดีมาก',
          'ดี',
          'พอใช้',
          'ปรับปรุง'
        ]
      },
      {
        'question': 'รสชาติอาหาร',
        'type': 'choice',
        'choices': [
          'ดีมาก',
          'ดี',
          'พอใช้',
          'ปรับปรุง'
        ]
      },
      {
        'question': 'ข้อเสนอแนะ',
        'type': 'paragraph'
      }
    ];
  });
