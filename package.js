Package.describe({
  name: 'francocatena:autoform-bs-datetimepicker',
  summary: 'Custom bootstrap-datetimepicker input type for AutoForm',
  version: '0.2.3',
  git: 'https://github.com/francocatena/meteor-autoform-bs-datetimepicker.git'
})

Package.onUse(function (api) {
  api.use('templating@1.0.0')
  api.use('blaze@2.0.0')
  api.use('aldeed:autoform@4.0.0')
  api.use('momentjs:moment@2.8.4')

  api.addFiles([
    'autoform-bs-datetimepicker.html',
    'autoform-bs-datetimepicker.js'
  ], 'client')
})
