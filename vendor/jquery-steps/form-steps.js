var frmInfo = $('#frmInfo');
var frmInfoValidator = frmInfo.validate();

var frmLogin = $('#frmLogin');
var frmLoginValidator = frmLogin.validate();

var frmMobile = $('#frmMobile');
var frmMobileValidator = frmMobile.validate();

$('#employee-profile').steps({
   onChange: function (currentIndex, newIndex, stepDirection) {
      console.log('onChange', currentIndex, newIndex, stepDirection);

      // tab1 -- current 0
      if (currentIndex === 0) {
         if (stepDirection === 'forward') {
            var valid = employeeInfo.valid();
            return valid;
         }
         if (stepDirection === 'backward') {
            frmInfoValidator.resetForm();
         }
      }

      // tab2 -- current 1
      if (currentIndex === 1) {
         if (stepDirection === 'forward') {
            var valid = frmInfo.valid();
            return valid;
         }
         if (stepDirection === 'backward') {
            frmInfoValidator.resetForm();
         }
      }
      // tab3 -- current 2
      //no validation 


      // tab4 -- current 3
      if (currentIndex === 3) {
         if (stepDirection === 'forward') {
            var valid = frmLogin.valid();
            return valid;
         }
         if (stepDirection === 'backward') {
            frmLoginValidator.resetForm();
         }
      }



      // tab5 -- current 4
      if (currentIndex === 4) {
         if (stepDirection === 'forward') {
            var valid = frmMobile.valid();
            return valid;
         }
         if (stepDirection === 'backward') {
            frmMobileValidator.resetForm();
         }
      }

      return true;

   },
   onFinish: function () {
      alert('Wizard Completed');
   }
});



var employeeInfo = $("#employee-information");
employeeInfo.validate({
   errorElement: 'span',
   errorPlacement: function errorPlacement(error, element) {
      element.parents('.form-group').append(error);
   },

   rules: {
      firstName: {
         required: true,
      },
      dob: {
         required: true,
      },
      maritalStatus: {
         required: true,
      },
      gender: {
         required: true
      },
      bloogGroup: {
         required: true
      },
      religion: {
         required: true
      },
      nationality: {
         required: true
      },
      biometric: {
         required: true
      },
      region: {
         required: true
      },
      office: {
         required: true
      },
      department: {
         required: true
      },
      designation: {
         required: true
      },
      joinDate: {
         required: true
      },
      shift: {
         required: true
      },
      joinType: {
         required: true
      },
      category: {
         required: true
      },
      grade: {
         required: true
      },
      probationPeriodFrom: {
         required: true
      },
      probationPeriodTo: {
         required: true
      }

   },
   messages: {
      firstName: {
         required: "Please enter your firstname",
      },
      dob: {
         required: "Please enter your DOB",
      },
      maritalStatus: {
         required: "Please enter your marital status",
      }
   },
});
