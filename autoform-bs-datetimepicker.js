AutoForm.addInputType('bootstrap-datetimepicker', {
  template: 'afBootstrapDatetimePicker',

  valueOut: function () {
    var val = this.data('DateTimePicker').getDate()

    return (val instanceof Date) ? val : new Date(val)
  },

  valueConverters: {
    string: function (val) {
      return (val instanceof Date) ? AutoForm.Utility.dateToDateString(val) : val
    },

    stringArray: function (val) {
      if (val instanceof Date) return [AutoForm.Utility.dateToDateString(val)]

      return val
    },

    number: function (val) {
      return (val instanceof Date) ? val.getTime() : val
    },

    numberArray: function (val) {
      if (val instanceof Date) return [val.getTime()]

      return val
    },

    dateArray: function (val) {
      if (val instanceof Date) return [val]

      return val
    }
  }
})

Template.afBootstrapDatetimePicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts)
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, 'form-control')

    return atts
  }
})

Template.afBootstrapDatetimePicker.rendered = function () {
  var self    = this
  var $input  = self.$('input')
  var data    = self.data

  // instanciate datetimepicker
  $input.datetimepicker()

  // set and reactively update values
  self.autorun(function () {
    var data = Template.currentData()

    // set field value
    $input.data('DateTimePicker').setDate(data.value)

    // set start date if there's a min in the schema
    if (data.min instanceof Date) {
      // datetimepicker plugin expects local Date object, so convert UTC Date object to local
      var minDate = utcToLocal(data.min)

      $input.data('DateTimePicker').setMinDate(minDate)
    }

    // set end date if there's a max in the schema
    if (data.max instanceof Date) {
      // datetimepicker plugin expects local Date object, so convert UTC Date object to local
      var maxDate = utcToLocal(data.max)

      $input.data('DateTimePicker').setMaxDate(maxDate)
    }
  })
}

Template.afBootstrapDatetimePicker.destroyed = function () {
  this.$('input').datetimepicker('remove')
}

function utcToLocal(utcDate) {
  var localDateObj = new Date

  localDateObj.setDate(utcDate.getUTCDate())
  localDateObj.setMonth(utcDate.getUTCMonth())
  localDateObj.setFullYear(utcDate.getUTCFullYear())
  localDateObj.setHours(0)
  localDateObj.setMinutes(0)
  localDateObj.setSeconds(0)
  localDateObj.setMilliseconds(0)

  return localDateObj
}
