var homePageComponent = function() {
  
  this.adminDropDown = element(by.css(".dropdown[ng-if='adminToolAccess']"))
  this.navigateToAdmin = element(by.css("[ng-click='navigateToAdmin()']"));
  this.addOrganizationBtn = element(by.css('.icon.icon-import'));
  this.navigateToAnalytics = element(by.css("[ng-click='navigateToAnalytics()']"));
  this.organizationDropDown = element(by.css("#organisation-picker"));
  this.sitePicker = element(by.css("#site-picker"));
  this.siteName = "[ng-if='itemUiSrefPattern']";
  this.realTimeData = element(by.css("[ng-click='sendToRealTime()']"));
  this.realTimeDataDropDown = element(by.css(".real-time-actions .dropdown-toggle"));
  this.dropDown = ".dropdown-menu.show span";
  this.markers = element.all(by.css('.highcharts-markers'));
  this.timeIcon = element(by.css('.sticon-time'));
  this.optionTimeInterval = ".real-time-options .dropdown-menu.right span";
  this.showTableButton = element(by.css('.data-section.full-height .btn.btn-default span'));
  this.hideTableBtn = element(by.buttonText('Hide table'));
  this.tableHeaderRealTime =  element.all(by.css(' [ref="eText"]'));
  this.realTimeDropDown = element.all(by.xpath("//li[contains(@ng-repeat,'vm.items')]"));
  this.noOfRowsInRealData = element.all(by.css("div.ag-body-container[role='presentation'] [role='row']"));
  this.trafficDropDown = element.all(by.css('.btn.btn-default.btn-xs.dropdown-toggle'));
  this.selectedPeriodChart = element(by.css('.line-high-chart-widget-summary-container'));

  this.optionOnTraffic = element(by.css('.dropdown.kpi-dropdown.btn-group.open .dropdown-menu li a'));
  this.allOptionsOnTraffic = element.all(by.css('.dropdown.kpi-dropdown.btn-group.open .dropdown-menu li a'));
  this.summaryContainer = element.all(by.css('.line-high-chart-widget-summary-container div.value.no-details span'));
  this.allValuesFromSummmaryContainer = element.all(by.css('.line-high-chart-widget-summary-container div.value.no-details span'));
  this.allRealRowTimeData = element.all(by.css(".ag-body-container [role='row']"));
  
};
module.exports = new homePageComponent();
