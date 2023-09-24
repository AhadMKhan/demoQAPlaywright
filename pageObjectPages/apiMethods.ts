import { test, expect } from '@playwright/test';

export class APIRequestMethod {
  private request;

  constructor(request) {
    this.request = request;
  }

  async postAPI(url, apiBody, headers): Promise<any> {
    const response = await this.request.post(url,{
      data : apiBody, 
      headers: headers
      });
      return response
  }

  async deleteAPI(url, apiBody, headers): Promise<any> {
    const response = await this.request.delete(url,{
      data : apiBody, 
      headers: headers
      });
      return response
  }
  
}
