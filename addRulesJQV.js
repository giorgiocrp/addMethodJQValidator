/*!
 * Additional Rules for 
 * jQuery Validation Plugin 1.11.1
 *
 * http://telespallabob.blogspot.it/
 * http://www.qubidesign.it/cms/
 * 
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2014 Giorgio Carpoca
 * Released under the GPL2 license:
 *   http://www.gnu.org/licenses/gpl-2.0.html
 */

 jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg != value;
    }, "Value not admitted");
    
jQuery.validator.addMethod("OnlyAdultsIT", function (value, element, arg) {
    var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if(re.test(value)) {
            var vetData=value.split("/");
            var intGg=parseInt(vetData[0]);
            var intMm=parseInt(vetData[1]);
            var intYy=parseInt(vetData[2]);

            var dataInserita=new Date(intYy,intMm,intGg);
            var dataMinima=new Date();
            dataMinima.setDate(dataMinima.getDate()-6570);

            if(dataInserita<=dataMinima)  {
                return true;
            } else {
                return false;
            }        
        } else {
            return false;
        }
        
    }, "Registration allowed only to adults");
    
jQuery.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
);