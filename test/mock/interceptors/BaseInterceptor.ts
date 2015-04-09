class BaseInterceptor {

  constructor(public $httpBackend:ng.IHttpBackendService) {
  }

  public reset():void {
    this.$httpBackend.resetExpectations();
  }

  public flush():void {
    this.$httpBackend.flush();
  }
}
