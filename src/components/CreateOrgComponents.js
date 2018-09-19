var createOrgComponent = function() {
    this.orgName = element(by.css("input[placeholder='organization name']"));
    this.orgId = element(by.css("input[placeholder='organization id']"));
    this.orgType = element(by.css("[placeholder='organization type']"));
    this.orgTypeCommon = ".cdk-overlay-connected-position-bounding-box span";


    this.multiSite = element(by.css("[value='MultiSite'] [class*='outer-circle']"));
    this.singleSite = element(by.css("[value='SingleSite'] [class*='outer-circle']"));
    this.dateFormat = element(by.css("[placeholder='date format']"));
    


    this.calendarFormat = element(by.css("[placeholder='calendar format']"));
    


    this.locale = element(by.css("[placeholder='locale']"));
    this.time12Hr = element(by.css("[value='12'] [class*='outer-circle']"));
    this.time24Hr = element(by.css("[value='24'] [class*='outer-circle']"));
    this.number1Format = element(by.css("[value='1'] [class*='outer-circle']"));
    this.number2Format = element(by.css("[value='2'] [class*='outer-circle']"));
    this.enterRadio = element(by.css("[value='Enters'] [class*='outer-circle']"));
    this.exitRadio = element(by.css("[value='Exits'] [class*='outer-circle']"));
    this.perimeterToggle = element(by.css("[formcontrolname='perimeter'] [class='mat-slide-toggle-thumb']"));
    this.realTimeTrafficToggle = element(by.css("[formcontrolname='realtime_traffic'] [class='mat-slide-toggle-thumb']"));
    this.occupancyToggle = element(by.css("[formcontrolname='occupancy'] [class='mat-slide-toggle-thumb']"));

    this.optionsCss = ".mat-option.ng-star-inserted span";
    

  };
  module.exports = new createOrgComponent();
  