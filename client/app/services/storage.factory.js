;(function () {
  'use strict'

  angular.module('LRCE')
    .factory('storage', storage)

  storage.$inject = ['$http', '$q', '$timeout']

  function storage ($http, $q, $timeout) {
    var factory = {}
    factory.studentNameAndGradeList = []
    factory.syncSavedList = function () {
      localStorage.setItem('studentData', JSON.stringify(factory.studentNameAndGradeList))
    }

    // Save new student entered via form
    factory.saveStudent = function (student) {
      factory.studentNameAndGradeList.push({
        firstname: student.firstname,
        lastname: student.lastname,
        score: student.score
      })
      factory.syncSavedList()
    }

    // Load student list from localStorage into array
    factory.getStudents = function () {
      var defer = $q.defer()
      factory.studentNameAndGradeList = []
      var savedData = JSON.parse(localStorage.getItem('studentData'))
      for (var i = 0; i < savedData.length; i++) {
        factory.studentNameAndGradeList.push(savedData[i])
      }
      defer.resolve(savedData)
      return defer.promise
    }

    // Create array of test scores from array of student information
    var getStudentGrades = function () {
      var studentGrades = []
      for (var i = 0; i < factory.studentNameAndGradeList.length; i++) {
        studentGrades.push(factory.studentNameAndGradeList[i].score)
      }
      return studentGrades
    }

    // Find lowest test score
    factory.findMin = function () {
      var defer = $q.defer()
      var grades = getStudentGrades()
      var studentMin = Math.min.apply(null, grades)
      if (isFinite(studentMin)) {
        defer.resolve(studentMin)
      } else {
        defer.resolve('enter grades')
      }
      return defer.promise
    }

    // Find highest test score
    factory.findMax = function () {
      var defer = $q.defer()
      var grades = getStudentGrades()
      var studentMax = Math.max.apply(null, grades)
      if (isFinite(studentMax)) {
        defer.resolve(studentMax)
      } else {
        defer.resolve('enter grades')
      }
      return defer.promise
    }

    // Find test score average
    factory.findAverage = function () {
      var defer = $q.defer()
      var grades = getStudentGrades()
      var total = grades.length
      var sum = grades.reduce(add, 0)
      function add (a, b) {
        return a + b
      }
      var average = (sum / total).toFixed()
      if (isFinite(average)) {
        defer.resolve(average)
      } else {
        defer.resolve('enter grades')
      }
      return defer.promise
    }

    return factory
  }
})()
