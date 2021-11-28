import {NgModule} from "@angular/core";
import {JsonPlaceholderApiService} from "./jsonplaceholder/json-placeholder-api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  providers: [
    JsonPlaceholderApiService
  ],
  imports: [HttpClientModule]
})
export class ApiServicesModule {}
